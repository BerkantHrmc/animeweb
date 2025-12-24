import { Navbar } from './Navbar';

export function AuthShell({
  title,
  subtitle,
  backgroundImage,
  children
}: {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar variant="auth" />

      <main className="relative min-h-[calc(100vh-64px)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
        <div className="absolute inset-0 bg-black/35" aria-hidden />

        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-14">
          <div className="w-full max-w-[520px]">
            <div className="rounded-3xl border border-white/10 bg-black/45 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
              <h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-center text-sm text-white/65">{subtitle}</p>
              <div className="mt-8">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
