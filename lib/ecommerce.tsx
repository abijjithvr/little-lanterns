"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/types/product";
import { getProductById } from "@/lib/products";

export type CartItem = {
  productId: string;
  quantity: number;
};

type Toast = {
  id: string;
  message: string;
};

type EcommerceState = {
  cart: CartItem[];
  wishlist: string[];
  recentViews: string[];
  toasts: Toast[];
  hydrated: boolean;
};

type EcommerceContextValue = EcommerceState & {
  cartCount: number;
  wishlistCount: number;
  cartItems: Array<{ product: Product; quantity: number }>;
  wishlistItems: Product[];
  recentViewItems: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  moveWishlistToCart: (product: Product) => void;
  markViewed: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  isInCart: (productId: string) => boolean;
  addToast: (message: string) => void;
};

const STORAGE_KEY = "little-lanterns-ecommerce";
const TOAST_DURATION_MS = 2600;

const EcommerceContext = createContext<EcommerceContextValue | null>(null);

function uniqueProductIds(ids: string[]) {
  return Array.from(new Set(ids)).slice(0, 8);
}

function getInitialState(): EcommerceState {
  return {
    cart: [],
    wishlist: [],
    recentViews: [],
    toasts: [],
    hydrated: false,
  };
}

export function EcommerceProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<EcommerceState>(getInitialState);
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<EcommerceState>;
        setState({
          cart: Array.isArray(parsed.cart) ? parsed.cart : [],
          wishlist: Array.isArray(parsed.wishlist) ? parsed.wishlist : [],
          recentViews: Array.isArray(parsed.recentViews) ? parsed.recentViews : [],
          toasts: [],
          hydrated: true,
        });
        return;
      }
    } catch {
      // Ignore malformed persisted state and reset to defaults.
    }

    setState((current) => ({ ...current, hydrated: true }));
  }, []);

  // If user is logged in, fetch wishlist from server and replace local wishlist
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data?.user) {
          const w = await fetch("/api/wishlist");
          const wdata = await w.json();
          if (mounted && Array.isArray(wdata?.wishlist)) {
            setState((current) => ({ ...current, wishlist: wdata.wishlist }));
          }
        }
      } catch {
        // ignore
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!state.hydrated) {
      return;
    }

    const payload: Omit<EcommerceState, "toasts" | "hydrated"> = {
      cart: state.cart,
      wishlist: state.wishlist,
      recentViews: state.recentViews,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [state.cart, state.hydrated, state.recentViews, state.wishlist]);

  useEffect(() => {
    const activeTimers = timers.current;

    return () => {
      Object.values(activeTimers).forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const addToast = useCallback((message: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setState((current) => ({
      ...current,
      toasts: [...current.toasts, { id, message }].slice(-3),
    }));

    timers.current[id] = setTimeout(() => {
      setState((current) => ({
        ...current,
        toasts: current.toasts.filter((toast) => toast.id !== id),
      }));
      delete timers.current[id];
    }, TOAST_DURATION_MS);
  }, []);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setState((current) => {
      const existing = current.cart.find((item) => item.productId === product.id);
      const cart = existing
        ? current.cart.map((item) =>
            item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          )
        : [...current.cart, { productId: product.id, quantity }];

      return { ...current, cart };
    });

    addToast("Added to your lantern basket 🏮");
  }, [addToast]);

  const removeFromCart = useCallback((productId: string) => {
    setState((current) => ({
      ...current,
      cart: current.cart.filter((item) => item.productId !== productId),
    }));
    addToast("Removed from your lantern basket");
  }, [addToast]);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setState((current) => ({
      ...current,
      cart: current.cart.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    }));
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setState((current) => ({ ...current, cart: [] }));
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    const alreadyWishlisted = state.wishlist.includes(product.id);

    (async () => {
      try {
        // Try server toggle; falls back to local-only if unauthorized
        const res = await fetch("/api/wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId: product.id }),
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.wishlist)) {
            setState((current) => ({ ...current, wishlist: data.wishlist }));
            addToast(alreadyWishlisted ? "Removed from wishlist" : "Added to wishlist ♡");
            return;
          }
        }
} catch {
        // ignore and fallback to local
      }

      // fallback local behaviour
      setState((current) => {
        return {
          ...current,
          wishlist: alreadyWishlisted
            ? current.wishlist.filter((item) => item !== product.id)
            : [...current.wishlist, product.id],
        };
      });

      addToast(alreadyWishlisted ? "Removed from wishlist" : "Added to wishlist ♡");
    })();
  }, [addToast, state.wishlist]);

  const moveWishlistToCart = useCallback((product: Product) => {
    setState((current) => ({
      ...current,
      wishlist: current.wishlist.filter((item) => item !== product.id),
      cart: current.cart.some((item) => item.productId === product.id)
        ? current.cart.map((item) =>
            item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...current.cart, { productId: product.id, quantity: 1 }],
    }));

    addToast("Moved to your lantern basket 🏮");
  }, [addToast]);

  const markViewed = useCallback((product: Product) => {
    setState((current) => ({
      ...current,
      recentViews: uniqueProductIds([product.id, ...current.recentViews.filter((id) => id !== product.id)]),
    }));
  }, []);

  const cartItems = useMemo(
    () =>
      state.cart
        .map((item) => {
          const product = state.hydrated ? getProductById(item.productId) : undefined;
          return product ? { product, quantity: item.quantity } : null;
        })
        .filter((item): item is { product: Product; quantity: number } => Boolean(item)),
    [state.cart, state.hydrated],
  );

  const wishlistItems = useMemo(
    () => state.wishlist.map((id) => getProductById(id)).filter(Boolean) as Product[],
    [state.wishlist],
  );

  const recentViewItems = useMemo(
    () => state.recentViews.map((id) => getProductById(id)).filter(Boolean) as Product[],
    [state.recentViews],
  );

  const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  const value = useMemo<EcommerceContextValue>(
    () => ({
      ...state,
      cartCount,
      wishlistCount,
      cartItems,
      wishlistItems,
      recentViewItems,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      toggleWishlist,
      moveWishlistToCart,
      markViewed,
      isWishlisted: (productId: string) => state.wishlist.includes(productId),
      isInCart: (productId: string) => state.cart.some((item) => item.productId === productId),
      addToast,
    }),
    [addToast, addToCart, cartCount, cartItems, clearCart, markViewed, moveWishlistToCart, recentViewItems, removeFromCart, setQuantity, state, toggleWishlist, wishlistCount, wishlistItems],
  );

  return (
    <EcommerceContext.Provider value={value}>
      {children}
      <ToastHost toasts={state.toasts} />
    </EcommerceContext.Provider>
  );
}

function ToastHost({ toasts }: { toasts: Toast[] }) {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-[70] flex w-[min(92vw,24rem)] -translate-x-1/2 flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="rounded-2xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] px-4 py-3 text-center text-sm font-semibold text-[var(--brown)] shadow-[0_18px_32px_rgba(107,79,59,0.18)]"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export function useEcommerce() {
  const context = useContext(EcommerceContext);

  if (!context) {
    throw new Error("useEcommerce must be used within EcommerceProvider");
  }

  return context;
}
