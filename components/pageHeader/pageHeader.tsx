import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type PageHeaderProps = {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

const SITE_URL = "https://arboniashop.ru";
const DEFAULT_IMAGE = `${SITE_URL}/images/logo.png`;
const DEFAULT_DESCRIPTION =
  "ArboniaShop: магазин трубчатых радиаторов Arbonia. Официальная гарантия 10 лет. Большой выбор моделей в наличии. Изготовление радиаторов Arbonia под заказ. Быстрая доставка в любой город России. Помощь в подборе и расчете радиаторов отопления. Работаем как с физическими, так и с юридическими лицами.";

const normalizePath = (path: string) => {
  const pathWithoutHash = path.split("#")[0];
  const pathWithoutQuery = pathWithoutHash.split("?")[0];
  if (pathWithoutQuery.length > 1 && pathWithoutQuery.endsWith("/")) {
    return pathWithoutQuery.slice(0, -1);
  }
  return pathWithoutQuery || "/";
};

const toAbsoluteUrl = (url?: string) => {
  if (!url) return DEFAULT_IMAGE;
  if (/^https?:\/\//.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const router = useRouter();
  const description = props.description || DEFAULT_DESCRIPTION;
  const normalizedPath = normalizePath(router.asPath || "/");
  const pageUrl = `${SITE_URL}${normalizedPath}`;
  const imageUrl = toAbsoluteUrl(props.image);
  const robotsContent = props.noindex
    ? "noindex,nofollow,max-image-preview:large"
    : "index,follow,max-image-preview:large";

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <meta property="og:type" content={props.type || "website"} />
      <meta property="og:site_name" content="ArboniaShop" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default PageHeader;
