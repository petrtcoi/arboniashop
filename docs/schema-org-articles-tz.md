# ТЗ на Schema.org для статей ArboniaShop

## Обязательная разметка

На каждой новой статье нужно вывести в HTML три отдельных блока JSON-LD: `Article`, `BreadcrumbList` и `FAQPage`. Разметка должна формироваться на сервере или во время статической генерации и присутствовать в итоговом HTML без действий пользователя. Все URL указываются абсолютными с доменом `https://arboniashop.ru`, а JSON сериализуется через `JSON.stringify`, чтобы кавычки и переносы в тексте не ломали структуру.

## Article

Объект `Article` должен содержать `@context`, `@type`, `headline`, `description`, `image`, `datePublished`, `dateModified`, `mainEntityOfPage`, `about`, `keywords`, `author`, `publisher` и `inLanguage`. Значение `headline` дословно совпадает с видимым H1, `description` - с meta description, `image` ведет на основное изображение статьи, а даты передаются в формате `YYYY-MM-DD`. `mainEntityOfPage` оформляется как объект `WebPage` с полем `@id`, равным canonical URL. Автор и издатель указываются как `Organization` с названием `ArboniaShop`, для издателя дополнительно передается `logo` типа `ImageObject`.

Минимальный шаблон:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Точный H1 статьи",
  "description": "Точный meta description",
  "image": "https://arboniashop.ru/images/articles/example.jpg",
  "datePublished": "2026-08-23",
  "dateModified": "2026-08-23",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://arboniashop.ru/articles/example"
  },
  "about": "Основное ключевое слово",
  "keywords": ["основное ключевое слово", "связанный запрос"],
  "author": {
    "@type": "Organization",
    "name": "ArboniaShop",
    "url": "https://arboniashop.ru"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ArboniaShop",
    "url": "https://arboniashop.ru",
    "logo": {
      "@type": "ImageObject",
      "url": "https://arboniashop.ru/images/logo.png"
    }
  },
  "inLanguage": "ru-RU"
}
```

## BreadcrumbList

Хлебные крошки в JSON-LD должны повторять видимую навигацию. Для статьи используются три позиции: главная, список полезных материалов и текущая статья. Нумерация начинается с 1, название третьей позиции совпадает с H1, URL последней позиции совпадает с canonical.

## FAQPage

`FAQPage` добавляется только при наличии видимого раздела с вопросами и ответами. Каждый видимый H3-вопрос передается как `Question`, а соответствующий текст ответа - как `acceptedAnswer` типа `Answer`. Текст в JSON-LD должен совпадать с доступным пользователю текстом по смыслу и фактам, скрытые вопросы или дополнительные рекламные утверждения запрещены. FAQ не должен дублировать одинаковые вопросы на нескольких URL без необходимости: вопросы формулируются под конкретный интент статьи.

Минимальный шаблон:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Видимый вопрос из H3",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Полный видимый ответ без скрытых дополнений."
      }
    }
  ]
}
```

## SEO и технические требования

У страницы должен быть один H1, абсолютный canonical на собственный URL, уникальные meta title и meta description, `og:type=article`, абсолютное доступное изображение для Open Graph и индексируемый основной текст. H2 и H3 используются по иерархии, FAQ-вопросы размечаются H3. На информационной статье не нужно добавлять `Product` или `Offer`, если на ней нет самостоятельного товарного предложения с актуальной ценой и условиями. Структурированные данные не должны содержать характеристики, которых нет в видимом тексте.

## Критерии приемки

- Сборка Next.js проходит без ошибок TypeScript.
- В исходном HTML присутствуют валидные JSON-LD `Article`, `BreadcrumbList` и `FAQPage`.
- `headline`, description, canonical, изображения и даты согласованы между HTML и JSON-LD.
- Количество вопросов в видимом FAQ совпадает с количеством `Question` в `FAQPage`.
- Все внутренние и абсолютные ссылки отвечают без редиректа на ошибочную страницу.
- Страница проходит Schema.org Validator без ошибок; замечания, не связанные с выбранными типами, оцениваются отдельно.
- После публикации URL отправляется на повторный обход, а разметка проверяется уже на публичной версии страницы.
