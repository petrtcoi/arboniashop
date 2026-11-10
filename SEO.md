# SEO и техническое состояние arboniashop.ru — журнал

## Проверка 10.11.2026

### Dependabot (GitHub `petrtcoi/arboniashop`)

- Открыто около 150 алертов, из них 9 critical (Next.js: RCE в Image Optimization через SVG/AVIF, RCE на Windows), ~45 high, остальные medium/low. Основная масса — `next` и `axios` (direct, runtime).
- **Причина — репозиторий устарел, а не production.** Последний коммит — 18.09.2026, в нём `next` 14.2.35 и `axios` ^0.24.0. На сервере (`reg-homekomfort`, `homekomfort@arboniashop`, `/srv/homekomfort/staging/arboniashop`, сборка 03.11.2026) — `next` 16.4.4 и `axios` ^1.21.0. Под эти версии ни один алерт не попадает.
- `npm audit --omit=dev` на сервере: **0 уязвимостей**. Полный `npm audit`: 8 moderate, все dev-only (`eslint-config-next`, `@typescript-eslint/*`, `minimatch`) — на работающий сайт не влияют.
- Локальная рабочая копия совпадает с production, кроме `yarn.lock` и `public/sitemap-0.xml`. Не закоммичено ~85 файлов: обновление зависимостей, перенос на REG, статьи октября (батчи 13.10), новые компоненты.
- Dependabot сканирует и `package-lock.json`, и `yarn.lock` — каждый алерт дублируется. Проект собирается через npm (`package-lock.json`), `yarn.lock` устарел.

Что сделать:
1. Закоммитить и запушить текущее состояние (оно и есть production) — алерты по `next` / `axios` закроются автоматически.
2. Удалить `yarn.lock` из репозитория (оставить один lock-файл).
3. Dev-зависимости (`eslint-config-next` и др.) обновить отдельно, без спешки.

### Технический обход (206 URL из sitemap)

- Все URL отдают 200, без редиректов; canonical совпадает с адресом; noindex нет.
- `/request` — **нет `<title>` и meta description** в HTML.
- 13 страниц с одинаковым description по умолчанию («ArboniaShop: магазин трубчатых радиаторов Arbonia…»): `/articles`, `/news` и 6 новостей, `/about`, `/delivery`, `/agreement`, `/oferta`, `/privacy`. Для `/articles` и новостей — нужен свой description.
- `/news/2025-report` — title скопирован с `/news/2024-report` («Отчет о полугодовых результатах Arbonia за 2024 год»), хотя H1 о другом (смена руководства MBT Climate / Kermi).
- 42 title длиннее 70 символов (в основном статьи и SKU `/models/3180-…`) — обрезаются в выдаче, не критично.

### GSC

Не проверено: Claude in Chrome был недоступен, во встроенном браузере нет входа в Google.
