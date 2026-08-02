/**
 * Единый источник правды по маршрутам сайта.
 *
 * Используется:
 *   • scripts/prerender.mjs — какие страницы пре-рендерить в HTML
 *   • scripts/generate-sitemap.mjs — что попадёт в build/sitemap.xml
 *
 * Формат:
 *   path         — URL-путь без домена (обязательно)
 *   priority     — приоритет 0.0–1.0 для sitemap (по умолчанию 0.5)
 *   changefreq   — как часто обновляется: always | hourly | daily | weekly | monthly | yearly | never
 *   images       — [{ loc, title, caption? }] для sitemap-image расширения
 *   noPrerender  — true, если этот маршрут не нужно пре-рендерить (например, страница ошибки)
 */

export const SITE_URL = "https://complexprint.ru";

export const ROUTES = [
  // ─── Главная ──────────────────────────────────────────────────────────────
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // ─── Основные услуги ──────────────────────────────────────────────────────
  {
    path: "/arenda-kyocera-m2035dn",
    priority: 0.95,
    changefreq: "weekly",
    images: [
      {
        loc: `${SITE_URL}/images/Kyocera-ECOSYS-M2035dn.webp`,
        title: "Аренда МФУ Kyocera ECOSYS M2035dn в Москве",
      },
    ],
  },
  { path: "/komputery-i-komplektuyushchie", priority: 0.9, changefreq: "weekly" },
  { path: "/abonentskoe-obsluzhivanie", priority: 0.95, changefreq: "monthly" },
  { path: "/razovyy-remont", priority: 0.95, changefreq: "monthly" },
  { path: "/mps-autsorsing-pechati", priority: 0.9, changefreq: "monthly" },
  { path: "/pokopiynoe-obsluzhivanie", priority: 0.9, changefreq: "monthly" },
  { path: "/ceny", priority: 0.85, changefreq: "monthly" },

  // ─── Ремонт по брендам ────────────────────────────────────────────────────
  { path: "/remont-printerov-hp", priority: 0.9, changefreq: "monthly" },
  { path: "/remont-printerov-canon", priority: 0.9, changefreq: "monthly" },
  { path: "/remont-printerov-kyocera", priority: 0.9, changefreq: "monthly" },
  { path: "/remont-printerov-ricoh", priority: 0.9, changefreq: "monthly" },
  { path: "/remont-printerov-konica-minolta", priority: 0.9, changefreq: "monthly" },
  { path: "/remont-printerov-xerox", priority: 0.9, changefreq: "monthly" },

  // ─── Полезные материалы / Гайды ───────────────────────────────────────────
  { path: "/faq", priority: 0.85, changefreq: "monthly" },
  { path: "/print-defects-guide", priority: 0.8, changefreq: "monthly" },
  { path: "/printer-error-guide", priority: 0.75, changefreq: "monthly" },
  { path: "/printer-selection", priority: 0.75, changefreq: "monthly" },

  // ─── География обслуживания ───────────────────────────────────────────────
  { path: "/rayony-moskvy", priority: 0.7, changefreq: "monthly" },

  // ─── Аналитика ────────────────────────────────────────────────────────────
  { path: "/analytics", priority: 0.85, changefreq: "weekly" },
  {
    path: "/analytics/rezinovye-ubijcy-printery-tajvan",
    priority: 0.75,
    changefreq: "monthly",
    images: [
      {
        loc: "https://complexprint.ru/images/analytics/cover-rubber-killers.jpg",
        title:
          "Резиновые убийцы, или Почему ваш принтер зажевал отчёт, а Тайвань снова всех спас",
      },
    ],
  },
  {
    path: "/analytics/pochemu-vash-printer-umiraet",
    priority: 0.75,
    changefreq: "monthly",
    images: [
      {
        loc: "https://complexprint.ru/images/analytics/cover-toner-secrets.jpg",
        title: "Почему ваш принтер умирает, а вы даже не понимаете почему",
      },
    ],
  },
  {
    path: "/analytics/kak-kitajskij-printer-sel-rynok",
    priority: 0.75,
    changefreq: "monthly",
    images: [
      {
        loc: "https://complexprint.ru/images/analytics/cover-china-market.jpg",
        title: "Как китайский принтер съел российский рынок",
      },
    ],
  },

  // ─── Видео / портфолио работ ──────────────────────────────────────────────
  { path: "/video", priority: 0.75, changefreq: "monthly" },

  // ─── О компании / Контакты / Отзывы ───────────────────────────────────────
  { path: "/about-us", priority: 0.7, changefreq: "monthly" },
  { path: "/contacts", priority: 0.7, changefreq: "monthly" },
  { path: "/reviews", priority: 0.75, changefreq: "weekly" },

  // ─── Юридическая информация ───────────────────────────────────────────────
  { path: "/user-agreement", priority: 0.3, changefreq: "yearly" },
  { path: "/terms-of-service", priority: 0.3, changefreq: "yearly" },
];
