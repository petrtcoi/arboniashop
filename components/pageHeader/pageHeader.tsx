import React from "react";
import Head from "next/head";

type PageHeaderProps = {
  title: string;
  description?: string;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const descripton = props.description
    ? props.description
    : "ArboniaShop: магазин трубчатых радиаторов Arbonia. Официальная гарантия 10 лет. Большой выбор моделей в наличии. Изготовление радиаторов Arbonia под заказ. Быстрая доставка в любой город России. Помощь в подборе и расчете радиаторов отопления. Работаем как с физическими, так и с юридическими лицами.";

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={descripton} />
    </Head>
  );
};

export default PageHeader;
