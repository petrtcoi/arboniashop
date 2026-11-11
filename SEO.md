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

### GSC (11.10–07.11 против 13.09–10.10; запросы — 90 дней)

- Сайт: 320 / 227 кликов (+41%), 26,9K / 25,3K показов, CTR 1,2% / 0,9%, позиция 7,1 / 7,7.
- Статьи: 266 / 196 кликов, 23,5K показов — 83% кликов. Главная: 22 / 12, позиция 10,2. Модели `/models/<код>`: 18 / 9 кликов, 1 475 / 1 971 показ. SKU: 1 клик на 1 573 показа. Подборки `/catalog/*`: 6 / 6 кликов, показы упали вдвое (1 120 → 513), позиции 11–17.
- Основной трафик — цвет RAL 9016: «ral 9016» — 6 336 показов, позиция 4, 28 кликов; «рал 9016» — 3 539 / 6,1 / 3; «ral9016» — 1 751 / 4,8 / 5. Это информационный интент (в выдаче — образцы цвета), CTR низкий при любом сниппете.
- Возможная каннибализация: `ral-9016-pochemu-vybirayut-arkhitektory` 77 → 30 кликов (показы 10,3K → 8,1K), новая `ral-9016-9010-9003-kakoy-belyy-vybrat` 0 → 43. Суммарно столько же — новая статья забирает трафик старой; развести интенты (архитекторы / интерьер против сравнения оттенков) или объединить.
- Бренд: «arbonia» — позиция 10, «арбония радиаторы» — 9,3, «радиаторы арбония» — 12,1, «радиатор arbonia» — 13,1. Конкурирует с официальным сайтом Arbonia и arbonia-store.ru.
- Растут: `gde-razmestit-radiator-otopleniya` (56 кликов, 5,1K показов), `panorama` (1 → 24), `radiator-postoyanno-vyklyuchaetsya` (2 → 21), `radiator-pod-glubokim-podokonnikom-stoleshnitsey` (0 → 11).
- Низкий CTR при позиции 5–7: `convection-radiaton-arbonia` (715 показов, 5 кликов), `vertical-vs-horizontal` (409 / 3), `belye-radiatory-v-temnom-interiere` (196 / 1).

Индексация: 228 в индексе, 196 нет. Из них 169 noindex — исполнения по секциям `/models/<sku>/<секции>`, так задумано; 6 × 404 — старые адреса (`/policy/`, `/personal/`, `/news/2023-report`, `/articles/arbonia-3180-ral-9016-vs-anthracite-metallic`, `/models/3057-9016-1270-34`, шаблонный `/models/[id]/[sections]`), часть уже отдаёт 308; 5xx — 3, проверка в GSC запущена; «просканирована / обнаружена, не проиндексирована» — 6 и 4.

### Предложения

1. Коммерческие страницы почти не получают трафика: подборки на позициях 11–17 и теряют показы. Цена «от N ₽» в title подборок и моделей (как на velarshop и zehnders) и ссылки из растущих статей на подборки.
2. Развести или объединить две статьи о RAL 9016.
3. Исправить мета: title и description у `/request`, свой description у `/articles` и новостей, title `/news/2025-report`.
4. Сниппеты статей с CTR < 1% при позиции 5–7 (список выше).
5. После мержа PR #3 — проверить, что алерты Dependabot по `next` / `axios` закрылись.

## Сделано 10.11.2026 (в ветке `security-and-seo-sync-20261110`, PR #3)

- **Две статьи о RAL 9016 объединены** по адресу `/articles/ral-9016-pochemu-vybirayut-arkhitektory` (у него больше показов и внутренних ссылок): что за цвет RAL 9016 + сравнение с RAL 9010 и 9003, блеск, пять шагов выбора, FAQ. Title «RAL 9016: какой это цвет и чем отличается от RAL 9010 и 9003». `/articles/ral-9016-9010-9003-kakoy-belyy-vybrat` — 308 на объединённую статью; ссылки на неё в `/coloring`, `/articles`, `kak-vybrat-cvet-radiatora-pod-interer`, `tsvet-radiatorov-v-interiere` заменены.
- **Сниппеты статей с низким CTR:** `gde-razmestit-radiator-otopleniya` (в description — нормы 80–120 / 60–100 / 20–50 мм), `vertical-vs-horizontal`, `convection-radiaton-arbonia`, `faq`, `belye-radiatory-v-temnom-interiere`, `radiator-pod-glubokim-podokonnikom-stoleshnitsey`. Запросы по страницам не смотрел (Chrome был отключён) — сниппеты написаны по содержанию; проверить CTR после переобхода.
- **Мета:** `/request` получил title и description; свой description у `/articles`, `/news` и всех новостей; title `/news/2025-report` исправлен (смена руководства MBT Climate / Kermi), title `/news/2023-design` сокращён.
- **Цена «от N ₽» в title:** подборки `high-models` (14 247), `low-models` (12 896), `standard` (13 981), `ral9016` (12 896); серии 2050, 2057, 2180, 3030, 3050, 3057, 3180 и все `/models/<код>` / SKU. Цена — та же, что на странице (минимальная складская позиция в таблицах ModelBlock / «Цена от» в ModelMainSection), helper `utils/getPriceFrom.ts`. Все 13 контрольных значений совпали с ценами на живом сайте.
- **Пакеты обновлены до текущих:** next 16.4.6, react / react-dom 19.3.1, @mui/material и icons 9.5.0, axios 1.21.1, typescript 7.0.2, eslint 10.14.0, eslint-config-next 16.4.6, @types/react 19; @types/node оставлен на 22 (на сервере Node 22). Удалён неиспользуемый `react-material-ui-carousel`.
  - MUI 9: system props (`<Box marginTop=…>`) перенесены в `sx` и Grid на новый API (`size`) codemod'ами `@mui/codemod@7.3` (`v6.0.0/system-props`, `v7.0.0/grid-props`); `Hidden` заменён своим `components/ui/Hidden.tsx` (CSS, без обёртки); `TransitionComponent` → `slots.transition`, `inputProps` → `slotProps.htmlInput`; `tsconfig` target ES5 → ES2017 (TS 7).
  - Grid v2 считает `spacing` через gap: у контейнеров с собственным `marginTop` пропадали 16 px — на главной компенсировано (`marginTop: 21px`).
  - Проверка: сравнение раскладки (высота страницы, позиции заголовков, картинок, кнопок, таблиц) с production на 12 типовых страницах при 1280 и 375 px — совпадает; мета всех 205 URL — те же изменения, что до обновления пакетов. `/accepted` отличается на 4–6 px; оформление заказа в корзине с товарами не проверялось.
- Известная проблема, не новая: на всех страницах в консоли ошибка гидратации React #418 (есть и на production до изменений) — разобрать отдельно.

### Выкладка 10.11.2026

Релиз `/srv/homekomfort/releases/arboniashop-20261110-seo` (коммит `57d7be6`): исходники из git, зависимости поставлены на сервере `npm ci --omit=dev` (новые версии пакетов), `.next` собран локально по тому же `package-lock.json`. Проверен на временном порту 3112 (страницы, редирект, CSS, корзина с товаром через SSH-туннель), затем включён drop-in `/etc/systemd/system/homekomfort@arboniashop.service.d/release.conf`. Прежний каталог `/srv/homekomfort/staging/arboniashop` оставлен; откат — удалить drop-in, `systemctl daemon-reload && systemctl restart homekomfort@arboniashop`. На живом сайте: новые title с ценами, объединённая статья, 308 со старой, sitemap — 205 URL.

## Ошибка гидратации React #418 (разбор 10.11.2026, ветка `fix-hydration-20261110`)

Была на всех страницах и до обновления пакетов. Цены в серверном HTML **есть** (таблицы и `itemProp="price"`; цены считаются детерминированно: цена секции в евро из таблицы моделей × фиксированный курс 104,54 × 0,75) — к ошибке не относятся. Причины (по тексту ошибки в dev-режиме):

1. **Блочные элементы внутри `<Typography>` (рендерится в `<p>`):** `<p>`, `<h2>`, `<div>`, `<table>`, `<ul>` внутри `<p>` — браузер при разборе HTML закрывает `<p>` раньше, DOM расходится с тем, что строит React. 79 мест в 23 файлах (`pages/models/*`, `pages/radiators/*`, статьи, `setRAL9016Model`, `delivery`, `404`) — у таких `Typography` добавлен `component='div'`. Вид не меняется: стили Typography те же, после сбоя React и так перестраивал эти блоки в браузере с той же вложенностью.
2. **Не было Emotion SSR-кэша:** стили MUI вставлялись по ходу разметки, и классы на сервере и в браузере расходились (например, у иконки телефона в шапке). Подключён официальный `@mui/material-nextjs` (pages router): `AppCacheProvider` в `_app.tsx`, `DocumentHeadTags` + `documentGetInitialProps` в `_document.tsx`; добавлены `@emotion/cache`, `@emotion/server`.

Проверка: dev-сервер, 21 страница разных шаблонов — ошибок гидратации нет. Production-сборка: мета всех 205 URL совпадает с живым сайтом; раскладка 14 страниц при 1280 и 375 px совпадает с живым сайтом до пикселя.

### Доработка и выкладка 10–11.11.2026

После первой выкладки исправления (`arboniashop-20261110-hydration`) проверка всех страниц на живом сайте (скрипт-перехватчик ошибок в начале `<head>` до гидратации) нашла #418 ещё на 13 страницах. Причины и исправления:

- таблицы без `<tbody>` (`<tr>` прямо в `<table>`) — 9 таблиц в 6 статьях (`faq`, `gde-razmestit…`, `vertical-vs-horizontal`, `radiator-postoyanno-vyklyuchaetsya`, `belye-radiatory…`, `arbonia-3180-ral-9016-vs-anthracite`);
- `<ul>` внутри `<p>` — `/articles/termostat`, `/delivery`: абзацы разбиты вокруг списков;
- `Typography` внутри `Typography` (`<p>` в `<p>`) в строках цены — `/radiators/2180-*`: вложенные стали `span`; там же исправлен неподставленный `#{SECTIONS_POSTFIX}` в alt.
- В Hero незакрытая скобка `rgb(0 0 0 / 60%` в `text-shadow` — исправлена.

Пробовал отдавать стили Emotion одним блоком в `<head>` (`transpilePackages: ['@mui/material-nextjs']`): SSR-кэш заработал, но CSS-модули статей стали перекрывать стили MUI и вёрстка поменялась; вынос стилей в `<body>` не помог — откатил. Стили остаются как раньше (inline при SSR). `AppCacheProvider` на сервере фактически не действует (внешний модуль со своей копией `@emotion/react`) — классы на клиенте отличаются, React это только предупреждает в dev, ошибки #418 нет.

Релиз `/srv/homekomfort/releases/arboniashop-20261110-hydration2` (коммит `10fba95`), предыдущий drop-in — `/root/arboniashop-release.conf.bak-20261110-hydration`. Проверено 11.11 на живом сайте: все 207 URL (sitemap + корзина + `/accepted`) гидратируются без ошибок, мета совпадает с проверенной сборкой.

**Права на кэш.** В релизах, собранных 09–10.11, не было `.next/cache`, а `.next` принадлежит root — сервис (`hk-<site>`) не мог писать кэш оптимизированных картинок (EACCES в журнале). 11.11 создан `.next/cache` с владельцем `hk-arboniashop`, `.next` отдан тому же пользователю. В следующих выкладках: `install -d -o hk-<site> -g hk-<site> .next/cache` и `chown hk-<site> .next`.
