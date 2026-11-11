"""Targeted edits to established parent articles, preserving their URLs and tools."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[2]
BEFORE = ROOT / 'audit/2026-10-13/intents-before'
targeted = []

def read(slug):
    return (BEFORE / f'{slug}.tsx').read_text()

def save(slug, text, intent):
    text = '\n'.join(line.rstrip() for line in text.splitlines()) + '\n'
    (ROOT / 'pages/articles' / slug / 'index.tsx').write_text(text)
    targeted.append({'slug': slug, 'intent': intent})

def section(text, heading, next_heading, replacement):
    start = text.index(f'<SectionHeading>{heading}</SectionHeading>')
    end = text.index(f'<SectionHeading>{next_heading}</SectionHeading>', start)
    return text[:start] + replacement + '\n\t\t\t\t' + text[end:]

def remove_extra_breadcrumb(text):
    # PageTitle already emits this same breadcrumb trail.
    text = re.sub(r"\n\tconst breadcrumbJsonLd = \{.*?\n\t\}\n", '\n', text, flags=re.S)
    text = re.sub(r"\n\s*<script id=\{`\$\{slug\}-breadcrumb-jsonld`\}.*?/>\n", '\n', text)
    text = re.sub(r"\n\s*<Script\s+id='[^']+-breadcrumb-jsonld'.*?/>\n", '\n', text, flags=re.S)
    return text

slug = 'ral-9016-pochemu-vybirayut-arkhitektory'
t = read(slug).replace('Что такое RAL 9016 и почему его выбирают архитекторы', 'RAL 9016: какой это цвет радиатора Arbonia')
start = t.index("\t\t\t\t<Box textAlign={'center'}>")
end = t.index("\t\t\t\t<Box display='grid'", start)
t = t[:start] + '''\t\t\t\t<h2>Как выглядит RAL 9016 рядом с отделкой</h2>
                <p>RAL 9016 — Traffic white, или «транспортный белый», из палитры RAL Classic.
                    <a href='https://www.ral-farben.de/alle-ral-farben'>Официальный каталог RAL</a> закрепляет название оттенка.
                    На радиаторе его воспринимают вместе с формой трубок, тенями и блеском покрытия.</p>
                <p>Код не гарантирует совпадения с любой белой стеной или рамой. Поднесите образец к отделке при дневном
                    и вечернем свете. Если задача — выбрать один из нескольких белых, используйте
                    <a href='/articles/ral-9016-9010-9003-kakoy-belyy-vybrat'> сравнение RAL 9016, RAL 9010 и RAL 9003</a>:
                    оно посвящено различиям оттенков и их согласованию.</p>
''' + t[end:]
t = t.replace('«воздушный» цвет без примесей', 'светлый цвет без выраженного контраста')
t = t.replace('как современный нейтральный белый', 'как нейтральный белый')
save(slug, t, 'Что означает RAL 9016 и как выглядит этот цвет на радиаторе')

slug = 'kak-vybrat-cvet-radiatora-pod-interer'
t = read(slug).replace("dateModified: '2026-08-23'", "dateModified: '2026-10-13'")
t = t.replace('Как выбрать цвет радиатора Arbonia под стены, окна и мебель: RAL 9016, антрацит или покраска по RAL, проверка света, фактуры и точных сочетаний.',
 'Порядок согласования цвета радиатора Arbonia: модель и подключение, образцы при разном освещении, блеск, арматура и спецификация заказа.')
t = t.replace('Какой цвет радиатора Arbonia самый универсальный?', 'С чего начинать согласование цвета радиатора Arbonia?')
old = re.search(r"question: 'С чего начинать согласование цвета радиатора Arbonia\?',\s*answer:\s*'([^']+)'", t).group(1)
t = t.replace(old, 'Сначала выбирают техническую модель, число секций и подключение. Затем определяют роль цвета в интерьере, проверяют реальные образцы рядом с отделкой и согласуют покрытие, видимую арматуру и сроки для конкретного исполнения.')
t = t.replace('Белый RAL 9016 безопаснее для нейтрального интерьера, антрацит и черный лучше работают в поддержанной темной графике, а покраска по RAL нужна для точного сценария.',
 'Нужный оттенок согласуют с реальными материалами; название белого или антрацита само по себе не подтверждает сочетание.')
t = section(t, 'Как модель и размер меняют восприятие цвета', 'Проверка оттенка перед заказом', '''<SectionHeading>Проверить покрытие на выбранной модели</SectionHeading>
                <Paragraph>Согласовывайте цвет после определения высоты, глубины, числа секций и подключения.
                    Добавьте в интерьерный эскиз корпус реального размера и видимую арматуру.
                    Оцените, сохраняется ли задуманный эффект на всём приборе, а не только на маленьком образце.</Paragraph>
                <Paragraph>Идеи сочетаний с деревом, камнем и металлическими деталями собраны в
                    <LinkText href='/articles/tsvet-radiatorov-v-interiere'> статье о цветных радиаторах в интерьере</LinkText>.
                    После выбора композиции здесь можно пройти проверку образца и оформить спецификацию покрытия.</Paragraph>
                ''')
t = remove_extra_breadcrumb(t)
save(slug, t, 'Практическое согласование покрытия и комплектации перед заказом')

slug = 'radiator-pod-nizkiy-podokonnik'
t = read(slug).replace("dateModified: '2026-07-21'", "dateModified: '2026-10-13'")
t = t.replace('Радиатор под низкий подоконник - как выбрать Arbonia', 'Радиатор под низкий подоконник: замер ниши и выбор высоты')
t = t.replace('Радиатор под низкий подоконник - выбор Arbonia', 'Радиатор под низкий подоконник: высота и размеры ниши')
t = t.replace('Как выбрать радиатор под низкий подоконник: расчет доступной высоты, сравнение Arbonia 2030 и 3030, мощность, подключение и монтажные зазоры.',
 'Как измерить нишу под низким подоконником: чистовой пол, высота корпуса, глубина, место подключения и монтажное пространство для радиатора Arbonia.')
t = section(t, 'Arbonia 2030 или 3030 - сравнение по мощности', 'Боковое и нижнее подключение в низкой нише', '''<SectionHeading>Что делать, если нужная мощность не помещается по длине</SectionHeading>
                <Paragraph marginTop='0'>После замера высоты проверьте доступную длину и допустимый выступ от стены.
                    Меньшая глубина корпуса может потребовать больше секций, а более глубокий прибор — оставить меньше
                    места для прохода. Не сокращайте радиатор ниже требуемой мощности только ради размещения в нише.</Paragraph>
                <Paragraph>Для выбора базовой модели используйте
                    <LinkText href='/articles/low-models'> сравнение низких Arbonia 2030, 3030 и 3037</LinkText>.
                    Если остаётся выбор между высотой 300 и 370 мм, его разбирает
                    <LinkText href='/articles/arbonia-3030-vs-3037'> сравнение 3030 и 3037</LinkText>.
                    Расчёт уже выбранного 3030 приведён отдельно в таблице секций ниже по ссылке.</Paragraph>
                ''')
t = remove_extra_breadcrumb(t)
save(slug, t, 'Замер низкой оконной ниши и определение монтажного габарита')

slug = 'mezhosevoe-rasstoyanie-500-mm-arbonia'
t = read(slug).replace("dateModified: '2026-07-21'", "dateModified: '2026-10-13'")
t = t.replace('Межосевое расстояние 500 мм Arbonia - замена батареи', 'Межосевое расстояние 500 мм Arbonia: как измерить и проверить выводы')
t = t.replace('Межосевое расстояние 500 мм Arbonia - замена', 'Межосевое 500 мм Arbonia: измерение и геометрия подключения')
t = t.replace('Межосевое расстояние 500 мм у Arbonia 2057 и 3057: как измерить старые трубы, выбрать модель, мощность и боковое подключение без ошибок при замене.',
 'Что означает межосевое 500 мм у Arbonia 2057 и 3057. Измерение центров труб, высоты осей, положения относительно стены и свободного места для арматуры.')
t = section(t, 'Arbonia 2057 или 3057 - мощность и габариты', 'Однотрубная и двухтрубная система', '''<SectionHeading>Какие корпуса соответствуют межосевому 500 мм</SectionHeading>
                <Paragraph marginTop='0'>У боковых Arbonia 2057 и 3057 одинаковая высота корпуса 570 мм и расстояние
                    между осями 500 мм. Глубина различается: 65 и 105 мм. После проверки осей измерьте полный выступ
                    от готовой стены и место для клапанов — геометрическая совместимость включает и эти размеры.</Paragraph>
                <Paragraph>Для остальных ограничений и выбора стандартного корпуса используйте
                    <LinkText href='/articles/radiatory-arbonia-pod-okno'> сравнение моделей под обычное окно</LinkText>.
                    Подготовка замены именно на 3057 описана в
                    <LinkText href='/articles/arbonia-3057'> отдельной статье о замене старой батареи</LinkText>.
                    Совпадение межосевого не подтверждает достаточную теплоотдачу; её сравнивают при одинаковом режиме.</Paragraph>
                ''')
t = remove_extra_breadcrumb(t)
save(slug, t, 'Измерение межосевого 500 мм и геометрическая совместимость подводок')

slug = 'arbonia-2180-calc'
t = read(slug)
start = t.index('\n\t\t\t\t<p>')
end = t.index('\n\t\t\t\t<h2', start)
t = t[:start] + '''
                <p>Ниже — готовые примеры для комнат 10–20 м² при условной нагрузке 100 Вт на 1 м².
                    Таблица показывает разницу между ΔT50 и ΔT60 для одной модели Arbonia 2180.
                    Если нужно менять площадь, высоту потолка и условия комнаты, используйте
                    <a href='/articles/arbonia-2180-po-ploshadi'> интерактивный калькулятор 2180</a>.
                    Эти примеры не заменяют расчёт теплопотерь.</p>
''' + t[end:]
t = t.replace('Свободную длину стены: ширина секции 45 мм, к длине корпуса добавляется 26 мм.',
 'Свободную длину стены: в карточках магазина длина радиатора рассчитывается как 45 × N + 26 мм; место арматуры учитывают отдельно.')
save(slug, t, 'Готовые табличные примеры 2180 для фиксированных площадей 10–20 м²')

slug = 'arbonia-2180-po-ploshadi'
t = read(slug)
start = t.index('\n\t\t\t\t<p>')
end = t.index('\n\t\t\t\t<p>', start + 1)
t = t[:start] + '''
                <p>Калькулятор Arbonia 2180 позволяет менять площадь, высоту потолка, условия комнаты и ΔT50 или ΔT60,
                    чтобы получить предварительный минимум секций. База 100 Вт на 1 м² и поправочные коэффициенты —
                    условная модель оценки, а не индивидуальный расчёт теплопотерь. Если проектная нагрузка уже известна,
                    используйте её и <a href='/articles/vertical-radiator-power'> мощность 2180 при нужном режиме</a>.</p>
''' + t[end:]
t = t.replace('Как уточнить мощность для Arbonia 2180', 'Как проверить исходные данные калькулятора')
t = t.replace('Итоговый выбор обычно получается технически обоснованным и более выгодным: радиатор обеспечивает комфортную\n\t\t\t\t\tтемпературу, не занимает лишнее место и не требует лишних затрат на оборудование.',
 'Перед заказом результат сопоставляют с проектной нагрузкой и доступным исполнением. Расчётный минимум не является подтверждением наличия: выберите ближайший больший размер и проверьте его полный габарит.')
t = t.replace("description: pageDescription,\n", "description: pageDescription,\n\t\t\t\t\tdateModified: '2026-10-13',\n")
t = re.sub(r"\n\s*<JsonLd data=\{\{\s*'@context': 'https://schema.org',\s*'@type': 'BreadcrumbList',.*?\}\} />", '', t, flags=re.S)
faq = [
 ('Можно ли подобрать Arbonia 2180 только по площади?', 'Площадь позволяет получить предварительный ориентир. Калькулятор использует условную базу и поправки; окончательный выбор сверяют с проектной нагрузкой и режимом отопления.'),
 ('Какую мощность секции использует калькулятор?', 'При выборе ΔT50 используется 130 Вт на секцию, при ΔT60 — 164 Вт. Эти значения относятся к одной модели при разных температурах системы.'),
 ('Расчётное число секций означает готовое исполнение в наличии?', 'Нет. Это минимальное число по выбранным допущениям. Для заказа выбирают ближайшее доступное исполнение с не меньшей мощностью и проверяют его длину с арматурой.'),
 ('Что делать, если есть нагрузка из проекта?', 'Использовать актуальную проектную нагрузку вместо оценки по площади и разделить её на мощность секции при предусмотренном температурном режиме с округлением вверх.'),
]
literal = json.dumps([dict(question=q, answer=a) for q, a in faq], ensure_ascii=False, indent=2)
t = t.replace("type ArticlePageProps = {}", "type ArticlePageProps = {}\n\nconst faqItems = " + literal)
t = t.replace('\n\t\t\t</Typography>\n\t\t\t<JsonLd', '''
                <h2 style={{ marginTop: '40px' }}>Частые вопросы о калькуляторе</h2>
                {faqItems.map(item => <React.Fragment key={item.question}>
                    <h3>{item.question}</h3><p>{item.answer}</p>
                </React.Fragment>)}
            </Typography>
            <JsonLd''', 1)
start = t.index("\n\t\t\t<JsonLd data={{\n\t\t\t\t\t'@context': 'https://schema.org',\n\t\t\t\t\t'@type': 'FAQPage',")
end = t.index('\n\t\t</Box>', start)
t = t[:start] + '''
            <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage',
                mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.question,
                    acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
            }} />''' + t[end:]
save(slug, t, 'Интерактивный предварительный подбор секций только Arbonia 2180')

slug = '2180-3180'
t = read(slug)
start = t.index('\n\t\t\t\t<Typography\n\t\t\t\t\tmarginTop=')
end = t.index('\n\t\t\t\t<Typography\n\t\t\t\t\tmarginTop=', start + 1)
t = t[:start] + '''
                <h2>Главные различия двух моделей высотой 1800 мм</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead><tr><th>Параметр</th><th>2180</th><th>3180</th></tr></thead>
                        <tbody>
                            <tr><td>Глубина корпуса</td><td>65 мм</td><td>105 мм</td></tr>
                            <tr><td>Мощность секции при ΔT50</td><td>130 Вт</td><td>173 Вт</td></tr>
                            <tr><td>Мощность секции при ΔT60</td><td>164 Вт</td><td>219 Вт</td></tr>
                            <tr><td>Сухая масса секции</td><td>2,29 кг</td><td>3,43 кг</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Данные приведены по карточкам моделей. 2180 уменьшает выступ корпуса, 3180 позволяет получить
                    больше мощности при одинаковой длине. Для выбора самого места и вертикальной формы используйте
                    <a href='/articles/high-arbonia'> руководство по простенку и планировке</a>.</p>
''' + t[end:]
t = t.replace('Более доступная цена при схожей мощности', 'Стоимость для одинаковой нагрузки')
t = t.replace('Благодаря оптимальной конструкции 2-трубчатый\n\t\t\t\t\t\t\t\tрадиатор обходится дешевле при практически одинаковом тепловом эффекте. Это особенно важно при установке\n\t\t\t\t\t\t\t\tнескольких приборов по всему дому.',
 'Сравнивайте полные исполнения, которые покрывают одну нагрузку при одинаковом температурном режиме. Нужное число секций, арматура и покрытие могут изменить итоговую цену; универсально более дешёвой модели нет.')
t = t.replace('мощности модели 2180 достаточно для комфортного обогрева', 'мощности модели 2180 при рабочем режиме достаточно для расчётной нагрузки')
needle = '\n\t\t\t\t<Box sx={{ mt: 4'
t = t.replace(needle, '''
                <p>Таблицы при разных температурах и пример по известной нагрузке приведены в
                    <a href='/articles/vertical-radiator-power'> расчёте мощности 2180 и 3180</a>.
                    Нельзя назначать радиатору универсальную площадь обогрева без нагрузки помещения и режима системы.</p>
''' + needle, 1)
save(slug, t, 'Сравнение 2180 и 3180 по глубине, массе, внешнему виду и условиям выбора')

slug = 'column-radiators'
t = read(slug)
t = t.replace("<LinkText href='/articles/tsvet-radiatorov-v-interiere'>цвет радиаторов в интерьере</LinkText>",
 "<LinkText href='/articles/kak-vybrat-cvet-radiatora-pod-interer'>практическом порядке выбора цвета Arbonia</LinkText>")
marker = '\n\t\t\t\t<Typography\n\t\t\t\t\tcomponent=\'h3\'\n\t\t\t\t\tvariant=\'h6\'\n\t\t\t\t\tmarginTop=\'28px\''
at = t.index(marker, t.index('Как выбрать трубчатый радиатор Arbonia'))
t = t[:at] + '''
                <p>Если конструкция подходит, переходите к задаче своего места установки:
                    <LinkText href='/articles/trubchatye-radiatory-dlya-kvartiry'> совместимость с отоплением квартиры</LinkText>,
                    <LinkText href='/articles/radiatory-arbonia-pod-okno'> выбор стандартного корпуса под окно</LinkText>,
                    <LinkText href='/articles/radiator-pod-nizkiy-podokonnik'> замер низкой ниши</LinkText> или
                    <LinkText href='/articles/high-arbonia'> выбор высокого радиатора для простенка</LinkText>.
                    Ниже — общие этапы, которые связывают эти решения.</p>
''' + t[at:]
save(slug, t, 'Общий обзор конструкции, преимуществ, ограничений и этапов выбора')

# Listing cards must promise the same task as their destination pages.
cards = {p.stem: json.loads(p.read_text()) for p in (ROOT / 'data/article-revisions').glob('*.json')}
cards.update({
 'radiator-pod-nizkiy-podokonnik': {'title': 'Радиатор под низкий подоконник: замер ниши и выбор высоты', 'description': 'Чистовой пол, доступная высота и глубина ниши, подключение и монтажное пространство.'},
 'mezhosevoe-rasstoyanie-500-mm-arbonia': {'title': 'Межосевое 500 мм Arbonia: измерение и геометрия подключения', 'description': 'Центры труб, высота осей, расстояние до стены и место арматуры для боковых 2057 и 3057.'},
 'arbonia-2180-calc': {'title': 'Arbonia 2180: таблица секций для комнат 10–20 м²', 'description': 'Готовые примеры при условной нагрузке 100 Вт/м² и двух температурных режимах.'},
 'arbonia-2180-po-ploshadi': {'title': 'Калькулятор секций Arbonia 2180', 'description': 'Изменяем площадь, высоту потолка, условия комнаты и ΔT для предварительного подбора.'},
 '2180-3180': {'title': 'Arbonia 2180 или 3180: сравнение двух вертикальных моделей', 'description': 'Глубина 65 или 105 мм, мощность при одинаковом ΔT, масса и условия выбора.'},
 'kak-vybrat-cvet-radiatora-pod-interer': {'title': 'Как выбрать цвет радиатора Arbonia под интерьер', 'description': 'Порядок согласования модели, физических образцов, блеска, арматуры и покрытия перед заказом.'},
 'ral-9016-pochemu-vybirayut-arkhitektory': {'title': 'RAL 9016: какой это цвет радиатора Arbonia', 'description': 'Что означает транспортный белый и как его воспринимают рядом с отделкой и при разном освещении.'},
})
p = ROOT / 'pages/articles/index.tsx'
t = p.read_text()
for slug, card in cards.items():
    pattern = re.compile(r"(<a\b[^>]*href=['\"]/articles/" + re.escape(slug) + r"['\"][^>]*>)(.*?)(</a>)", re.S)
    def update(match):
        index = 0
        def typography(m):
            nonlocal index
            value = card['title'] if index == 0 else card['description']
            index += 1
            return m.group(1) + '\n\t\t\t\t\t\t\t\t\t\t\t' + value + '\n\t\t\t\t\t\t\t\t\t\t' + m.group(3)
        body = re.sub(r'(<Typography\b[^>]*>)(.*?)(</Typography>)', typography, match.group(2), flags=re.S)
        assert index == 2, (slug, index)
        return match.group(1) + body + match.group(3)
    t, count = pattern.subn(update, t)
    assert count == 1, (slug, count)
p.write_text(t)

record = ROOT / 'audit/2026-10-13/article-intent-revisions.json'
r = json.loads(record.read_text())
r['targeted_revisions'] = targeted
r['listing_cards_updated'] = sorted(cards)
record.write_text(json.dumps(r, ensure_ascii=False, indent=2) + '\n')
print('Targeted articles:', len(targeted), '; listing cards:', len(cards))
