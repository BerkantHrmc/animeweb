import Link from 'next/link';
import { AuthShell } from '@/components/AuthShell';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function LoginPage() {
  return (
    <AuthShell
      title="Tekrar Hoşgeldin, Otaku"
      subtitle="Macerana kaldığın yerden devam et."
      backgroundImage="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=2400&q=60"
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

        <Button className="mt-3 h-12">Giriş Yap</Button>

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
