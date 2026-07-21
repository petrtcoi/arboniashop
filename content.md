# SEO-карта кластеров ArboniaShop

Рабочий план развития коммерческого SEO для **arboniashop.ru**. Логика та же, что в плане для VelarShop: не список статей, а структура `коммерческая страница → Tier-1 → Tier-2`, где каждая статья усиливает конкретную money page и возвращает пользователя к каталогу, модели, расчёту или заявке.

**Ключевое отличие Arbonia от VelarShop.** У VelarShop пять товарных категорий (трубчатые, напольные, конвекторы, ретро, дизайн). У ArboniaShop — **один тип товара: стальные трубчатые радиаторы Arbonia**. Поэтому кластеры строятся не по типам приборов, а по *измерениям коммерческого интента*:

- по высоте: низкие (до 40 см) / стандартные (50–60 см) / вертикальные (от 150 см);
- по числу труб: 2 / 3 / 4 / 5 / 6-трубчатые;
- по подключению: боковое / нижнее;
- по цвету: RAL 9016 / антрацит SF-3 / цветные / покраска под заказ;
- по сценарию: под окно / панорамные окна / замена старых батарей / интерьер;
- по модели: 2180, 3180, 3057, 3050, 2050, 3030 (money pages в наличии).

Здесь **не расписываем Tier-3**. Задача этапа — собрать кластеры вокруг существующих коммерческих страниц и понять: какие статьи уже есть, какие нужно углубить, какие добавить и куда они должны ссылаться.

## Главная проблема текущей структуры

На сайте уже **39 статей** с учетом публикаций от 2026-07-21, но часть материалов по-прежнему не привязана к кластеру входящими и исходящими ссылками. Кластер нужно перестроить из вида:

```txt
Коммерческая страница
├── статья
├── статья
└── статья
```

в понятную SEO-структуру:

```txt
Коммерческая страница / money page
└── Tier-1: опорный гид или крупный сценарий выбора
    ├── Tier-2: сравнение моделей
    ├── Tier-2: расчёт / технический разбор
    ├── Tier-2: сценарий применения
    └── Tier-2: возражения / ошибки / эксплуатация
```

## Аудит реализации от 2026-07-21

План частично отставал от кода. Коммерческий хаб `/catalog/standard` и статья `/articles/radiatory-arbonia-pod-okno` уже были реализованы, хотя ниже оставались пометки «создать» и «добавить». Добавлены и перелинкованы `/articles/radiator-pod-nizkiy-podokonnik` и `/articles/mezhosevoe-rasstoyanie-500-mm-arbonia`; обе страницы включены в общий список статей и получили входящие ссылки от профильных хабов и существующих материалов.

При дальнейшем расширении нужно проверять каннибализацию до создания нового URL. Не создавать отдельную общую статью `/articles/zamena-staryh-batarey-na-arbonia`, пока интент уже закрывают `/articles/arbonia-3057`, `/articles/calc-radiators-by-old-ones` и новая страница про межосевое расстояние 500 мм. По той же причине тему 2-, 3- и 4-трубчатых моделей лучше добавить в существующую `/articles/2-3-columns`, а выбор бокового и нижнего подключения углублять на `/articles/connections`. Новый URL под онлайн-расчет оправдан только вместе с рабочим калькулятором, иначе он будет конкурировать с `/articles/calculate`.

---

## 1. Общая стратегия

ArboniaShop — коммерческий сайт. Статьи не должны жить отдельно от каталога: каждая отвечает на вопрос пользователя и ведёт к продаже — на каталог, модель, расчёт или заявку.

Базовый путь пользователя:

```txt
Информационный вопрос
→ статья
→ уточнение / сравнение / расчёт
→ коммерческая страница (каталог или модель)
→ конфигурация (высота / цвет / подключение / число секций)
→ заявка /request
```

Для AI-выдачи каждая новая или обновляемая статья начинается с короткого ответа на 40–70 слов, затем таблица выбора, затем подробный разбор и FAQ. Цель — не SEO-текст, а ответ, который можно процитировать в генеративной выдаче.

---

## 2. Уровни страниц

### Коммерческий уровень (money pages)

Существующие:

```txt
/                       — бренд + категория «трубчатые радиаторы Arbonia»
/catalog/high-models    — вертикальные (высокие) радиаторы, склад
/catalog/low-models     — низкие радиаторы (до 40 см), склад
/catalog/ral9016        — Arbonia в белом RAL 9016, склад
/coloring               — покраска радиаторов
/request                — заявка / расчёт
/models/2180 /models/3180 /models/3057 /models/3050 /models/2050 /models/3030 ...
```

Рекомендуется **добавить** коммерческие хабы (сильные SEO-точки входа):

```txt
/catalog/standard        — радиаторы под окно, высота 50–60 см
/catalog/anthracite      — антрацит / чёрные радиаторы (SF-3 Anthrazit metallic, RAL 9005)
/catalog/bottom-models   — радиаторы с нижним подключением (опционально)
/catalog/2-tube          — 2-трубчатые (65 мм) (опционально)
/catalog/3-tube          — 3-трубчатые (105 мм) (опционально)
```

`/coloring` стоит развить из сервисной страницы в полноценную money page под запросы «покраска радиаторов в любой цвет RAL», «радиатор в цвет стены».

### Tier-1

Опорные гиды и крупные сценарии выбора. Объясняют направление и ведут к коммерческой странице. Примеры существующих:

```txt
/articles/column-radiators                      — трубчатые радиаторы: особенности
/articles/arbonia-kak-vybrat-trubchatyj-radiator — как выбрать трубчатый радиатор Arbonia
/articles/high-arbonia                          — высокие радиаторы Arbonia
/articles/low-models                            — невысокие модели в наличии
/articles/ral-9016-pochemu-vybirayut-arkhitektory — RAL 9016
/articles/calculate                             — как подбирать по мощности
```

### Tier-2

Углубляющие статьи: сравнения, расчёты, частные сценарии, технические вопросы, монтаж, эксплуатация, цвет. Примеры существующих:

```txt
/articles/2180-3180                  — 2180 vs 3180
/articles/arbonia-3030-vs-3037       — 3030 vs 3037
/articles/vertical-radiator-power    — расчёт мощности вертикального
/articles/montazh-arbonia-2180-na-gkl — монтаж на ГКЛ
/articles/connections                — боковое и нижнее подключение
/articles/belye-radiatory-v-temnom-interiere — белый на тёмной стене
```

---

# 3. Кластер «Трубчатые радиаторы Arbonia» (бренд + категория)

Money page: **`/`** (главная). Это вход по общим и брендовым запросам: «трубчатые радиаторы», «стальные трубчатые радиаторы Arbonia», «радиаторы Arbonia купить».

## Структура

```txt
Трубчатые радиаторы Arbonia
└── [есть] /
    ├── [2026.07.06 - updated] /articles/column-radiators
    │   ├── [есть] /articles/arbonia-radiators
    │   ├── [есть] /articles/convection-radiaton-arbonia
    │   ├── [есть] /articles/2-3-columns
    │   ├── [есть] /articles/epd
    │   ├── [добавить] /articles/trubchatye-radiatory-arbonia-dlya-kvartiry
    │   └── [добавить] /articles/trubchatye-radiatory-arbonia-dlya-chastnogo-doma
    │
    └── [есть / углубить] /articles/arbonia-kak-vybrat-trubchatyj-radiator
        ├── [есть] /articles/calculate
        ├── [есть] /articles/2-3-columns
        ├── [объединить с существующей] /articles/2-3-columns — добавить 4-трубчатые
        ├── [добавить] /articles/kakoy-radiator-arbonia-vybrat-pod-zadachu
        └── [добавить] /articles/chem-otlichayutsya-trubchatye-radiatory-arbonia
```

## Роли страниц

### `/` (главная)
Брендовый и категорийный хаб. Должна закрывать «трубчатые радиаторы Arbonia», «стальные трубчатые радиаторы», вести на три каталожных подборки (`/catalog/high-models`, `/catalog/low-models`, `/catalog/ral9016`), на лидеров продаж (2180, 3057, 3180, 3030, 2050, 3050) и на `/request`. Усилить блок «Полезные статьи» ссылками на Tier-1 кластера.

### `/articles/column-radiators` — Tier-1
Опорная статья про трубчатые радиаторы как класс. Сделать не описательной, а навигационной: что это, кому подходят, число труб и глубина, высота, преимущества Arbonia, ссылки на каталог. Связи: `/`, `/articles/arbonia-kak-vybrat-trubchatyj-radiator`, `/articles/2-3-columns`, `/request`.

### `/articles/arbonia-kak-vybrat-trubchatyj-radiator` — Tier-1
Главный гид выбора. Добавить answer-first, таблицу «задача → высота → число труб → модель», ссылки на `/catalog/*` и модели. Это центральная распределяющая статья.

## Что добавить
- **`/articles/2-3-columns`** (Tier-2, углубить) — добавить 4-трубчатые в существующий URL: глубина, мощность, где какой. Отдельную статью не создавать, чтобы не конкурировать по одному интенту. Связи: `/`, модели 2xxx/3xxx/4xxx, `/request`.
- **`/articles/trubchatye-radiatory-arbonia-dlya-kvartiry`** (Tier-2) — центральное отопление, давление, замена батарей, межосевое 500 мм. Связи: `/catalog/standard`, `/articles/connections`, `/request`.
- **`/articles/trubchatye-radiatory-arbonia-dlya-chastnogo-doma`** (Tier-2) — автономка, большие помещения, панорамные окна. Связи: `/catalog/high-models`, `/catalog/low-models`, `/request`.
- **`/articles/chem-otlichayutsya-trubchatye-radiatory-arbonia`** (Tier-1/2) — чем Arbonia отличается (качество стали, сварка, гарантия 10 лет, EPD). Связи: `/`, `/articles/epd`, `/request`.

---

# 4. Кластер «Вертикальные (высокие) радиаторы Arbonia»

Money page: **`/catalog/high-models`**. Один из самых сильных коммерческих кластеров — у него уже больше всего статей.

## Структура

```txt
Вертикальные радиаторы Arbonia
└── [есть] /catalog/high-models
    ├── [2026.07.06 - updated] /articles/high-arbonia
    │   ├── [есть] /articles/panorama
    │   ├── [есть] /articles/vertical-vs-horizontal
    │   ├── [есть] /articles/2180-3180
    │   ├── [добавить] /articles/vertikalnyy-radiator-dlya-gostinoy
    │   └── [добавить] /articles/vertikalnyy-radiator-v-prihozhey-i-koridore
    │
    ├── [есть / углубить] /articles/vertical-radiator-power
    │   ├── [есть] /articles/calculate
    │   ├── [есть] /articles/calc-radiators-by-old-ones
    │   └── [добавить] /articles/skolko-sekciy-vertikalnogo-radiatora-arbonia
    │
    ├── [есть] /articles/kogda-vertikalnyy-radiator-arbonia-ne-podkhodit  (возражения)
    │   └── [добавить] /articles/vertikalnyy-radiator-vmesto-batarei-pod-oknom
    │
    └── [есть / углубить] /articles/montazh-vysokih-radiatorov-arbonia-instrukciya
        ├── [есть] /articles/montazh-arbonia-2180-na-gkl
        ├── [есть] /articles/consoles
        └── [добавить] /articles/skolko-vesit-vysokiy-radiator-arbonia
```

## Роли страниц

### `/catalog/high-models`
Коммерческий хаб вертикальных радиаторов. Должен закрывать «вертикальные радиаторы Arbonia», «высокие радиаторы 180 см», вести на 2180/3180 (и цветные версии), на расчёт и `/request`. Усилить: первый экран с УТП, блок моделей, таблицу высот, FAQ, блок статей, форму расчёта.

### `/articles/high-arbonia` — Tier-1
Опорная статья кластера. Углубить: когда нужен высокий радиатор, ограничения, вес и монтаж, мощность, цвета, ссылки на 2180/3180. Связи: вверх на `/catalog/high-models`, вниз на панорамные окна, сравнение вертикальный/горизонтальный, монтаж.

### `/articles/panorama` — Tier-1/2
Сценарий «панорамные окна». Связать с `/catalog/high-models` и `/catalog/low-models` (низкий радиатор в пол как альтернатива), с `/request`.

### `/articles/kogda-vertikalnyy-radiator-arbonia-ne-podkhodit` — Tier-2 (возражения)
Снимает риск ошибки выбора и удерживает доверие. Обязательно вести на альтернативу — низкие/стандартные модели и расчёт.

## Что добавить
- **`/articles/vertikalnyy-radiator-dlya-gostinoy`** (Tier-2) — большие комнаты, акцент в интерьере. Связи: `/catalog/high-models`, `/models/3180`.
- **`/articles/vertikalnyy-radiator-v-prihozhey-i-koridore`** (Tier-2) — узкие пространства, экономия стены. Связи: `/catalog/high-models`, `/models/2180`.
- **`/articles/vertikalnyy-radiator-vmesto-batarei-pod-oknom`** (Tier-2) — перенос отопления от окна, что учесть. Связи: `/articles/panorama`, `/request`.
- **`/articles/skolko-vesit-vysokiy-radiator-arbonia`** (Tier-2) — вес, нагрузка на стену, кронштейны. Связи: `/articles/montazh-vysokih-radiatorov-arbonia-instrukciya`, `/articles/consoles`.

---

# 5. Кластер «Низкие радиаторы Arbonia (под низкий подоконник)»

Money page: **`/catalog/low-models`**. Хаб есть, но кластер в таблице почти не размечен — точка роста.

## Структура

```txt
Низкие радиаторы Arbonia
└── [есть] /catalog/low-models
    ├── [есть / углубить] /articles/low-models
    │   ├── [есть] /articles/arbonia-3030-vs-3037
    │   ├── [есть] /articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat
    │   ├── [2026.07.21] /articles/radiator-pod-nizkiy-podokonnik
    │   └── [добавить] /articles/arbonia-2030-ili-3030-chto-vybrat
    │
    └── [есть] /articles/panorama  (общий с кластером 4)
        ├── [добавить] /articles/nizkiy-radiator-pod-panoramnoe-okno
        └── [добавить] /articles/nizkiy-radiator-bokovoe-ili-nizhnee-podklyuchenie
```

## Роли страниц

### `/catalog/low-models`
Хаб моделей до 40 см под низкие подоконники и панорамное остекление. Закрывает «низкие радиаторы отопления», «радиатор под низкий подоконник», «радиатор в пол под окно». Вести на 3030/3037/2030, расчёт и `/request`.

### `/articles/low-models` — Tier-1
Опорная статья. Углубить сценариями: низкий подоконник, панорамные окна, дополнительный источник тепла, выбор бокового подключения для минимальной высоты. Связи: `/catalog/low-models`, сравнения высот, `/request`.

## Что добавить
- **`/articles/radiator-pod-nizkiy-podokonnik`** (Tier-1, добавлено 2026-07-21) — подбор высоты под подоконник, сравнение 2030/3030, мощность и подключение. Входящие связи: `/catalog/low-models`, `/articles/low-models`, `/articles/arbonia-3030-vs-3037`. Исходящие связи: хаб, модели, расчет, подключения, панорамные окна и `/request`.
- **`/articles/nizkiy-radiator-pod-panoramnoe-okno`** (Tier-2) — радиатор в пол перед панорамным окном. Связи: `/catalog/low-models`, `/articles/panorama`.
- **`/articles/arbonia-2030-ili-3030-chto-vybrat`** (Tier-2) — 2- vs 3-трубчатый низкий. Связи: `/models/3030`, `/models/2030`.
- **`/articles/nizkiy-radiator-bokovoe-ili-nizhnee-podklyuchenie`** (Tier-2) — почему боковое даёт меньшую монтажную высоту. Связи: `/articles/connections`, `/catalog/low-models`.

---

# 6. Кластер «Стандартные радиаторы под окно (50–60 см)» — НОВЫЙ

Money page: **`/catalog/standard`** (создать). Сейчас стандартные модели (2050/2057/3050/3057) живут только на главной и на модельных страницах — нет каталожного хаба под массовый запрос «радиатор под окно».

## Структура

```txt
Стандартные радиаторы под окно Arbonia
└── [2026.07.06] /catalog/standard
    ├── [есть] /articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat
    ├── [есть] /articles/arbonia-3057  (замена чугунных)
    ├── [есть] /articles/radiatory-arbonia-pod-okno
    ├── [не создавать отдельно — развести роли существующих страниц] сценарий замены старых батарей
    ├── [2026.07.21] /articles/mezhosevoe-rasstoyanie-500-mm-arbonia
    └── [добавить] /articles/arbonia-2050-ili-3050-chto-vybrat
```

## Роли страниц

### `/catalog/standard` (создать)
Хаб моделей 50–60 см под окно. Закрывает «радиатор под окно», «радиатор на замену чугунного», «межосевое 500 мм». Вести на 2050/2057/3050/3057 и `/request`.

### `/articles/arbonia-3057` — Tier-2 → поднять до Tier-1
Сильная статья по замене чугунных/алюминиевых батарей. Сделать опорной для сценария «замена», вести на `/catalog/standard`.

## Что добавить
- **`/articles/radiatory-arbonia-pod-okno`** (Tier-1, уже реализовано) — опорный гид под окно: высота, межосевое, подключение, число секций. Связи: `/catalog/standard`, модели, `/request`.
- **Сценарий замены старых батарей** — не создавать новый общий URL до переработки существующих материалов. `/articles/arbonia-3057` должен отвечать за конкретную модель и замену чугуна, `/articles/calc-radiators-by-old-ones` — за расчет по установленному прибору, `/articles/mezhosevoe-rasstoyanie-500-mm-arbonia` — за геометрию подключения.
- **`/articles/mezhosevoe-rasstoyanie-500-mm-arbonia`** (Tier-2, добавлено 2026-07-21) — проверка замены на Arbonia 2057/3057 без обещания обязательного сохранения труб. Входящие связи: `/catalog/standard`, `/articles/connections`, `/articles/arbonia-3057`. Исходящие связи: хаб, обе модели, расчет, монтаж и `/request`.
- **`/articles/arbonia-2050-ili-3050-chto-vybrat`** (Tier-2) — 2- vs 3-трубчатый под окно. Связи: `/models/2050`, `/models/3050`.

---

# 7. Кластер «Цвет и покраска радиаторов Arbonia»

Money pages: **`/catalog/ral9016`** + **`/coloring`** (+ новый **`/catalog/anthracite`**).

## Структура

```txt
Цвет и покраска Arbonia
├── [есть] /catalog/ral9016
│   ├── [есть / углубить] /articles/ral-9016-pochemu-vybirayut-arkhitektory
│   ├── [есть] /articles/tsvet-radiatorov-v-interiere
│   ├── [есть] /articles/belye-radiatory-v-temnom-interiere
│   └── [добавить] /articles/kak-vybrat-cvet-radiatora-pod-interer
│
├── [добавить] /catalog/anthracite
│   ├── [есть] /articles/arbonia-3180-ral-9016-vs-anthracite
│   ├── [добавить] /articles/chernyy-radiator-arbonia-anthracite
│   └── [добавить] /articles/temno-serye-radiatory-v-interere
│
└── [есть / усилить] /coloring
    ├── [добавить] /articles/pokraska-radiatora-v-lyuboy-cvet-ral
    ├── [добавить] /articles/radiator-v-cvet-steny-ili-akcentnyy
    └── [добавить] /articles/cvetnye-radiatory-arbonia-v-interere
```

## Роли страниц

### `/catalog/ral9016`
Хаб белых складских моделей. Связать с гидом по цвету и интерьерными статьями, вести на модели и `/request`.

### `/coloring` — усилить до money page
Сейчас сервисная страница. Развернуть под «покраска радиаторов в любой цвет RAL», «радиатор в цвет стены»: палитра, сроки, примеры, CTA. Это уникальное УТП Arbonia (порошковая покраска под заказ).

### `/catalog/anthracite` (создать)
Хаб антрацитовых/чёрных моделей (SF-3 Anthrazit metallic, RAL 9005). Высокий коммерческий интент: «чёрный радиатор», «антрацитовый радиатор отопления».

## Что добавить
- **`/articles/kak-vybrat-cvet-radiatora-pod-interer`** (Tier-1) — главный гид по цвету. Связи: `/coloring`, `/catalog/ral9016`, `/catalog/anthracite`.
- **`/articles/chernyy-radiator-arbonia-anthracite`** (Tier-2) — чёрный/антрацит в интерьере. Связи: `/catalog/anthracite`, `/models/3180`.
- **`/articles/pokraska-radiatora-v-lyuboy-cvet-ral`** (Tier-2) — покраска под заказ. Связи: `/coloring`, `/request`.
- **`/articles/radiator-v-cvet-steny-ili-akcentnyy`** (Tier-2) — слиться vs выделить. Связи: `/coloring`, `/articles/tsvet-radiatorov-v-interiere`.

---

# 8. Модельные кластеры (money pages `/models/*`)

Каждая складская модель — отдельная money page с микрокластером Tier-2 (обзор + расчёт + сценарий). Сейчас сильно нагружена только 2180.

## `/models/2180`
```txt
[есть] /articles/arbonia-2180-po-ploshadi
[есть] /articles/arbonia-2180-calc
[есть] /articles/montazh-arbonia-2180-na-gkl
[есть] /articles/arbonia-2180-interior
[есть] /articles/2180-3180
[добавить] /articles/arbonia-2180-obzor-i-harakteristiki
[добавить] /articles/arbonia-2180-bokovoe-ili-nizhnee-podklyuchenie
```

## `/models/3180`
```txt
[есть] /articles/arbonia-3180-ral-9016-vs-anthracite
[есть] /articles/2180-3180
[добавить] /articles/arbonia-3180-obzor-i-harakteristiki
[добавить] /articles/skolko-sekciy-arbonia-3180-nuzhno
```

## `/models/3057`
```txt
[есть] /articles/arbonia-3057  (замена чугунных)
[есть] /articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat
[добавить] /articles/arbonia-3057-obzor-i-harakteristiki
```

## `/models/3050` / `/models/2050`
```txt
[есть] /articles/arbonia-2050-ili-3050-chto-vybrat  (план, кластер 6)
[добавить] /articles/arbonia-3050-obzor
[добавить] /articles/arbonia-2050-obzor
```

## `/models/3030`
```txt
[есть] /articles/arbonia-3030-vs-3037
[есть] /articles/arbonia-2030-ili-3030-chto-vybrat  (план, кластер 5)
[добавить] /articles/arbonia-3030-obzor
```

Правило для модельных статей-обзоров: answer-first → таблица характеристик → число секций по площади → цвета/подключение → CTA «Получить расчёт». Вверх — на профильный `/catalog/*`, вбок — на сравнения, вниз — на `/request`.

---

# 9. Кластер «Подбор, расчёт и подключение» (распределяющий слой)

Не привязан к одной money page — распределяет пользователя по каталогам и моделям и ведёт к заявке.

## Структура

```txt
Подбор и расчёт Arbonia
└── [есть / углубить] /articles/calculate
    ├── [есть] /articles/vertical-radiator-power
    ├── [есть] /articles/arbonia-2180-calc
    ├── [есть] /articles/calc-radiators-by-old-ones
    ├── [есть] /articles/connections
    ├── [есть] /articles/consoles
    ├── [есть] /articles/termostat
    ├── [добавить] /articles/raschet-sekciy-radiatora-onlayn
    ├── [добавить] /articles/delta-t-i-teplootdacha-radiatora
    ├── [объединить с существующей] /articles/connections
    └── [добавить] /articles/kakie-dannye-nuzhny-dlya-rascheta-radiatora
```

## Роли страниц

### `/articles/calculate` — Tier-1
Главный гид расчёта по мощности. Сделать опорным: формула, ΔT, таблица по площади, ссылки на онлайн-расчёт и `/request`.

### `/articles/connections` — Tier-2
Боковое vs нижнее подключение. Связать с моделями (складские варианты `-12` и `-69tvv`) и со сценарием замены.

## Что добавить
- **`/articles/raschet-sekciy-radiatora-onlayn`** (Tier-1) — калькулятор-хаб, сильная AI-страница. Связи: все каталоги, `/request`.
- **`/articles/delta-t-i-teplootdacha-radiatora`** (Tier-2) — почему мощность зависит от ΔT. Связи: `/articles/calculate`.
- **`/articles/connections`** (Tier-2, углубить) — расширить существующую страницу сравнением бокового и нижнего подключения. Отдельный URL с тем же интентом не создавать. Связи: модели, `/articles/low-models`.
- **`/articles/kakie-dannye-nuzhny-dlya-rascheta-radiatora`** (Tier-2) — что прислать менеджеру. Прямой мост к `/request`.

---

# 10. Кластер «Монтаж и эксплуатация» (поддержка доверия)

## Структура

```txt
Монтаж и эксплуатация Arbonia
└── [есть / углубить] /articles/montazh-radiatorov-arbonia-rekomendacii
    ├── [есть] /articles/montazh-vysokih-radiatorov-arbonia-instrukciya
    ├── [есть] /articles/montazh-arbonia-2180-na-gkl
    ├── [есть] /articles/consoles
    ├── [есть] /articles/care
    ├── [есть] /articles/gde-razmestit-radiator-otopleniya
    ├── [есть] /articles/radiator-postoyanno-vyklyuchaetsya
    ├── [есть] /articles/faq
    ├── [добавить] /articles/kak-chistit-trubchatyy-radiator-arbonia
    ├── [добавить] /articles/oshibki-pri-ustanovke-radiatora
    └── [добавить] /articles/zavozdushivanie-radiatora-chto-delat
```

## Зачем кластер
Эксплуатационные статьи ловят информационный трафик и удерживают доверие. Каждая должна мягко возвращать в коммерцию: «правильный монтаж → закажите подбор и расчёт» (`/request`), «гигиеничность → почему трубчатые Arbonia легко чистить» (`/`).

## Что добавить
- **`/articles/kak-chistit-trubchatyy-radiator-arbonia`** (Tier-2) — гигиена, аллергия (УТП бренда). Связи: `/`, `/articles/care`.
- **`/articles/oshibki-pri-ustanovke-radiatora`** (Tier-2) — частые ошибки. Связи: `/articles/montazh-radiatorov-arbonia-rekomendacii`, `/request`.
- **`/articles/zavozdushivanie-radiatora-chto-delat`** (Tier-2) — проблема-решение. Связи: `/articles/radiator-postoyanno-vyklyuchaetsya`.

---

# 11. Как углублять существующие статьи

Универсальный апгрейд под каждую Tier-1 статью:

```txt
1. Answer-first блок (40–70 слов)
2. Таблица выбора
3. Ссылка на коммерческий хаб (/catalog/* или /)
4. Ссылки на 3–6 моделей
5. Ссылки на дочерние Tier-2
6. FAQ
7. CTA «Получить расчёт» → /request
```

Приоритетные для углубления:

```txt
/articles/arbonia-kak-vybrat-trubchatyj-radiator  → /  + все каталоги
/articles/column-radiators                        → /
/articles/high-arbonia                            → /catalog/high-models
/articles/low-models                              → /catalog/low-models
/articles/calculate                               → /request + каталоги
/articles/ral-9016-pochemu-vybirayut-arkhitektory → /catalog/ral9016 + /coloring
/articles/arbonia-3057                            → /catalog/standard
/articles/panorama                                → /catalog/high-models + /catalog/low-models
```

---

# 12. Правила перелинковки

## Из коммерческой страницы
```txt
на Tier-1 статьи;
на важнейшие Tier-2;
на модели;
на смежные каталоги;
на /request.
```
Пример:
```txt
/catalog/high-models
→ /articles/high-arbonia
→ /articles/vertical-radiator-power
→ /articles/2180-3180
→ /models/2180
→ /models/3180
→ /request
```

## Из Tier-1 статьи
```txt
вверх на коммерческий хаб;
на 3–6 моделей;
на 3–5 дочерних Tier-2;
на /request.
```

## Из Tier-2 статьи
```txt
вверх на Tier-1;
вверх на коммерческий хаб;
на сравниваемые модели;
на /request.
```
Пример:
```txt
/articles/2180-3180
→ /catalog/high-models
→ /articles/high-arbonia
→ /models/2180
→ /models/3180
→ /request
```

---

# 13. Шаблон статьи под AI-выдачу

```md
# H1: вопрос или точный интент

Короткий ответ 40–70 слов. Без воды. Сразу по делу.

## Быстрый выбор

| Ситуация | Что выбрать | Почему |
|---|---|---|

## Подробное объяснение
...

## Какие модели Arbonia подходят
- Модель 1
- Модель 2
- Модель 3

## Когда выбрать другую высоту / число труб
...

## Частые ошибки
...

## FAQ
### Вопрос 1
Ответ.
### Вопрос 2
Ответ.

## CTA
Нужен подбор под конкретное помещение? Пришлите размеры окна/ниши, площадь и тип системы отопления — рассчитаем мощность, число секций и подключение.
```

---

# 14. Приоритет работ

## Этап 1. Привязать «бесхозные» статьи и углубить Tier-1
Самое дешёвое и быстрое: разнести ~16 неразмеченных статей по кластерам и проставить перелинковку. Параллельно углубить:
```txt
/articles/arbonia-kak-vybrat-trubchatyj-radiator
/articles/column-radiators
/articles/high-arbonia
/articles/low-models
/articles/calculate
/articles/ral-9016-pochemu-vybirayut-arkhitektory
```

## Этап 2. Создать недостающие коммерческие хабы
```txt
/catalog/standard      — под окно 50–60 см
/catalog/anthracite    — антрацит / чёрные
/coloring              — усилить до money page
```

## Этап 3. Самые важные новые статьи (Tier-1)
```txt
/articles/radiatory-arbonia-pod-okno                         — сделано
/articles/radiator-pod-nizkiy-podokonnik                    — сделано 2026-07-21
/articles/kak-vybrat-cvet-radiatora-pod-interer
/articles/raschet-sekciy-radiatora-onlayn                   — только вместе с рабочим калькулятором
```

## Этап 4. Приоритетные Tier-2
```txt
/articles/2-3-columns                                       — углубить, добавить 4-трубчатые
/articles/arbonia-2050-ili-3050-chto-vybrat
/articles/arbonia-2030-ili-3030-chto-vybrat
/articles/chernyy-radiator-arbonia-anthracite
/articles/mezhosevoe-rasstoyanie-500-mm-arbonia             — сделано 2026-07-21
/articles/connections                                       — углубить без нового URL
/articles/arbonia-2180-obzor-i-harakteristiki
/articles/arbonia-3180-obzor-i-harakteristiki
```

## Этап 5. Усилить коммерческие страницы
Для `/`, `/catalog/high-models`, `/catalog/low-models`, `/catalog/ral9016`, `/coloring`, `/catalog/standard`, `/catalog/anthracite`:
```txt
- блок «Полезные статьи»;
- ссылки на дочерние Tier-1/Tier-2;
- FAQ;
- CTA на расчёт;
- ссылки на модели;
- сценарии выбора.
```

---

# 15. Самый короткий приоритетный список

## Очень высокий приоритет
```txt
Разнести 16 неразмеченных статей по кластерам — организация
/articles/arbonia-kak-vybrat-trubchatyj-radiator — углубить
/articles/high-arbonia — углубить
/articles/low-models — углубить
/catalog/standard — создан
/articles/radiatory-arbonia-pod-okno — добавлено
/articles/radiator-pod-nizkiy-podokonnik — добавлено 2026-07-21
/articles/mezhosevoe-rasstoyanie-500-mm-arbonia — добавлено 2026-07-21
/articles/arbonia-3057 и /articles/calc-radiators-by-old-ones — развести интенты вместо новой общей статьи
/articles/2-3-columns — углубить разделом про 4-трубчатые модели
```

## Высокий приоритет
```txt
/catalog/anthracite — создать хаб
/coloring — усилить до money page
/articles/kak-vybrat-cvet-radiatora-pod-interer — добавить
/articles/radiator-pod-nizkiy-podokonnik — добавлено 2026-07-21
/articles/chernyy-radiator-arbonia-anthracite — добавить
/articles/mezhosevoe-rasstoyanie-500-mm-arbonia — добавлено 2026-07-21
/articles/calculate — углубить
/articles/arbonia-3057 — поднять до Tier-1
```

## Средний приоритет
```txt
/articles/arbonia-2050-ili-3050-chto-vybrat
/articles/arbonia-2030-ili-3030-chto-vybrat
/articles/connections — углубить, не создавать дублирующий URL
/articles/vertikalnyy-radiator-dlya-gostinoy
/articles/arbonia-2180-obzor-i-harakteristiki
/articles/arbonia-3180-obzor-i-harakteristiki
/articles/kak-chistit-trubchatyy-radiator-arbonia
/articles/kakie-dannye-nuzhny-dlya-rascheta-radiatora
```

---

# 16. Приложение. Полная привязка существующих статей к кластерам

| Статья | Кластер / money page | Статус в таблице |
|---|---|---|
| /articles/column-radiators | Бренд → / | не отмечена |
| /articles/arbonia-radiators | Бренд → / | не отмечена |
| /articles/arbonia-kak-vybrat-trubchatyj-radiator | Бренд → / | отмечена (Общее) |
| /articles/convection-radiaton-arbonia | Бренд → / | не отмечена |
| /articles/2-3-columns | Бренд → / | не отмечена |
| /articles/epd | Бренд → / (trust) | не отмечена |
| /articles/high-arbonia | Вертикальные → /catalog/high-models | отмечена |
| /articles/panorama | Вертикальные / Низкие | отмечена |
| /articles/vertical-vs-horizontal | Вертикальные | отмечена |
| /articles/vertical-radiator-power | Вертикальные | отмечена |
| /articles/kogda-vertikalnyy-radiator-arbonia-ne-podkhodit | Вертикальные | отмечена |
| /articles/2180-3180 | Вертикальные / 2180 / 3180 | отмечена |
| /articles/montazh-vysokih-radiatorov-arbonia-instrukciya | Вертикальные / Монтаж | не отмечена |
| /articles/low-models | Низкие → /catalog/low-models | не отмечена |
| /articles/arbonia-3030-vs-3037 | Низкие / 3030 | отмечена |
| /articles/radiator-pod-nizkiy-podokonnik | Низкие → /catalog/low-models | добавлена 2026-07-21 |
| /articles/arbonia-3050-ili-3057-kakuyu-vysotu-vybrat | Низкие / Стандарт | не отмечена |
| /articles/radiatory-arbonia-pod-okno | Стандарт → /catalog/standard | существует |
| /articles/arbonia-3057 | Стандарт → /catalog/standard | отмечена (3057) |
| /articles/mezhosevoe-rasstoyanie-500-mm-arbonia | Стандарт → /catalog/standard | добавлена 2026-07-21 |
| /articles/ral-9016-pochemu-vybirayut-arkhitektory | Цвет → /catalog/ral9016 | отмечена |
| /articles/tsvet-radiatorov-v-interiere | Цвет | отмечена |
| /articles/belye-radiatory-v-temnom-interiere | Цвет | отмечена |
| /articles/arbonia-3180-ral-9016-vs-anthracite | Цвет / 3180 / Антрацит | отмечена |
| /articles/arbonia-2180-po-ploshadi | Модель 2180 | отмечена |
| /articles/arbonia-2180-calc | Модель 2180 | не отмечена |
| /articles/arbonia-2180-interior | Модель 2180 | отмечена (нет в индексе) |
| /articles/montazh-arbonia-2180-na-gkl | Модель 2180 / Монтаж | отмечена |
| /articles/calculate | Подбор и расчёт | не отмечена |
| /articles/calc-radiators-by-old-ones | Подбор и расчёт | не отмечена |
| /articles/connections | Подбор и расчёт | не отмечена |
| /articles/consoles | Подбор / Монтаж | не отмечена |
| /articles/termostat | Подбор / Эксплуатация | не отмечена |
| /articles/montazh-radiatorov-arbonia-rekomendacii | Монтаж | не отмечена |
| /articles/care | Эксплуатация | не отмечена |
| /articles/gde-razmestit-radiator-otopleniya | Эксплуатация / Общее | отмечена (Общее) |
| /articles/radiator-postoyanno-vyklyuchaetsya | Эксплуатация / Общее | отмечена (Общее) |
| /articles/faq | Эксплуатация | не отмечена |

---

# 17. Итог

У ArboniaShop уже сильная база: каталожные хабы, десятки моделей и **39 статей**. Но часть статей не отмечена в рабочей таблице и не работает как система вокруг money pages.

Главная задача — превратить структуру:
```txt
коммерческая страница + набор отдельных статей
```
в структуру:
```txt
money page (каталог / модель)
→ Tier-1 гиды и сценарии выбора
→ Tier-2 сравнения, расчёты, монтаж, цвет, возражения
→ обратно в каталог / модель / заявку
```

Сильнейшие направления роста под единый товар (трубчатые радиаторы):

1. вертикальные радиаторы — `/catalog/high-models` (уже сильный кластер);
2. стандартные «под окно» 50–60 см — развивать существующий `/catalog/standard`;
3. низкие радиаторы под подоконник / панорамные окна — `/catalog/low-models`;
4. цвет и покраска — `/catalog/ral9016`, новый `/catalog/anthracite`, усиленный `/coloring`;
5. подбор и расчёт — распределяющий слой к заявке;
6. модельные микрокластеры (2180/3180/3057/3050/2050/3030).

Главная идея: каждая статья не просто отвечает на вопрос, а ведёт пользователя к подбору конкретной модели Arbonia и к заявке.
