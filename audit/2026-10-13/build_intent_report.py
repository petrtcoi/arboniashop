from pathlib import Path
from collections import Counter
from html import escape
import json
import re

OUT = Path(__file__).resolve().parent
inventory = json.loads((OUT / 'article-intent-inventory.json').read_text())
content = json.loads((OUT / 'article-content-inventory.json').read_text())

# Editorial ownership below is a recommendation based on page content.
# It does not assert that Google has assigned a query family to a URL.
# slug, cluster, query family, user task, coverage, risk, overlapping page, action
specs = [
('2-3-columns','Выбор модели','2-трубчатый или 3-трубчатый радиатор Arbonia','Сравнить конструкцию по глубине, мощности и уходу','Отвечает','Низкий','arbonia-2050-ili-3050','Оставить общую конструктивную разницу; точные исполнения 2050/3050 вынести в специализированное сравнение.'),
('2180-3180','Выбор модели','Arbonia 2180 или 3180','Выбрать одну из двух вертикальных моделей','Частично','Средний','high-arbonia;vertical-radiator-power','Добавить таблицу глубины, мощности при одинаковом ΔT и примеры по известной нагрузке. Убрать универсальное обещание обогреть 27 м².'),
('arbonia-2050-ili-3050','Выбор модели','Arbonia 2050 или 3050','Выбрать глубину и мощность при одинаковой высоте','Отвечает','Низкий','2-3-columns;radiatory-arbonia-pod-okno','Сохранить конкретное сравнение пары; общую классификацию моделей раскрывать по ссылке.'),
('arbonia-2180-calc','Мощность','таблица секций Arbonia 2180 для 10–20 м²','Получить готовый пример для фиксированных исходных условий','Отвечает с допущениями','Средний','arbonia-2180-po-ploshadi;vertical-radiator-power','Сохранить только готовые примеры и допущения. Широкий запрос «калькулятор/расчёт 2180» закрепить за интерактивной страницей; не делать второй калькулятор.'),
('arbonia-2180-interior','Интерьер','Arbonia 2180 в интерьере','Оценить вид модели в разных стилях и планировках','Частично','Низкий','high-arbonia','Нужны реальные фотографии и подписи с моделями. Текст о визуальном эффекте отвечает теме, но без примеров слабо закрывает визуальный запрос.'),
('arbonia-2180-po-ploshadi','Мощность','калькулятор секций Arbonia 2180','Изменить площадь, высоту и режим и получить предварительное число секций','Отвечает с допущениями','Средний','arbonia-2180-calc;vertical-radiator-power','Основная страница для индивидуального предварительного расчёта 2180. Статические примеры поддерживают её ссылками и не повторяют форму.'),
('arbonia-3030-skolko-sektsiy-dlina-moshchnost','Мощность','сколько секций Arbonia 3030; длина и мощность 3030','Рассчитать секции уже выбранной модели и проверить длину','Отвечает','Низкий','arbonia-3030-vs-3037;radiator-pod-nizkiy-podokonnik','Новая статья. Оставить расчёт одной модели; выбор высоты и сравнение 3037 раскрывать по ссылке.'),
('arbonia-3030-vs-3037','Выбор модели','Arbonia 3030 или 3037','Выбрать между высотой 300 и 370 мм','Отвечает','Средний','radiator-pod-nizkiy-podokonnik;arbonia-3030-skolko-sektsiy-dlina-moshchnost','Уточнить Title/H1 до сравнения пары моделей. Проверить без источника заявленные потери 15–20% и универсальные зазоры; подробный расчёт 3030 оставить новой статье.'),
('arbonia-3050-ili-3057-kakuyu-vysotu-vybrat','Выбор модели','Arbonia 3050 или 3057','Выбрать высоту с учётом существующих выводов','Отвечает','Низкий','radiatory-arbonia-pod-okno;mezhosevoe-rasstoyanie-500-mm-arbonia','Сохранить сравнение именно этой пары; замер старых труб и полную замену вынести в связанные руководства.'),
('arbonia-3057','Замена батареи','замена чугунной батареи на Arbonia 3057','Понять применимость конкретной модели для замены чугуна','Частично','Средний','mezhosevoe-rasstoyanie-500-mm-arbonia','Усилить сценарий именно 3057: глубина, выводы, арматура и ограничения. Убрать из description обещание замены без перекрытия стояка; общую инструкцию замера оставить статье о 500 мм.'),
('arbonia-3180-ral-9016-vs-anthracite','Цвет','Arbonia 3180 белый или Anthracite Metallic','Выбрать покрытие одной конкретной вертикальной модели','Отвечает','Низкий','chernyy-radiator-arbonia;kak-vybrat-cvet-radiatora-pod-interer','Оставить выбор двух исполнений 3180; не расширять до общего руководства по цветам.'),
('belye-radiatory-v-temnom-interiere','Цвет','белый радиатор на тёмной стене','Оценить контрастный интерьерный сценарий','Отвечает','Низкий','ral-9016-pochemu-vybirayut-arkhitektory','Сохранить сценарий контраста и примеры. Точное сравнение кодов RAL раскрывать по ссылке.'),
('calc-radiators-by-old-ones','Мощность','подбор нового радиатора по мощности старого','Использовать характеристики существующего отопления при замене','Частично','Низкий','calculate;arbonia-3057','Добавить конкретный пример сопоставления мощностей при одинаковом режиме; не ограничиваться советом, что старой батареи хватало зимой.'),
('calculate','Мощность','как подобрать радиатор Arbonia по мощности','Выбрать способ определения нагрузки: проект, теплопотери или предварительная оценка','Отвечает','Средний','vertical-radiator-power;delta-t-teplootdacha','Оставить общий алгоритм выбора исходных данных. Расчёты вертикальных моделей и объяснение ΔT раскрывать в дочерних статьях.'),
('care','Уход','как чистить трубчатый радиатор Arbonia','Очистить прибор и выбрать допустимый уход за покрытием','Отвечает','Низкий','','Сохранить самостоятельный материал; рекомендации по ремонту покрытия опирать на инструкцию выбранного покрытия.'),
('chernyy-radiator-arbonia','Цвет','чёрный радиатор Arbonia; RAL 9005 или SF-3','Выбрать тёмное покрытие и подходящую модель','Отвечает','Низкий','arbonia-3180-ral-9016-vs-anthracite','Оставить сравнение тёмных исполнений; материал о 3180 обслуживает конкретную модель, а не весь тёмный ассортимент.'),
('column-radiators','Общий выбор','трубчатые радиаторы Arbonia: плюсы, минусы, выбор','Понять тип прибора и последовательность выбора','Отвечает','Средний','trubchatye-radiatory-dlya-kvartiry;radiatory-arbonia-pod-okno','Сохранить роль общего руководства. Квартирные ограничения, модели под окно и сравнение с биметаллом давать кратко со ссылками.'),
('connections','Подключение','нижнее подключение Arbonia 69 ТВВ','Разобраться в схеме, выводах и составе комплекта №69 ТВВ','Отвечает','Низкий','termostat;montazh-radiatorov-arbonia-rekomendacii','Сохранить специализированный узел №69 ТВВ. Общий монтаж и место датчика раскрывать по ссылкам.'),
('consoles','Монтаж','кронштейны Arbonia W161, ZB0280, ZB0281, ZB0282','Выбрать совместимый комплект крепления','Частично','Низкий','montazh-vysokih-radiatorov-arbonia-instrukciya','Уточнить обозначения и совместимость по документации. Не превращать сравнение комплектов в универсальный расчёт количества креплений.'),
('convection-radiaton-arbonia','Теплоотдача','конвекция и тепловое излучение радиатора','Понять способы передачи тепла','Отвечает','Низкий','delta-t-teplootdacha','Сохранить физическое объяснение; ΔT и подбор числа секций решают другую задачу.'),
('delta-t-teplootdacha','Теплоотдача','ΔT радиатора; температурный напор и мощность','Прочитать паспортную теплоотдачу и выбрать режим сравнения','Отвечает','Низкий','calculate;vertical-radiator-power','Оставить определение и примеры режима; не добавлять отдельные калькуляторы всех моделей.'),
('epd','Документы','EPD радиаторов Arbonia','Найти экологическую декларацию и понять её назначение','Частично','Низкий','','Добавить прямую ссылку на актуальную декларацию и область действия. Убрать неподтверждённые обещания соответствия будущим обязательным требованиям.'),
('faq','Общий выбор','частые вопросы о радиаторах Arbonia','Быстро получить ответы и перейти к подробному материалу','Отвечает','Низкий','column-radiators','Сохранить краткие ответы и навигацию; не делать на FAQ вторые полные руководства по каждому кластеру.'),
('gde-razmestit-radiator-otopleniya','Размещение','где разместить радиатор; расстояния до пола, стены и подоконника','Выбрать место установки и проверить пространство вокруг','Отвечает','Средний','radiator-pod-glubokim-podokonnikom-stoleshnitsey;montazh-radiatorov-arbonia-rekomendacii','Сохранить сильную общую страницу. Мебельный узел оставить новой статье, подбор креплений — монтажной. Зазоры привязать к конкретной документации.'),
('high-arbonia','Общий выбор','как выбрать высокий радиатор Arbonia','Понять применимость вертикальной формы и перейти к модели','Отвечает','Средний','2180-3180;vertical-vs-horizontal','Уточнить Title/H1 как руководство по выбору высокого радиатора. Цены и наличие принадлежат /catalog/high-models; сравнение пары — статье 2180/3180.'),
('kak-vybrat-cvet-radiatora-pod-interer','Цвет','как выбрать цвет радиатора Arbonia','Согласовать модель, отделку, свет и реальное покрытие до покупки','Отвечает','Средний','tsvet-radiatorov-v-interiere;ral-9016-9010-9003-kakoy-belyy-vybrat','Основное практическое руководство по подбору покрытия. Вдохновение по цветам и стилям закрепить за второй статьёй, точное сравнение белых — за новой.'),
('kogda-vertikalnyy-radiator-arbonia-ne-podkhodit','Размещение','когда вертикальный радиатор не подходит','Проверить ограничения уже рассматриваемого вертикального решения','Отвечает','Низкий','vertical-vs-horizontal;high-arbonia','Сохранить сценарии отказа и альтернативы; общий выбор формы раскрывать в сравнении вертикального и горизонтального.'),
('low-models','Выбор модели','Arbonia 2030, 3030 или 3037','Выбрать одну из трёх низких моделей','Частично','Средний','radiator-pod-nizkiy-podokonnik;arbonia-3030-vs-3037','Текущий H1 «в наличии» пересекается с /catalog/low-models. Перепозиционировать в сравнение 2030/3030/3037 с таблицей; доступность и цены оставить каталогу.'),
('mezhosevoe-rasstoyanie-500-mm-arbonia','Замена батареи','межосевое расстояние 500 мм Arbonia','Измерить существующие выводы и проверить геометрическую совместимость','Отвечает','Средний','arbonia-3057','Закрепить основной интент замера и совместимости 2057/3057. Рассказ о замене чугуна конкретно на 3057 раскрывать в отдельном сценарии.'),
('montazh-arbonia-2180-na-gkl','Монтаж','монтаж Arbonia 2180 на гипсокартон','Проверить стену, закладные и крепление на ГКЛ','Отвечает с оговорками','Средний','montazh-vysokih-radiatorov-arbonia-instrukciya','Сохранить только специальную задачу стены из ГКЛ; универсальные таблицы креплений и потерь теплоотдачи подтвердить первичными инструкциями.'),
('montazh-radiatorov-arbonia-rekomendacii','Монтаж','общие рекомендации по монтажу Arbonia','Понять последовательность подготовки, установки, подключения и запуска','Частично','Средний','montazh-vysokih-radiatorov-arbonia-instrukciya;consoles','Оставить общий порядок работ и ссылки на конкретные узлы. Проверить первичными инструкциями момент затяжки 250–400 Н·м, гарантийные требования и нормы крепления.'),
('montazh-vysokih-radiatorov-arbonia-instrukciya','Монтаж','монтаж высоких Arbonia 2180 и 3180','Учесть особенности высоты 1800 мм, массы и фиксации','Отвечает с оговорками','Средний','montazh-radiatorov-arbonia-rekomendacii;montazh-arbonia-2180-na-gkl','Начинать Title/H1 с высоких моделей 2180/3180. Сократить общую гидравлику и ГКЛ до ссылок; проверить конкретные количества креплений и числовые нормы.'),
('panorama','Размещение','радиаторы для панорамных окон','Выбрать схему обогрева у большой площади остекления','Отвечает','Низкий','radiator-pod-nizkiy-podokonnik;vertical-vs-horizontal','Сохранить сравнение нескольких схем у остекления; низкий подоконник — задача геометрии ниши, а не всех панорамных окон.'),
('radiator-pod-glubokim-podokonnikom-stoleshnitsey','Размещение','радиатор под глубокой столешницей или подоконником','Согласовать мебель, движение воздуха, датчик и доступ','Отвечает','Низкий','gde-razmestit-radiator-otopleniya;termostat;radiator-pod-nizkiy-podokonnik','Новая статья. Оставить мебельную конструкцию до её изготовления; не расширять в общий выбор места и универсальный монтаж.'),
('radiator-pod-nizkiy-podokonnik','Размещение','радиатор под низкий подоконник','Выбрать модель по доступной высоте ниши и монтажным габаритам','Отвечает','Средний','low-models;arbonia-3030-vs-3037;arbonia-3030-skolko-sektsiy-dlina-moshchnost','Закрепить замер и выбор типа. Для секций выбранной 3030 ссылаться на новую статью; не повторять её полную таблицу.'),
('radiator-postoyanno-vyklyuchaetsya','Диагностика','радиатор постоянно выключается','Разобраться в циклическом прекращении нагрева и регулировании','Отвечает','Низкий','termostat;radiator-pod-glubokim-podokonnikom-stoleshnitsey','Сохранить диагностический симптом после запуска; планирование мебели и установка датчика решают предшествующие задачи.'),
('radiatory-arbonia-pod-okno','Общий выбор','как выбрать Arbonia под обычное окно','Выбрать стандартную высоту 50–57 см и модель','Отвечает','Средний','column-radiators;trubchatye-radiatory-dlya-kvartiry','Оставить выбор именно стандартной оконной модели. Сократить общие разделы про цвет, вертикальную форму и расчёт до ссылок.'),
('ral-9016-9010-9003-kakoy-belyy-vybrat','Цвет','RAL 9016 или 9010 или 9003 для радиатора','Сравнить три белых покрытия и согласовать с отделкой','Отвечает','Низкий','ral-9016-pochemu-vybirayut-arkhitektory','Новая статья. Основной сравнительный ответ здесь. В общей статье о 9016 оставить короткий ориентир и ссылку, не развернутый повтор сравнения.'),
('ral-9016-pochemu-vybirayut-arkhitektory','Цвет','RAL 9016 какой цвет','Узнать обозначение, вид и применение одного оттенка','Отвечает','Средний','ral-9016-9010-9003-kakoy-belyy-vybrat','Сохранить сильную страницу: 31 492 показа. Title уже сужен до одного цвета. H2 сравнения трёх кодов лучше заменить коротким блоком про согласование 9016 и ссылкой на сравнение.'),
('termostat','Подключение','как расположить термоголовку Arbonia','Установить датчик в подходящем месте относительно комнаты','Частично','Средний','connections;radiator-pod-glubokim-podokonnikom-stoleshnitsey','Сузить Title/H1 до размещения термоголовки: текущий текст не является полным руководством по выбору совместимых термостатов. Мебельную нишу разобрать по ссылке.'),
('trubchatye-ili-bimetallicheskie-radiatory','Общий выбор','трубчатые или биметаллические радиаторы','Сравнить два типа приборов для системы и бюджета','Отвечает','Низкий','column-radiators;trubchatye-radiatory-dlya-kvartiry','Сохранить именно сравнение конструкций; общую покупку трубчатого радиатора раскрывать в главном руководстве.'),
('trubchatye-radiatory-dlya-kvartiry','Общий выбор','трубчатые радиаторы для квартиры','Проверить квартирную систему и выбрать сценарий замены или установки','Отвечает','Средний','column-radiators;radiatory-arbonia-pod-okno','Убрать двойной H1. Подчеркнуть центральное отопление, стояк, согласование и замену в квартире; общую классификацию приборов сократить.'),
('tsvet-radiatorov-v-interiere','Цвет','цветные радиаторы в интерьере; сочетания оттенков','Подобрать визуальное направление по цвету, стилю и комнате','Отвечает','Средний','kak-vybrat-cvet-radiatora-pod-interer','Роль вдохновения уже объяснена в тексте. Отразить её в Title/H1 и description: «Цветные радиаторы в интерьере: сочетания и примеры», убрать обещание второго полного алгоритма выбора.'),
('vertical-radiator-power','Мощность','как рассчитать мощность вертикального радиатора','Определить нагрузку и сравнить теплоотдачу 2180 и 3180','Отвечает с допущениями','Средний','calculate;arbonia-2180-po-ploshadi;arbonia-2180-calc','Оставить расчёт вертикальной формы и сравнение двух моделей. Любые 164/219 Вт сопровождать режимом ΔT; интерактивный расчёт конкретной 2180 вынести по ссылке.'),
('vertical-vs-horizontal','Общий выбор','вертикальный или горизонтальный радиатор','Выбрать форму размещения до выбора модели','Отвечает','Низкий','high-arbonia;kogda-vertikalnyy-radiator-arbonia-ne-podkhodit','Сохранить сравнение формы; общий высокий ассортимент и особые противопоказания раскрывать по ссылкам.'),
]

by_slug = {x['slug']: x for x in inventory}
assert len(specs) == len(by_slug) == 45
assert set(x[0] for x in specs) == set(by_slug)
rows = []
for slug, cluster, queries, intent, coverage, risk, related, action in specs:
    a = by_slug[slug]
    rows.append({
        'slug': slug, 'url': 'https://arboniashop.ru/articles/' + slug,
        'title': a['title'], 'h1': a['h1'], 'cluster': cluster,
        'recommended_query_family': queries, 'user_task': intent,
        'coverage': coverage, 'overlap_risk': risk,
        'related_pages': related.split(';') if related else [],
        'action': action, 'gsc_3m': a['gsc'],
        'h1_count': content[slug]['h1'], 'canonical': content[slug]['canonical'],
    })

evidence = json.loads((OUT / 'gsc-query-page-overlap.json').read_text())
comparisons = []
for e in evidence:
    if e['kind'] != 'page_comparison_queries':
        continue
    lines = []
    for line in e['rows'].splitlines():
        parts = line.split('\t')
        if len(parts) == 10:
            lines.append(parts)
    overlaps = [x[0] for x in lines if float(x[4].replace(',', '')) > 0 and float(x[5].replace(',', '')) > 0]
    comparisons.append({'page_a': e['pageA'], 'page_b': e['pageB'], 'shared_reported_queries': overlaps, 'note': 'This is only the reported query table; anonymized queries are unavailable. Wrapped cells are preserved in raw evidence.'})

duplicates = {}
for field in ['title', 'description']:
    grouped = {}
    for a in inventory:
        value = a['title'] if field == 'title' else content[a['slug']]['description']
        grouped.setdefault(value, []).append(a['slug'])
    duplicates[field] = [slugs for slugs in grouped.values() if len(slugs) > 1]

report = {
    'checked_on': '2026-10-13', 'article_count': 45,
    'live_build_id': 'Lrhtfi_fgYolHaR9eXLVt',
    'gsc_period': '2026-07-11/2026-10-10',
    'method': 'All 45 titles, descriptions, H1/H2, main-content extraction, canonical tags and content relationships were reviewed; close pairs were inspected manually and four page comparisons were read in GSC.',
    'limitations': 'Three new articles were published today and their indexing requests were accepted. They have no performance history yet. Shared intent is an editorial risk, not proof of harmful ranking competition; GSC omits anonymized queries.',
    'duplicate_metadata': duplicates,
    'h1_anomalies': [r['slug'] for r in rows if r['h1_count'] != 1],
    'gsc_page_comparisons': comparisons,
    'articles': rows,
}
(OUT / 'article-intent-audit.json').write_text(json.dumps(report, ensure_ascii=False, indent=2))

def link(slug):
    return '<a href="https://arboniashop.ru/articles/' + escape(slug) + '">' + escape(by_slug[slug]['h1'][0]) + '</a>'

table = ''
for r in sorted(rows, key=lambda x: (x['cluster'], x['slug'])):
    g = r['gsc_3m']
    stats = (g.get('Clicks', '—') + ' / ' + g.get('Impressions', '—')) if g else 'Новая статья'
    related = '<br>'.join(link(s) for s in r['related_pages']) or '—'
    table += '<tr><td>' + link(r['slug']) + '<small>' + escape(r['cluster']) + '</small></td><td><b>' + escape(r['recommended_query_family']) + '</b><p>' + escape(r['user_task']) + '</p></td><td>' + escape(r['coverage']) + '</td><td><span class="risk ' + ('medium' if r['overlap_risk'] == 'Средний' else 'low') + '">' + escape(r['overlap_risk']) + '</span></td><td>' + escape(stats) + '</td><td>' + related + '<p>' + escape(r['action']) + '</p></td></tr>'

html = '''<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Аудит интентов 45 статей ArboniaShop</title><style>
body{font:16px/1.6 system-ui,sans-serif;color:#26332f;background:#f6f7f4;margin:0}main{max-width:1540px;margin:auto;padding:30px}h1{font-size:32px;line-height:1.25}h2{font-size:23px;margin-top:32px}a{color:#ac4a06}p{margin:8px 0 14px}.note{padding:20px;background:white;border-left:4px solid #7b8d7e;margin:22px 0}.wrap{overflow:auto;background:white}table{border-collapse:collapse;width:100%;min-width:1160px;font-size:14px}th,td{border:1px solid #dce1db;padding:14px;text-align:left;vertical-align:top}th{background:#edf1ea;position:sticky;top:0}td:nth-child(1){width:19%}td:nth-child(2){width:20%}td:last-child{width:34%}small{display:block;color:#6f7b73;margin-top:8px}.risk{display:inline-block;padding:3px 8px;border-radius:3px}.medium{background:#fff0d3}.low{background:#e2f1e5}.meta{color:#66726b;font-size:14px}@media(max-width:650px){main{padding:18px}h1{font-size:27px}}
</style></head><body><main><h1>Интенты и пересечения 45 опубликованных статей ArboniaShop</h1><p class="meta">13 октября 2026 · Разбор опубликованной сборки · Search Console: 11 июля — 10 октября 2026</p>
<div class="note"><b>Три новые статьи отвечают на разные задачи:</b> сравнение белых покрытий; расчёт секций уже выбранной Arbonia 3030; согласование мебели вокруг радиатора. В старых материалах нужны более точные границы тем и заголовки. Это риски пересечения интентов, а не доказанный ущерб позициям.</div>
<h2>Что подтвердилось в Search Console</h2><p>По точному запросу «ral 9016» показана одна страница — общий материал о RAL 9016: 31 клик, 6267 показов, средняя позиция 4,3. В четырёх проверенных сравнениях — цвет, расчёт 2180, замена батареи и монтаж — в видимых строках нет запросов с показами одновременно у обеих страниц. Выборки малы, часть запросов скрыта Google; это не доказывает отсутствие пересечений по всем запросам.</p>
<p>Для трёх статей от 13 октября Google принял запросы индексации. Их поисковая статистика ещё не появилась, поэтому текущая оценка новых материалов основана на содержании и распределении задач.</p>
<h2>Приоритетные границы тем</h2><ol>
<li><b>Цвет:</b> общий выбор покрытия → практический алгоритм; цветные радиаторы в интерьере → сочетания и примеры; один RAL 9016 → обозначение и применение; новая статья → сравнение трёх белых.</li>
<li><b>Мощность:</b> общий порядок определения нагрузки → calculate; вертикальные модели 2180/3180 → vertical-radiator-power; интерактивный расчёт 2180 → калькулятор; фиксированные примеры → таблица 2180; расчёт одной 3030 → новая статья.</li>
<li><b>Низкие модели:</b> наличие и покупка → каталог; замер ниши → руководство по низкому подоконнику; 2030/3030/3037 → обзор трёх моделей; 3030/3037 → конкретная пара.</li>
<li><b>Замена:</b> как измерить 500 мм и проверить совместимость → статья о межосевом размере; особенности замены чугуна конкретно на 3057 → статья о 3057.</li>
<li><b>Монтаж:</b> общая последовательность → общий материал; масса и фиксация 1800 мм → высокие модели; стена из ГКЛ → специальный материал; совместимость комплектов → кронштейны.</li>
<li><b>Общий выбор:</b> тип трубчатого радиатора → главное руководство; условия квартиры → квартирная статья; стандартная оконная высота 50–57 см → статья под обычное окно; вертикальный или горизонтальный → выбор формы.</li>
</ol>
<h2>Технические замечания, влияющие на понятность</h2><p>У всех 45 страниц самостоятельный canonical. Точных дубликатов Title и description нет. В статье «Трубчатые радиаторы для квартиры» два одинаковых H1. В монтажных руководствах числовые требования и гарантийные условия следует подтвердить конкретными первичными инструкциями, а не переносить из одной статьи в другую.</p>
<h2>Карта всех статей</h2><p>«Целевые запросы» — предлагаемая редакционная роль. «Риск» оценивает пересечение содержания. Клики и показы приведены за один трёхмесячный период; отсутствие записи не приравнивается к нулевому спросу.</p>
<div class="wrap"><table><thead><tr><th>Статья</th><th>Целевые запросы и задача читателя</th><th>Закрытие интента</th><th>Риск</th><th>Клики / показы GSC</th><th>Связанные страницы и конкретное действие</th></tr></thead><tbody>''' + table + '''</tbody></table></div>
<h2>Как исправлять</h2><p>Сначала уточнять Title/H1, вводный ответ и границы разделов, затем усиливать ссылки на специализированные материалы. Массовые 301, noindex и canonical на соседние статьи по этой проверке не обоснованы: разные вопросы должны сохранять самостоятельные полезные страницы. Если после уточнения ролей останутся две статьи с одним полным ответом, тогда отдельно решать вопрос объединения.</p>
<p>Этот порядок согласуется с <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">руководством Google</a>: самостоятельная полезная информация, понятная структура и содержательные ссылки между связанными страницами.</p>
</main></body></html>'''
(OUT / 'article-intent-audit.html').write_text(html)
print(json.dumps({'articles': len(rows), 'risk_counts': dict(Counter(r['overlap_risk'] for r in rows)), 'coverage_counts': dict(Counter(r['coverage'] for r in rows)), 'duplicate_metadata': duplicates, 'h1_anomalies': report['h1_anomalies'], 'report': str(OUT / 'article-intent-audit.html')}, ensure_ascii=False, indent=2))
