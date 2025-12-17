import Link from 'next/link';
import { AuthShell } from '@/components/AuthShell';
import { Button, LinkButton } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function RegisterPage() {
  return (
    <AuthShell
      title="Dünyanın Kapılarını Arala"
      subtitle="Binlerce bölümü reklamsız izlemek için hesabınızı oluşturun."
      backgroundImage="https://images.unsplash.com/photo-1520975732131-6fd1f5c7f7ad?auto=format&fit=crop&w=2400&q=60"
    >
      <form className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-white/75">Kullanıcı Adı</label>
          <Input placeholder="OtakuKrali99" autoComplete="username" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-white/75">E-posta Adresi</label>
          <Input placeholder="anime.sever@ornek.com" type="email" autoComplete="email" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white/75">Şifre</label>
            <Input placeholder="••••••••" type="password" autoComplete="new-password" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white/75">Şifre Tekrarı</label>
            <Input placeholder="••••••••" type="password" autoComplete="new-password" />
          </div>
        </div>

        <label className="mt-1 flex items-start gap-3 text-sm text-white/70">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10" />
          <span>
            <span className="text-accent font-semibold">Hizmet Şartları</span>
            &apos;nı ve <span className="text-accent font-semibold">Gizlilik Politikası</span>
            &apos;nı kabul ediyorum.
          </span>
        </label>

        <Button className="mt-2 h-12">Şimdi izlemeye Başla</Button>

        <div className="text-center text-sm text-white/65">
          Zaten bir hesabınız var mı?{' '}
          <Link href="/login" className="font-semibold text-accent hover:opacity-90">
            Giriş Yap
          </Link>
        </div>

        <div className="pt-2">
          <LinkButton
            href="/onboarding"
            variant="ghost"
            className="w-full justify-center border border-white/10 bg-white/5"
          >
            Onboarding&apos;e geç (demo)
          </LinkButton>
        </div>
      </form>
    </AuthShell>
  );
}
