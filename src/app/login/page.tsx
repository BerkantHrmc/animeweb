import Link from 'next/link';
import { AuthShell } from '@/components/AuthShell';
import { LinkButton } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { heroDataUri } from '@/lib/placeholders';

export default function LoginPage() {
  return (
    <AuthShell
      title="Tekrar Hoşgeldin, Otaku"
      subtitle="Macerana kaldığın yerden devam et."
      backgroundImage={heroDataUri('Tekrar Hoşgeldin, Otaku', 'auth-login')}
    >
      <form className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-white/75">E-posta veya Kullanıcı Adı</label>
          <Input placeholder="eren.yeager@example.com" autoComplete="username" />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-white/75">Şifre</label>
            <Link href="#" className="text-sm font-semibold text-accent hover:opacity-90">
              Şifremi Unuttum?
            </Link>
          </div>
          <Input placeholder="Şifrenizi girin" type="password" autoComplete="current-password" />
        </div>

        <LinkButton href="/dashboard" className="mt-3 h-12 w-full justify-center">
          Giriş Yap
        </LinkButton>

        <div className="mt-2 text-center text-sm text-white/65">
          Henüz bir hesabın yok mu?{' '}
          <Link href="/register" className="font-semibold text-accent hover:opacity-90">
            Hemen kaydol
          </Link>
        </div>
      </form>
    </AuthShell>
  );
}
