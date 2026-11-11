from pathlib import Path
from html import escape
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import json
import math
import re

OUT = Path(__file__).resolve().parent
ROOT = OUT.parents[1]
SITE = 'https://arboniashop.ru'
publication = json.loads((OUT / 'publication.json').read_text()) if (OUT / 'publication.json').exists() else {}
published = publication.get('status') == 'published'
q50, exponent = 58, 1.30
q30 = q50 * (30 / 50) ** exponent
rows = [(n, 45*n+26, q50*n, round(q30*n)) for n in range(8,31,2)]
table = '<div class="table-wrap"><table><thead><tr><th>Секции</th><th>Длина по карточке, мм</th><th>75/65/20, Вт</th><th>55/45/20, около Вт</th></tr></thead><tbody>'
table += ''.join('<tr>' + ''.join('<td>'+str(v)+'</td>' for v in row) + '</tr>' for row in rows)
table += '</tbody></table></div>'

articles = [
 {
  'slug':'arbonia-3057-skolko-sektsiy-dlina-moshchnost',
  'heading':'Сколько секций Arbonia 3057 нужно: мощность и длина при разных температурах',
  'title':'Arbonia 3057: сколько секций нужно, мощность и длина',
  'description':'Сколько секций Arbonia 3057 нужно при 75/65/20 и 55/45/20: таблица мощности и длины, пример на 1000 Вт и проверка радиатора после снижения температуры воды.',
  'why':'Закрывает расчёт выбранной 3057 с акцентом на низкотемпературный режим и изменение мощности уже установленного прибора. Поддерживает /models/3057. Статья о 3030 сохраняет акцент на ограниченной длине, статья о замене — на трубах и подготовке работ.',
  'intent':'Расчёт числа секций и длины одной выбранной модели по известной нагрузке и температурному режиму.',
  'incoming':[
   {'from':'/models/3057','anchor':'таблица секций, мощности и длины Arbonia 3057','placement':'После вводного описания модели, перед подбором исполнения.'},
   {'from':'/models/3057-9016-12','anchor':'как рассчитать число секций Arbonia 3057','placement':'После характеристик и таблицы доступных секций. При реализации через общий компонент показывать только для семейства 3057.'},
   {'from':'/articles/arbonia-3057','anchor':'расчёт мощности и длины Arbonia 3057 при разных температурах','placement':'Вместо подробного примера 1200 Вт и 22 секций в разделе о мощности.'},
   {'from':'/articles/radiatory-arbonia-pod-okno','anchor':'подбор секций уже выбранной Arbonia 3057','placement':'После примера сравнения четырёх моделей по нагрузке; общий выбор моделей сохранить.'},
   {'from':'/articles/delta-t-teplootdacha','anchor':'пример расчёта Arbonia 3057 для 75/65/20 и 55/45/20','placement':'В разделе применения температурного режима к выбору модели. Рядом добавить ссылку на опубликованный расчёт 3030; не повторять таблицы.'},
   {'from':'/articles','anchor':'Сколько секций Arbonia 3057 нужно: мощность и длина','placement':'Отдельная карточка нового материала.'},
  ],
  'parent_replacements':[
   {'from':'/articles/arbonia-3057','replace':'Два абзаца с нагрузкой 1200 Вт, расчётным минимумом 21 секция и выбором 22 секций.',
    'with':'<p>Число секций выбирают по требуемой нагрузке и мощности 3057 при рабочем температурном режиме. Нельзя переносить число секций старой батареи без сравнения теплоотдачи. Таблицы и примеры приведены в <a href="/articles/arbonia-3057-skolko-sektsiy-dlina-moshchnost">расчёте мощности и длины Arbonia 3057 при разных температурах</a>.</p>'},
   {'from':'/articles/delta-t-teplootdacha','replace':'Добавить после общего объяснения применения температурного режима к подбору. Это дополнение, а не удаление текущего общего расчёта.',
    'with':'<p>Применение температурного режима к конкретным моделям показано в <a href="/articles/arbonia-3030-skolko-sektsiy-dlina-moshchnost">расчёте мощности и длины Arbonia 3030</a> и в <a href="/articles/arbonia-3057-skolko-sektsiy-dlina-moshchnost">примере расчёта Arbonia 3057 для 75/65/20 и 55/45/20</a>. В статье о 3030 основной акцент сделан на доступной длине, в статье о 3057 — на работе при более низкой температуре воды.</p>'},
  ],
  'notes':['Источник обновлён: каталог производителя 2021-N, страница PDF 82: 58 Вт при ΔT50, n=1,30. Публичная копия размещена на сайте поставщика. ΔT30 рассчитан по среднему арифметическому температур, а не взят как отдельное паспортное значение.',
   'У 3057 в карточках 78 Вт при ΔT60; каталоги 2015-N и 2021-N указывают 73 Вт для 90/70/20. В черновике 78 Вт не используется. Все 108 семейств карточек сопоставлены с таблицами обеих редакций; пять расхождений сохранены в отдельном аудите.',
   'Длина 45×N+26 — формула текущих карточек магазина. В заводском каталоге номинальная длина 45×N. Не приписывать 26 мм конкретным деталям без подтверждения чертежом.'],
 },
 {
  'slug':'nizkiy-arbonia-ili-vnutripolnyy-konvektor',
  'heading':'Низкий радиатор Arbonia или внутрипольный конвектор: что выбрать у панорамного окна',
  'title':'Низкий Arbonia или внутрипольный конвектор: сравнение',
  'description':'Низкий Arbonia или внутрипольный конвектор у панорамного окна: холодный поток от стекла, размеры ниши, пример мощности KRP91, вентилятор и стоимость установки.',
  'why':'Помогает выбрать между двумя типами приборов. Поддерживает каталог низких моделей и сценарий панорамного остекления. Общая статья panorama сохраняет обзор четырёх вариантов отопления.',
  'intent':'Выбор между низким трубчатым радиатором и водяным внутрипольным конвектором для конкретной зоны остекления.',
  'incoming':[
   {'from':'/articles/panorama','anchor':'подробное сравнение низкого Arbonia и внутрипольного конвектора','placement':'После общей таблицы четырёх решений. FAQ о паре сократить до краткого ответа и ссылки.'},
   {'from':'/articles/low-models','anchor':'низкий радиатор или внутрипольный конвектор у панорамного окна','placement':'После сравнения трёх низких моделей, как переход к выбору другого типа прибора.'},
   {'from':'/catalog/low-models','anchor':'когда вместо низкого радиатора нужен внутрипольный конвектор','placement':'В блоке полезных материалов категории, рядом с обзором низких моделей.'},
   {'from':'/articles/radiator-pod-nizkiy-podokonnik','anchor':'сравнение низкого радиатора и конвектора в полу','placement':'В разделе о панорамном остеклении; обозначить, что ссылка относится к окну до пола.'},
   {'from':'/articles','anchor':'Низкий Arbonia или внутрипольный конвектор','placement':'Отдельная карточка нового материала.'},
  ],
  'parent_replacements':[
   {'from':'/articles/panorama','replace':'FAQ «Что выбрать: низкий радиатор или внутрипольный конвектор?» — заменить видимый ответ и acceptedAnswer согласованно.',
    'with':'<p>Низкий радиатор устанавливается над полом, конвектору требуется подходящая ниша. Решение зависит от конструкции пола, нагрузки, режима отопления и обслуживания. Монтаж и эксплуатация двух вариантов разобраны в <a href="/articles/nizkiy-arbonia-ili-vnutripolnyy-konvektor">подробном сравнении низкого Arbonia и внутрипольного конвектора</a>.</p>',
    'faq_plain_answer':'Низкий радиатор устанавливается над полом, конвектору требуется подходящая ниша. Решение зависит от конструкции пола, нагрузки, режима отопления и обслуживания. Монтаж и эксплуатация двух вариантов разобраны в подробном сравнении низкого Arbonia и внутрипольного конвектора.'},
  ],
  'notes':['Речь о водяных конвекторах для отопления. Электрические приборы и охлаждение не включены в сравнение.',
   'В тексте прямо указано: магазин специализируется на трубчатых радиаторах, конвектор подбирают у профильного поставщика.',
   'Названия KRP91 и KRN41 и размеры проверены на действующей странице производителя. Высота корпуса не объявляется полной глубиной строительной ниши.',
   'Пример KRP91: каталог 2018-CH, PDF страница 18, H150/T185/L1000, рабочая оребрённая длина 722 мм, n1,55, 303/136 Вт при ΔT50/30. Указана редакция источника; значения не распространены на все конвекторы.'],
 },
 {
  'slug':'zavodskoy-cvet-arbonia-ili-perekraska-iz-nalichiya',
  'heading':'Заводской цвет Arbonia или перекраска радиатора из наличия: как выбрать способ заказа',
  'title':'Заводской цвет Arbonia или перекраска из наличия',
  'description':'Как получить выбранный цвет Arbonia: заводской заказ или перекраска радиатора из наличия официальным дилером. Комплектация, сроки, образцы и гарантия.',
  'why':'Отвечает на выбор способа заказа после согласования модели и цвета. Поддерживает услугу /coloring. Гид по цвету остаётся про образцы и сочетания, статья о белых — про различия RAL.',
  'intent':'Выбор способа получения согласованного цвета и технического исполнения радиатора.',
  'incoming':[
   {'from':'/coloring','anchor':'заводской цвет или перекраска из наличия: как выбрать','placement':'После краткого описания двух способов. На странице услуги сохранить заявку и условия, не копировать статью.'},
   {'from':'/articles/kak-vybrat-cvet-radiatora-pod-interer','anchor':'как выбрать между заводским цветом и перекраской из наличия','placement':'В разделе «Покраска по RAL», вместо подробного сравнения сроков и вариантов заказа.'},
   {'from':'/articles/tsvet-radiatorov-v-interiere','anchor':'как заказать радиатор в выбранном цвете','placement':'В финальном переходе после утверждения интерьерной идеи.'},
   {'from':'/articles/ral-9016-9010-9003-kakoy-belyy-vybrat','anchor':'способ заказа радиатора в согласованном белом цвете','placement':'В разделе заказа другого белого, после сравнения образцов.'},
   {'from':'/articles','anchor':'Заводской цвет Arbonia или перекраска из наличия','placement':'Отдельная карточка нового материала.'},
  ],
  'parent_replacements':[
   {'from':'/articles/kak-vybrat-cvet-radiatora-pod-interer','replace':'Длинный абзац «Покраска по RAL — когда стандартного цвета недостаточно» с ориентирами сроков и сравнением складского/заводского заказа.',
    'with':'<p>После согласования образца выберите способ получения цвета: заводское исполнение или перекраска подходящего радиатора из наличия официальным дилером с сохранением гарантии. У каждого варианта свои ограничения по комплектации и срокам. Порядок сравнения описан в статье <a href="/articles/zavodskoy-cvet-arbonia-ili-perekraska-iz-nalichiya">как выбрать между заводским цветом и перекраской из наличия</a>.</p>'},
   {'from':'/coloring','replace':'При публикации статьи уточнить краткое описание услуги, сохранив заявку. Официальный дилер, порошковая технология и сохранение гарантии подтверждены владельцем; договоры не проверены.',
    'with':'<p>Подходящий радиатор из наличия можно перекрасить порошковым способом. Работу выполняет официальный дилер, гарантия сохраняется. На странице указан срок покраски 1–2 недели; актуальную готовность конкретного заказа и доставку согласуют отдельно. Для заводского заказа и поставки ориентир составляет 2–4 месяца. Стоимость работ и совместимость выбранного покрытия запрашивайте для нужного исполнения.</p><p>Порядок выбора двух способов разобран в статье <a href="/articles/zavodskoy-cvet-arbonia-ili-perekraska-iz-nalichiya">заводской цвет или перекраска из наличия: как выбрать</a>.</p>'},
  ],
  'notes':['Условия подтверждены пользователем: покраску выполняет официальный дилер, гарантия сохраняется; технология порошковая.',
   'Не подтверждены полное снятие заводского слоя, список исключений, числовая доплата и отдельный срок гарантии на слой. В статье нет вымышленных условий; предусмотрена проверка совместимости и запрос индивидуального предложения.',
   'Ориентиры 1–2 недели и 2–4 месяца взяты с действующей страницы coloring; они не заменяют согласованный срок конкретного заказа.'],
 },
]

STYLE = '''body{margin:0;background:#f3f2ef;color:#293239;font:18px/1.75 system-ui}main{max-width:1000px;margin:32px auto;background:white;padding:36px 42px;border-radius:12px}h1{font-size:34px;line-height:1.25}h2{font-size:26px;line-height:1.35;margin-top:38px}h3{font-size:21px;line-height:1.45}a{color:#ae4700}table{width:100%;min-width:550px;border-collapse:collapse;font-size:16px}td,th{padding:12px;border:1px solid #ddd;vertical-align:top;text-align:left}th{background:#f7f6f3}.table-wrap{overflow-x:auto;margin:24px 0}.editor{background:#f8f3e8;padding:20px;border-radius:8px;margin:24px 0;font-size:16px}.status{font-size:14px;font-weight:700;color:#97632a}.toc a{display:block;margin:14px 0}.meta{font-size:15px;color:#657079}.lead{font-size:20px;font-weight:500}li{margin:8px 0}code{overflow-wrap:anywhere;font-size:15px}@media(max-width:600px){main{margin:0;padding:22px 16px;border-radius:0}body{font-size:17px}h1{font-size:28px}h2{font-size:23px}}'''

def shell(title, content):
    return '<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>'+escape(title)+'</title><style>'+STYLE+'</style></head><body><main>'+content+'</main></body></html>'

for a in articles:
    a['status'] = 'published' if published else 'draft-awaiting-review'
    if published and a['slug'].startswith('arbonia-3057-'):
        a['notes'] = [n for n in a['notes'] if not n.startswith('У 3057 в карточках')] + ['При публикации исправлены мощности пяти семейств, включая 3057: 73 Вт при ΔT60. Проверка публичного сайта завершена без ошибок.']
    body = (OUT / (a['slug'] + '.body.html')).read_text().replace('{{POWER_TABLE}}', table)
    a['body'] = body
    soup = BeautifulSoup(body, 'html.parser')
    a['word_count'] = len(re.findall(r'[\w]+(?:[−–-][\w]+)*', soup.get_text(' ',strip=True)))
    a['characters_without_spaces'] = len(re.sub(r'\s','',soup.get_text(' ',strip=True)))
    a['faq'] = [{'question':h.get_text(' ',strip=True),'answer':h.find_next_sibling('p').get_text(' ',strip=True)} for h in soup.find_all('h3')]
    a['outgoing'] = [{'to':link['href'],'anchor':link.get_text(' ',strip=True),'type':'internal' if link['href'].startswith('/') else 'primary_source'} for link in soup.find_all('a',href=True)]
    a['proposed_url'] = SITE + '/articles/' + a['slug']
    meta = '<div class="editor"><p><strong>Зачем:</strong> '+escape(a['why'])+'</p><p><strong>Интент:</strong> '+escape(a['intent'])+'</p><p><strong>Предлагаемый URL:</strong> <code>'+escape(a['proposed_url'])+'</code></p><p><strong>Title:</strong> '+escape(a['title'])+'</p><p><strong>Description:</strong> '+escape(a['description'])+'</p><p><strong>Объём:</strong> '+str(a['word_count'])+' слов, '+str(a['characters_without_spaces'])+' знаков без пробелов.</p><h2>План входящих ссылок</h2><ul>'
    meta += ''.join('<li><a href="'+SITE+x['from']+'">'+escape(x['from'])+'</a> → «'+escape(x['anchor'])+'». '+escape(x['placement'])+'</li>' for x in a['incoming'])+'</ul><h2>Исходящие ссылки в тексте</h2><ul>'
    meta += ''.join('<li><a href="'+(SITE+x['to'] if x['to'].startswith('/') else x['to'])+'">'+escape(x['anchor'])+'</a> · '+escape(x['type'])+'</li>' for x in a['outgoing'])+'</ul><h2>Правки статей-родителей при публикации</h2>'
    meta += ''.join('<p><strong>'+escape(x['from'])+':</strong> '+escape(x['replace'])+'</p><blockquote>'+x['with']+'</blockquote>' for x in a['parent_replacements'])+'<h2>Редакторские проверки</h2><ul>'+''.join('<li>'+escape(n)+'</li>' for n in a['notes'])+'</ul></div>'
    content = ('<p class="status">ARBONIASHOP · ОПУБЛИКОВАНО</p>' if published else '<p class="status">ARBONIASHOP · НА ПРОВЕРКУ · НЕ ОПУБЛИКОВАНО</p>') + '<p><a href="index.html">← Все три статьи</a></p>'+meta+'<article><h1>'+escape(a['heading'])+'</h1>'+body+'</article>'
    # Local previews link to real public pages; no links to future URLs are activated.
    content = re.sub(r'href="(/[^\"]+)"', lambda m:'href="'+SITE+m.group(1)+'"',content)
    for draft in articles:
        if published:
            continue
        content = content.replace('href="'+SITE+'/articles/'+draft['slug']+'"', 'data-proposed-url="'+SITE+'/articles/'+draft['slug']+'"')
    (OUT / (a['slug']+'.html')).write_text(shell(a['heading'],content))

intro = '<p class="status">ARBONIASHOP · 13 ОКТЯБРЯ 2026 · НА ПРОВЕРКУ</p><h1>Три статьи для следующей публикации</h1><p>Подготовлены полные тексты, объяснение роли каждой статьи и планы входящих/исходящих ссылок. Ссылки из действующих страниц пока запланированы: они добавляются вместе с публикацией. Старые разделы сокращаются по указанным заменам.</p><div class="toc">'
intro += ''.join('<a href="'+a['slug']+'.html">'+escape(a['heading'])+'</a><p class="meta">'+escape(a['why'])+' · '+str(a['word_count'])+' слов</p>' for a in articles)+'</div><h2>До публикации</h2><p>Сверка всех 108 семейств с каталогами 2015-N и 2021-N завершена: выявлены пять расхождений в характеристиках 2057, 2100, 3037, 3057 и 5045. Данные карточек в рамках проверки не менялись; перечень сохранён в audit/2026-10-13/dt60-manufacturer-comparison.json. После утверждения текстов: опубликовать три URL, добавить входящие ссылки и карточки раздела статей, применить правки родительских разделов и уточнение страницы покраски, проверить Article/BreadcrumbList/FAQPage, canonical и sitemap. Даты публикации задаются только в момент фактической публикации.</p>'
if published:
    intro = '<p class="status">ARBONIASHOP · 13 ОКТЯБРЯ 2026 · ОПУБЛИКОВАНО</p><h1>Три опубликованные статьи</h1><p>Тексты опубликованы вместе с исправлениями пяти семейств карточек и страницы покраски. Входящие ссылки и сокращения родительских разделов применены, заголовки и разметка проверены.</p><div class="toc">'
    intro += ''.join('<a href="'+SITE+'/articles/'+a['slug']+'">'+escape(a['heading'])+'</a><p class="meta">'+escape(a['why'])+' · '+str(a['word_count'])+' слов · <a href="'+a['slug']+'.html">локальная копия с планом ссылок</a></p>' for a in articles)+'</div>'
(OUT / 'index.html').write_text(shell('Три новые статьи ArboniaShop — проверка текстов и ссылок',intro))
(OUT / 'articles.json').write_text(json.dumps(articles,ensure_ascii=False,indent=2)+'\n')
(OUT / 'calculations.json').write_text(json.dumps({'q50':q50,'exponent':exponent,'q30_calculated':q30,'q60_calculated':q50*(60/50)**exponent,'table':rows,'stock_sections_snapshot':list(range(8,31,2)),'editorial_card_conflict':{'card_dt60':78,'derived_dt60':q50*(60/50)**exponent}},ensure_ascii=False,indent=2)+'\n')
print(json.dumps([{'slug':a['slug'],'words':a['word_count'],'incoming':len(a['incoming']),'outgoing':len(a['outgoing']),'faq':len(a['faq'])} for a in articles],ensure_ascii=False))
