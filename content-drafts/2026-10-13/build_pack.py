from pathlib import Path
from html import escape, unescape
import json
import math
import re

OUT = Path(__file__).resolve().parent
SITE = 'https://arboniashop.ru'
publication_file = OUT / 'publication.json'
published = publication_file.exists() and json.loads(publication_file.read_text()).get('published', False)

articles = [
    {
        'slug': 'ral-9016-9010-9003-kakoy-belyy-vybrat',
        'cluster': 'Цвет радиаторов / RAL 9016',
        'title': 'RAL 9016, 9010 или 9003: какой белый выбрать для радиатора',
        'description': 'Сравниваем белые RAL 9016, 9010 и 9003: сочетание радиатора со стеной и окнами, блеск покрытия, проверка образцов и выбор исполнения Arbonia.',
        'intent': 'Сравнение трёх белых оттенков перед заказом радиатора; сочетание с уже выбранной отделкой.',
        'gsc_basis': 'В выгрузке за 11 июля — 10 октября 2026 года запросы, содержащие 9010 или 9003, получили суммарно 1 419 показов и 17 кликов. Это группа запросов всего сайта, а не объём спроса на отдельную новую статью.',
        'incoming_links': [
            {'from': '/articles/ral-9016-pochemu-vybirayut-arkhitektory', 'anchor': 'подробное сравнение RAL 9016, 9010 и 9003', 'placement': 'После краткой таблицы сравнения; сохранить основной материал о RAL 9016.'},
            {'from': '/articles/kak-vybrat-cvet-radiatora-pod-interer', 'anchor': 'как согласовать белый радиатор со стеной и окнами', 'placement': 'В разделе о белом покрытии.'},
            {'from': '/coloring', 'anchor': 'чем отличаются белые RAL 9016, 9010 и 9003', 'placement': 'Возле объяснения выбора оттенка.'},
        ],
        'overlap_control': 'Статья о RAL 9016 сохраняет общий запрос «что за цвет». Новый материал отвечает на сравнительный запрос и даёт последовательность согласования отделки. Не переносить в него основной текст действующей статьи.',
        'body': (OUT / 'ral-9016-9010-9003-kakoy-belyy-vybrat.body.html').read_text(encoding='utf-8'),
    },
    {
        'slug': 'arbonia-3030-skolko-sektsiy-dlina-moshchnost',
        'cluster': 'Низкие радиаторы / Arbonia 3030',
        'title': 'Сколько секций Arbonia 3030 нужно: длина и мощность радиатора',
        'description': 'Таблица мощности Arbonia 3030 при ΔT50 и ΔT60, длина по числу секций и примеры подбора на 800–1000 Вт с проверкой доступного места.',
        'intent': 'Выбор числа секций уже выбранной низкой модели; одновременная проверка мощности и длины.',
        'gsc_basis': 'Страница /models/3030 получила 1 050 показов и 4 клика за три месяца, средняя позиция 13,62. Это основание усилить коммерческую страницу; спрос на точный заголовок новой статьи отдельно не измерен.',
        'incoming_links': [
            {'from': '/models/3030', 'anchor': 'как выбрать число секций Arbonia 3030', 'placement': 'Рядом с таблицей складских исполнений.'},
            {'from': '/models/3030-9016-12', 'anchor': 'примеры расчёта мощности и длины Arbonia 3030', 'placement': 'После блока подбора низкой модели.'},
            {'from': '/articles/radiator-pod-nizkiy-podokonnik', 'anchor': 'таблица мощности и числа секций Arbonia 3030', 'placement': 'В ответе о расчёте числа секций.'},
            {'from': '/articles/arbonia-3030-vs-3037', 'anchor': 'подбор числа секций для Arbonia 3030', 'placement': 'После сравнительного расчёта.'},
        ],
        'overlap_control': 'Материал о низком подоконнике выбирает тип прибора по месту. Сравнение 3030/3037 выбирает модель по высоте. Новая статья считает секции и длину для одной модели; не добавлять в её заголовок общий запрос «низкие радиаторы».',
        'body': (OUT / 'arbonia-3030-skolko-sektsiy-dlina-moshchnost.body.html').read_text(encoding='utf-8'),
    },
    {
        'slug': 'radiator-pod-glubokim-podokonnikom-stoleshnitsey',
        'cluster': 'Размещение и монтаж / радиатор под окном',
        'title': 'Радиатор под глубоким подоконником или столешницей: что проверить',
        'description': 'Как спланировать радиатор под глубокой столешницей: движение воздуха, место термоголовки, размеры ниши и доступ для обслуживания до заказа мебели.',
        'intent': 'Проверка мебельной конструкции вокруг радиатора до изготовления столешницы или экрана.',
        'gsc_basis': 'Основная статья о размещении получила 14 547 показов и 187 кликов. Точные запросы с нишей — только 29 показов в доступной выгрузке; тема предлагается как практическое дополнение к кластеру, а не как доказанный большой поисковый спрос.',
        'incoming_links': [
            {'from': '/articles/gde-razmestit-radiator-otopleniya', 'anchor': 'что проверить у радиатора под глубокой столешницей', 'placement': 'В разделе о нишах и подоконной столешнице.'},
            {'from': '/articles/radiator-pod-nizkiy-podokonnik', 'anchor': 'радиатор под глубоким подоконником: воздух и термоголовка', 'placement': 'После проверки высоты места установки.'},
            {'from': '/articles/termostat', 'anchor': 'почему термоголовку нельзя прятать под мебелью', 'placement': 'В разделе о размещении датчика.'},
        ],
        'overlap_control': 'Основная статья выбирает место прибора. Материал о низком подоконнике выбирает модель по высоте. Новый материал проверяет мебельную конструкцию, движение воздуха и расположение датчика; не дублировать общий список мест размещения.',
        'body': (OUT / 'radiator-pod-glubokim-podokonnikom-stoleshnitsey.body.html').read_text(encoding='utf-8'),
    },
]

ROOT = OUT.parents[1]
model = json.loads((ROOT / '.next/server/pages/models/3030-9016-12.json').read_text())['pageProps']['modelCurr']
rows = []
for n in [int(x) for x in model['inStockSections'].split(',')]:
    block_length = int(model['lengthSection']) * n
    length = block_length + 26
    p50 = int(model['dt50']) * n
    p60 = int(model['dt60']) * n
    rows.append(f'<tr><td>{n}</td><td>{block_length}</td><td>{length}</td><td>{p50}</td><td>{p60}</td></tr>')
table = '<div class="table-wrap"><table><thead><tr><th>Секции</th><th>Номинальная длина L, мм</th><th>Длина по карточке, мм</th><th>Мощность ΔT50, Вт</th><th>Мощность ΔT60, Вт</th></tr></thead><tbody>' + ''.join(rows) + '</tbody></table></div>'
articles[1]['body'] = articles[1]['body'].replace('__POWER_TABLE__', table)

CSS = '''
:root{color-scheme:light;--ink:#23302d;--muted:#626b67;--accent:#bc560d;--line:#d9dfdb;--bg:#f8f8f5}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.75;font-size:18px}
main{max-width:960px;margin:auto;padding:34px 30px 70px}a{color:var(--accent);text-underline-offset:.18em}a:hover{text-decoration-thickness:2px}
header{border-bottom:1px solid var(--line);padding-bottom:20px;margin-bottom:28px}.brand{font-weight:750;letter-spacing:.02em;font-size:16px}.draft{color:var(--muted);font-size:14px;margin-top:6px}
article{background:#fff;padding:42px;border:1px solid var(--line);border-radius:6px}h1{font-size:34px;line-height:1.23;letter-spacing:-.02em;margin:0 0 22px}h2{font-size:25px;line-height:1.35;margin:38px 0 12px}h3{font-size:20px;line-height:1.45;margin:25px 0 9px}p{margin:14px 0}.lead{font-size:20px;font-weight:550;line-height:1.6}
li{padding-left:5px;margin:10px 0}ol,ul{padding-left:25px}.table-wrap{overflow-x:auto;margin:22px 0}table{border-collapse:collapse;width:100%;min-width:520px;font-size:16px;line-height:1.55}th,td{padding:12px 14px;border:1px solid var(--line);text-align:left;vertical-align:top}th{background:#f1f3ef;font-weight:650}
details.editor{padding:14px 18px;border:1px solid var(--line);font-size:15px;background:#fff;margin:20px 0 28px}summary{cursor:pointer;font-weight:650}.meta{font-size:15px;color:var(--muted)}.toc{display:grid;gap:18px}.toc a{display:block;padding:22px;border:1px solid var(--line);border-radius:6px;background:white;text-decoration:none}.toc strong{font-size:23px;display:block;line-height:1.35}.toc small{color:var(--muted);display:block;margin-top:10px;font-size:15px}.note{background:#eef1ec;border-left:3px solid #71806f;padding:16px 20px}.sources{font-size:15px;color:var(--muted);margin-top:30px}
@media(max-width:650px){body{font-size:17px}main{padding:22px 16px 42px}article{padding:26px 20px}h1{font-size:28px}h2{font-size:23px}.lead{font-size:18px}table{font-size:15px}}
@media print{body{background:white}main{max-width:none;padding:0}header,details.editor,.draft{display:none}article{border:0;padding:0}h2,h3{break-after:avoid}tr{break-inside:avoid}a{color:inherit}a[href^="https"]::after{content:" (" attr(href) ")";font-size:10px}}
'''

def shell(title, content):
    return '<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>' + escape(title) + '</title><style>' + CSS + '</style></head><body><main>' + content + '</main></body></html>'

for article in articles:
    article['proposed_url'] = SITE + '/articles/' + article['slug']
    article['status'] = 'published' if published else 'draft_not_published'
    article['checked_on'] = '2026-10-13'
    body_text = unescape(re.sub(r'<[^>]+>', ' ', article['body']))
    article['word_count'] = len(re.findall(r'[A-Za-zА-Яа-яЁё0-9]+(?:[-–][A-Za-zА-Яа-яЁё0-9]+)*', body_text))
    article['characters_without_spaces'] = len(re.sub(r'\s+', '', body_text))
    status_text = 'Опубликовано 13 октября 2026' if published else 'Текст подготовлен 13 октября 2026 · На сайт не опубликован'
    live_link = '<p><a href="' + article['proposed_url'] + '">Открыть опубликованную статью на сайте →</a></p>' if published else ''
    intro = '<header><div class="brand">ARBONIASHOP · РЕДАКЦИОННЫЙ ПРОСМОТР</div><div class="draft">' + status_text + '</div><a href="index.html">← Все три статьи</a>' + live_link + '</header>'
    meta = '<details class="editor"><summary>Заголовок для поиска, описание и план ссылок</summary><p><strong>Title:</strong> ' + escape(article['title']) + '</p><p><strong>Description:</strong> ' + escape(article['description']) + '</p><p><strong>Предлагаемый URL:</strong> ' + escape(article['proposed_url']) + '</p><p><strong>Кластер:</strong> ' + escape(article['cluster']) + '</p><p>' + escape(article['gsc_basis']) + '</p><p><strong>Разграничение с действующими статьями:</strong> ' + escape(article['overlap_control']) + '</p><ul>' + ''.join('<li>' + escape(x['from']) + ' → «' + escape(x['anchor']) + '». ' + escape(x['placement']) + '</li>' for x in article['incoming_links']) + '</ul></details>'
    (OUT / (article['slug'] + '.html')).write_text(shell(article['title'], intro + meta + '<article>' + article['body'] + '</article>'), encoding='utf-8')

cards = ''.join('<a href="' + escape(x['slug']) + '.html"><strong>' + escape(x['title']) + '</strong><small>' + escape(x['cluster']) + ' · ' + str(x['word_count']) + ' слов</small></a>' for x in articles)
index = '<header><div class="brand">ARBONIASHOP · ПЕРВЫЕ ТРИ НОВЫЕ СТАТЬИ</div><div class="draft">13 октября 2026 · Полные тексты для просмотра · На сайт не опубликованы</div></header><h1>Дополняем существующие тематические кластеры</h1><p>Подготовлены тексты, заголовки для поиска, описания и планы внутренних ссылок. Внутри каждой статьи есть переходы к действующим страницам магазина и ссылки на проверенные источники.</p><div class="toc">' + cards + '</div><h2>Порядок публикации</h2><ol><li><strong>Сравнение белых RAL.</strong> Есть запросы в Search Console; материал раскрывает выбор между оттенками.</li><li><strong>Расчёт секций Arbonia 3030.</strong> Помогает выбрать исполнение низкой модели и поддерживает её коммерческую страницу.</li><li><strong>Радиатор под глубокой столешницей.</strong> Практическое дополнение к сильному кластеру размещения; прямой поисковый спрос в выгрузке небольшой.</li></ol><div class="note">После публикации нужны входящие ссылки из указанных действующих материалов, карточки в разделе статей, self-canonical, корректная Article-разметка с фактической датой публикации и новые URL в sitemap. Общие статьи сохраняют свою роль; новые отвечают на более узкие вопросы.</div><p class="meta">Числовая таблица для Arbonia 3030 рассчитана по данным каталога сайта. Наличие, цены и сроки поставки в текстах не обещаются. Общая длина с арматурой и монтажные зазоры проверяются по чертежу конкретного исполнения.</p>'
if published:
    index = index.replace('13 октября 2026 · Полные тексты для просмотра · На сайт не опубликованы', 'Опубликовано 13 октября 2026 · Полные тексты для просмотра')
    index = index.replace('Порядок публикации', 'Опубликованные материалы')
    index = index.replace('После публикации нужны входящие ссылки из указанных действующих материалов, карточки в разделе статей, self-canonical, корректная Article-разметка с фактической датой публикации и новые URL в sitemap.', 'Статьи опубликованы: добавлены входящие ссылки, карточки в разделе статей, canonical, разметка Article и FAQ, новые URL в sitemap.')
(OUT / 'index.html').write_text(shell('Три новые статьи для ArboniaShop — редакционный просмотр', index), encoding='utf-8')
(OUT / 'articles.json').write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps([{'title':x['title'],'words':x['word_count'],'file':str(OUT/(x['slug']+'.html'))} for x in articles], ensure_ascii=False))
