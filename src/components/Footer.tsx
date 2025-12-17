import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-black/25">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-3 text-sm text-white/55">
            AniStream demo arayüzü — modern anime akış platformu tasarım prototipi.
          </p>
        </div>

        <div>
          <div className="text-sm font-extrabold text-white">Göz At</div>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Popüler</li>
            <li>Yeni Çıkanlar</li>
            <li>Simulcast</li>
            <li>Türler</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-extrabold text-white">Hesap</div>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Listem</li>
            <li>Profil</li>
            <li>Ayarlar</li>
            <li>Çıkış Yap</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-extrabold text-white">Yardım</div>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>SSS</li>
            <li>Bize Ulaşın</li>
            <li>Hizmet Şartları</li>
            <li>Gizlilik Politikası</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} AniStream. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
