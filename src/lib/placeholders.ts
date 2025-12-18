function hashString(input: string) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(arr: readonly T[], idx: number): T {
  return arr[Math.abs(idx) % arr.length];
}

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const palettes = [
  ['#111827', '#0B1220', '#0EA5E9'], // deep + cyan
  ['#0B1220', '#111827', '#A78BFA'], // deep + violet
  ['#0B1220', '#111827', '#22C55E'], // deep + green
  ['#0B1220', '#111827', '#F97316'], // deep + orange
  ['#0B1220', '#111827', '#EF4444'] // deep + red
] as const;

export function posterDataUri(title: string, seed: string) {
  const h = hashString(seed);
  const [c1, c2, c3] = pick(palettes, h);
  const accent = '#FFC107';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1350" viewBox="0 0 900 1350">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.55" stop-color="${c2}"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="25%" r="70%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="0.35" stop-color="${accent}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <pattern id="scan" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="1" fill="#FFFFFF" opacity="0.06"/>
    </pattern>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14"/>
    </filter>
  </defs>

  <rect width="900" height="1350" fill="url(#bg)"/>
  <rect width="900" height="1350" fill="url(#glow)"/>

  <!-- Stylized anime-ish shapes (silhouette + neon lines) -->
  <g opacity="0.9">
    <path d="M120 980 C 220 720, 340 650, 450 500 C 520 400, 610 360, 760 320" stroke="${accent}" stroke-opacity="0.45" stroke-width="6" fill="none"/>
    <path d="M130 1040 C 260 780, 380 710, 500 560 C 610 440, 690 410, 790 360" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="3" fill="none"/>

    <g opacity="0.75">
      <path d="M520 280 l70 120 -70 110 -70 -110 z" fill="#000000" opacity="0.25"/>
      <path d="M540 310 l45 80 -45 75 -45 -75 z" fill="#000000" opacity="0.35"/>
      <path d="M120 880 l170 -160 160 190 -140 130 z" fill="#000000" opacity="0.22"/>
    </g>

    <circle cx="690" cy="220" r="120" fill="#000000" opacity="0.25"/>
    <circle cx="690" cy="220" r="78" fill="#000000" opacity="0.35"/>
    <circle cx="690" cy="220" r="6" fill="${accent}" opacity="0.95"/>

    <rect x="0" y="0" width="900" height="1350" fill="url(#scan)" opacity="0.35"/>
  </g>

  <!-- Bottom title plate -->
  <g>
    <rect x="60" y="1030" width="780" height="250" rx="26" fill="#000000" opacity="0.55"/>
    <rect x="60" y="1030" width="780" height="250" rx="26" fill="#000000" opacity="0.25" filter="url(#soft)"/>
    <rect x="60" y="1030" width="780" height="250" rx="26" fill="none" stroke="#FFFFFF" opacity="0.10"/>

    <text x="110" y="1120" fill="#FFFFFF" font-size="42" font-weight="800" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">
      ${escapeXml(title)}
    </text>
    <text x="110" y="1170" fill="#FFFFFF" opacity="0.65" font-size="20" font-weight="600" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">
      AniStream • Original Series
    </text>

    <g transform="translate(110 1205)">
      <rect width="160" height="44" rx="22" fill="${accent}" opacity="0.95"/>
      <text x="18" y="29" fill="#000000" font-size="18" font-weight="800" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">
        Hemen İzle
      </text>
    </g>

    <g transform="translate(285 1205)">
      <rect width="190" height="44" rx="22" fill="#FFFFFF" opacity="0.10" stroke="#FFFFFF" stroke-opacity="0.10"/>
      <text x="18" y="29" fill="#FFFFFF" opacity="0.85" font-size="18" font-weight="800" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">
        Daha Fazla
      </text>
    </g>
  </g>
</svg>`;

  return svgToDataUri(svg);
}

export function heroDataUri(title: string, seed: string) {
  const h = hashString(seed + ':hero');
  const [c1, c2, c3] = pick(palettes, h);
  const accent = '#FFC107';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1200" viewBox="0 0 2400 1200">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.55" stop-color="${c2}"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <radialGradient id="spot" cx="25%" cy="25%" r="70%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="0.32" stop-color="${accent}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="26"/>
    </filter>
  </defs>

  <rect width="2400" height="1200" fill="url(#bg)"/>
  <rect width="2400" height="1200" fill="url(#spot)"/>

  <!-- Neon city / forest abstract blocks -->
  <g opacity="0.6">
    <path d="M0 980 C 540 760, 980 900, 1450 720 C 1800 590, 2050 560, 2400 480 L2400 1200 L0 1200 Z" fill="#000" opacity="0.55"/>
    <path d="M0 900 C 520 720, 1020 840, 1500 660 C 1840 530, 2100 500, 2400 430" stroke="${accent}" stroke-opacity="0.40" stroke-width="8" fill="none"/>
    <path d="M0 940 C 520 760, 1020 880, 1500 700 C 1840 570, 2100 540, 2400 470" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="4" fill="none"/>

    <g opacity="0.7">
      <rect x="240" y="240" width="210" height="520" rx="18" fill="#000" opacity="0.25"/>
      <rect x="520" y="180" width="160" height="620" rx="18" fill="#000" opacity="0.22"/>
      <rect x="760" y="310" width="260" height="520" rx="18" fill="#000" opacity="0.20"/>
      <rect x="1120" y="220" width="160" height="640" rx="18" fill="#000" opacity="0.22"/>
      <rect x="1360" y="320" width="280" height="520" rx="18" fill="#000" opacity="0.20"/>
      <rect x="1720" y="190" width="170" height="650" rx="18" fill="#000" opacity="0.22"/>
      <rect x="1960" y="280" width="250" height="560" rx="18" fill="#000" opacity="0.20"/>
    </g>
  </g>

  <g>
    <text x="140" y="640" fill="#FFFFFF" font-size="92" font-weight="900" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" opacity="0.96">
      ${escapeXml(title)}
    </text>
    <text x="140" y="700" fill="#FFFFFF" opacity="0.65" font-size="26" font-weight="650" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">
      AniStream • Dark • Neon • Action
    </text>
  </g>
</svg>`;

  return svgToDataUri(svg);
}

export function genreDataUri(label: string, seed: string) {
  const h = hashString(seed + ':genre');
  const [, , c3] = pick(palettes, h);
  const accent = '#FFC107';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1220"/>
      <stop offset="0.7" stop-color="#111827"/>
      <stop offset="1" stop-color="${c3}" stop-opacity="0.9"/>
    </linearGradient>
    <radialGradient id="spot" cx="30%" cy="30%" r="70%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="0.35" stop-color="${accent}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#spot)"/>
  <path d="M0 620 C 280 520, 520 680, 820 520 C 1030 410, 1110 390, 1200 350 L1200 800 L0 800 Z" fill="#000" opacity="0.55"/>
  <path d="M0 600 C 300 490, 520 650, 820 500 C 1030 390, 1110 370, 1200 330" stroke="${accent}" stroke-opacity="0.35" stroke-width="8" fill="none"/>
  <text x="80" y="710" fill="#FFFFFF" font-size="62" font-weight="900" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">${escapeXml(label)}</text>
</svg>`;

  return svgToDataUri(svg);
}

export function avatarDataUri(name: string) {
  const h = hashString(name + ':avatar');
  const [, , c3] = pick(palettes, h);
  const accent = '#FFC107';
  const initial = (name.trim()[0] || 'A').toUpperCase();

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1220"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <radialGradient id="spot" cx="30%" cy="30%" r="70%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="0.5" stop-color="${accent}" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <circle cx="128" cy="128" r="126" fill="url(#bg)"/>
  <circle cx="128" cy="128" r="126" fill="url(#spot)"/>
  <circle cx="128" cy="128" r="126" fill="none" stroke="#FFFFFF" opacity="0.12"/>

  <text x="128" y="154" text-anchor="middle" fill="#FFFFFF" font-size="92" font-weight="900" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial">${initial}</text>
  <circle cx="196" cy="70" r="10" fill="${accent}" opacity="0.95"/>
</svg>`;

  return svgToDataUri(svg);
}

function escapeXml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
