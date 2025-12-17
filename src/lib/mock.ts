export type Anime = {
  slug: string;
  title: string;
  year: number;
  seasons: number;
  rating: number;
  maturity: string;
  match: number;
  tags: string[];
  genres: string[];
  studio: string;
  director: string;
  synopsis: string;
  heroImage: string;
  posterImage: string;
};

export type CastMember = {
  name: string;
  role: string;
  avatar: string;
};

export const GENRES: { id: string; label: string; image: string }[] = [
  {
    id: 'aksiyon',
    label: 'Aksiyon',
    image:
      'https://images.unsplash.com/photo-1520975958225-72f8f0b3e2c8?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'macera',
    label: 'Macera',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'fantastik',
    label: 'Fantastik',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'komedi',
    label: 'Komedi',
    image:
      'https://images.unsplash.com/photo-1520975910202-89f4f7b6b0e6?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'romantik',
    label: 'Romantik',
    image:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'korku',
    label: 'Korku',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'gizem',
    label: 'Gizem',
    image:
      'https://images.unsplash.com/photo-1520975868457-4b2d3cb6d2d2?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'spor',
    label: 'Spor',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'mecha',
    label: 'Mecha',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 'bilim-kurgu',
    label: 'Bilim Kurgu',
    image:
      'https://images.unsplash.com/photo-1520975687525-7d40c7f2b4a9?auto=format&fit=crop&w=1200&q=60'
  }
];

export const ANIME: Anime[] = [
  {
    slug: 'cyber-ronin',
    title: 'Cyber Ronin',
    year: 2023,
    seasons: 1,
    rating: 4.8,
    maturity: 'TV-MA',
    match: 98,
    tags: ['#1 Trend', 'Yeni Sezon'],
    genres: ['Aksiyon', 'Macera', 'Shonen', 'Fantastik', 'Bilim Kurgu'],
    studio: 'NeonWorks',
    director: 'Aya Kisaragi',
    synopsis:
      'Neon ışıklı bir metropolde, yalnız bir kılıç ustası şehrin ruhunu kontrol eden yozlaşmış bir sendikaya karşı savaşır.',
    heroImage:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1520975687525-7d40c7f2b4a9?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'kimetsu-no-yaiba',
    title: 'Kimetsu no Yaiba',
    year: 2019,
    seasons: 2,
    rating: 4.9,
    maturity: '16+',
    match: 96,
    tags: ['Top 10'],
    genres: ['Aksiyon', 'Fantastik', 'İblisler', 'Tarihi'],
    studio: 'Ufotable',
    director: 'Haruo Sotozaki',
    synopsis:
      'Ailesi iblisler tarafından katledilen Tanjiro, hayatta kalan kız kardeşi Nezuko’yu kurtarmak ve insanlığa geri döndürmek için iblis avcılarına katılır.',
    heroImage:
      'https://images.unsplash.com/photo-1520975732131-6fd1f5c7f7ad?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'spy-x-family',
    title: 'Spy x Family',
    year: 2022,
    seasons: 2,
    rating: 4.8,
    maturity: '13+',
    match: 98,
    tags: ['Öneri'],
    genres: ['Komedi', 'Aksiyon'],
    studio: 'Wit Studio',
    director: 'Kazuhiro Furuhashi',
    synopsis: 'Bir ajan, sahte bir aile kurarak imkânsız bir görevi tamamlamaya çalışır.',
    heroImage:
      'https://images.unsplash.com/photo-1520975904197-6b0b2db7a12f?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'chainsaw-man',
    title: 'Chainsaw Man',
    year: 2022,
    seasons: 1,
    rating: 4.7,
    maturity: '18+',
    match: 95,
    tags: ['Popüler'],
    genres: ['Karanlık Fantazi', 'Korku'],
    studio: 'MAPPA',
    director: 'Ryu Nakayama',
    synopsis: 'Borç batağındaki Denji, şeytani güçlerle anlaşma yapar ve avcı olur.',
    heroImage:
      'https://images.unsplash.com/photo-1520975932479-6a8f0f72c5c6?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    year: 2020,
    seasons: 2,
    rating: 4.8,
    maturity: '16+',
    match: 94,
    tags: ['Top 10'],
    genres: ['Doğaüstü', 'Aksiyon'],
    studio: 'MAPPA',
    director: 'Sunghoo Park',
    synopsis: 'Yuji, lanetli bir objeyi yutar ve lanetlerle savaşan bir okula katılır.',
    heroImage:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'my-hero-academia',
    title: 'My Hero Academia',
    year: 2016,
    seasons: 6,
    rating: 4.6,
    maturity: '13+',
    match: 92,
    tags: ['Öneri'],
    genres: ['Kahramanlık', 'Okul'],
    studio: 'Bones',
    director: 'Kenji Nagasaki',
    synopsis: 'Süper güçlerin norm olduğu dünyada, güçsüz bir çocuk kahraman olmanın yolunu bulur.',
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'vinland-saga',
    title: 'Vinland Saga',
    year: 2019,
    seasons: 2,
    rating: 4.7,
    maturity: '16+',
    match: 90,
    tags: ['Popüler'],
    genres: ['Tarih', 'Aksiyon'],
    studio: 'Wit Studio',
    director: 'Shuhei Yabuta',
    synopsis: 'Genç bir savaşçı intikam ve anlam arayışında kuzey denizlerine açılır.',
    heroImage:
      'https://images.unsplash.com/photo-1520975958225-72f8f0b3e2c8?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1520975958225-72f8f0b3e2c8?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'tokyo-revengers',
    title: 'Tokyo Revengers',
    year: 2021,
    seasons: 2,
    rating: 4.6,
    maturity: '16+',
    match: 88,
    tags: ['Popüler'],
    genres: ['Suç', 'Dram'],
    studio: 'Liden Films',
    director: 'Koichi Hatsumi',
    synopsis: 'Takemichi, geçmişe gidip kaderi değiştirmeye çalışır.',
    heroImage:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'hells-paradise',
    title: "Hell's Paradise",
    year: 2023,
    seasons: 1,
    rating: 4.6,
    maturity: '18+',
    match: 87,
    tags: ['Top 10'],
    genres: ['Doğaüstü', 'Aksiyon'],
    studio: 'MAPPA',
    director: 'Kaori Makita',
    synopsis: 'Ölümsüzlük adasında, suçlular ve cellatlar hayatta kalma mücadelesi verir.',
    heroImage:
      'https://images.unsplash.com/photo-1520975868457-4b2d3cb6d2d2?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1520975868457-4b2d3cb6d2d2?auto=format&fit=crop&w=900&q=60'
  },
  {
    slug: 'blue-lock',
    title: 'Blue Lock',
    year: 2022,
    seasons: 1,
    rating: 4.7,
    maturity: '13+',
    match: 89,
    tags: ['Spor'],
    genres: ['Spor'],
    studio: '8bit',
    director: 'Tetsuaki Watanabe',
    synopsis: 'Japonya’nın en iyi forvetini yaratmak için acımasız bir proje başlar.',
    heroImage:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=2000&q=60',
    posterImage:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=60'
  }
];

export const CAST: CastMember[] = [
  {
    name: 'Natsuki Hanae',
    role: 'Tanjiro Kamado',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60'
  },
  {
    name: 'Akari Kito',
    role: 'Nezuko Kamado',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60'
  },
  {
    name: 'Hiro Shimono',
    role: 'Zenitsu Agatsuma',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60'
  },
  {
    name: 'Yoshitsugu Matsuoka',
    role: 'Inosuke Hashibira',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60'
  },
  {
    name: 'Takahiro Sakurai',
    role: 'Giyu Tomioka',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60'
  },
  {
    name: 'Houchoo Otsuka',
    role: 'Sakonji Urokodaki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=60'
  }
];

export function getAnimeBySlug(slug: string) {
  return ANIME.find((a) => a.slug === slug);
}

export function pick<T>(arr: T[], count: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}
