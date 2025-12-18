import { avatarDataUri, genreDataUri, heroDataUri, posterDataUri } from './placeholders';

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
  { id: 'aksiyon', label: 'Aksiyon', image: genreDataUri('Aksiyon', 'aksiyon') },
  { id: 'macera', label: 'Macera', image: genreDataUri('Macera', 'macera') },
  { id: 'fantastik', label: 'Fantastik', image: genreDataUri('Fantastik', 'fantastik') },
  { id: 'komedi', label: 'Komedi', image: genreDataUri('Komedi', 'komedi') },
  { id: 'romantik', label: 'Romantik', image: genreDataUri('Romantik', 'romantik') },
  { id: 'korku', label: 'Korku', image: genreDataUri('Korku', 'korku') },
  { id: 'gizem', label: 'Gizem', image: genreDataUri('Gizem', 'gizem') },
  { id: 'spor', label: 'Spor', image: genreDataUri('Spor', 'spor') },
  { id: 'mecha', label: 'Mecha', image: genreDataUri('Mecha', 'mecha') },
  { id: 'bilim-kurgu', label: 'Bilim Kurgu', image: genreDataUri('Bilim Kurgu', 'bilim-kurgu') }
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
    heroImage: heroDataUri('Cyber Ronin', 'cyber-ronin'),
    posterImage: posterDataUri('Cyber Ronin', 'cyber-ronin')
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
    heroImage: heroDataUri('Kimetsu no Yaiba', 'kimetsu-no-yaiba'),
    posterImage: posterDataUri('Kimetsu no Yaiba', 'kimetsu-no-yaiba')
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
    heroImage: heroDataUri('Spy x Family', 'spy-x-family'),
    posterImage: posterDataUri('Spy x Family', 'spy-x-family')
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
    heroImage: heroDataUri('Chainsaw Man', 'chainsaw-man'),
    posterImage: posterDataUri('Chainsaw Man', 'chainsaw-man')
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
    heroImage: heroDataUri('Jujutsu Kaisen', 'jujutsu-kaisen'),
    posterImage: posterDataUri('Jujutsu Kaisen', 'jujutsu-kaisen')
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
    heroImage: heroDataUri('My Hero Academia', 'my-hero-academia'),
    posterImage: posterDataUri('My Hero Academia', 'my-hero-academia')
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
    heroImage: heroDataUri('Vinland Saga', 'vinland-saga'),
    posterImage: posterDataUri('Vinland Saga', 'vinland-saga')
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
    heroImage: heroDataUri('Tokyo Revengers', 'tokyo-revengers'),
    posterImage: posterDataUri('Tokyo Revengers', 'tokyo-revengers')
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
    heroImage: heroDataUri("Hell's Paradise", 'hells-paradise'),
    posterImage: posterDataUri("Hell's Paradise", 'hells-paradise')
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
    heroImage: heroDataUri('Blue Lock', 'blue-lock'),
    posterImage: posterDataUri('Blue Lock', 'blue-lock')
  }
];

export const CAST: CastMember[] = [
  {
    name: 'Natsuki Hanae',
    role: 'Tanjiro Kamado',
    avatar: avatarDataUri('Natsuki Hanae')
  },
  {
    name: 'Akari Kito',
    role: 'Nezuko Kamado',
    avatar: avatarDataUri('Akari Kito')
  },
  {
    name: 'Hiro Shimono',
    role: 'Zenitsu Agatsuma',
    avatar: avatarDataUri('Hiro Shimono')
  },
  {
    name: 'Yoshitsugu Matsuoka',
    role: 'Inosuke Hashibira',
    avatar: avatarDataUri('Yoshitsugu Matsuoka')
  },
  {
    name: 'Takahiro Sakurai',
    role: 'Giyu Tomioka',
    avatar: avatarDataUri('Takahiro Sakurai')
  },
  {
    name: 'Houchoo Otsuka',
    role: 'Sakonji Urokodaki',
    avatar: avatarDataUri('Houchoo Otsuka')
  }
];

export function getAnimeBySlug(slug: string) {
  return ANIME.find((a) => a.slug === slug);
}

export function pick<T>(arr: T[], count: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}
