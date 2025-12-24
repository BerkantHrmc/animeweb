# AniStream (Next.js + Tailwind)

Modern anime akış platformu arayüz prototipi (dark tema + sarı aksan). Tüm içerikler **mock data** ve **placeholder görseller** ile gelir.

## Gereksinimler

- Node.js 20+ (önerilir)

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Sonra `http://localhost:3000` adresini açın.

## Build

```bash
npm run build
npm run start
```

## Sayfalar

- `/login` – Giriş
- `/register` – Kayıt
- `/onboarding` – Kişiselleştirme (tür seçimi)
- `/dashboard` – Ana sayfa
- `/anime/[slug]` – Anime detay + tablar + sticky sağ panel
