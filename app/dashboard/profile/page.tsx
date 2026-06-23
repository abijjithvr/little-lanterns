import { getCurrentUser } from "@/lib/auth";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <section className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6">
      <h1 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)]">Profile</h1>
      <dl className="mt-5 grid gap-3 text-sm text-[var(--brown)]/85 md:grid-cols-2">
        <div className="rounded-2xl bg-white/70 p-4">
          <dt className="text-xs uppercase tracking-wide">Username</dt>
          <dd className="mt-1">{user ? user.username : "—"}</dd>
        </div>
        <div className="rounded-2xl bg-white/70 p-4">
          <dt className="text-xs uppercase tracking-wide">Email</dt>
          <dd className="mt-1">{user ? user.email : "—"}</dd>
        </div>
        <div className="rounded-2xl bg-white/70 p-4">
          <dt className="text-xs uppercase tracking-wide">Date Joined</dt>
          <dd className="mt-1">{user ? new Date(user.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }) : "—"}</dd>
        </div>
      </dl>
    </section>
  );
}
