import { GetServerSideProps } from "next";
import React from "react";

import getColorsData from "../api_utils/getColorsData";
import getConnectionsData from "../api_utils/getConnectionsData";
import getModelsData from "../api_utils/getModelsData";
import calcRadiatorCost from "../utils/calcRadiatorCost";
import getRadiatorData from "../utils/getRadiatorData";

import { ColorOrigin } from "../models/colorOrigin.model";
import { ConnectionOrigin } from "../models/connectionOrigin.model";
import { ModelOrigin } from "../models/modelOrigin.model";

import global from "../variables/global";
import axios from "axios";
import { DISCOUNT, GET_RATE_URL } from "../variables/currency";

const BASE_URL = "https://arboniashop.ru";

const YandexFeed: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const data = await axios.get(`${GET_RATE_URL}/ARBONIASHOP`);
  if (data.status !== 200 || data.data.rate <= 0) return { props: {} };
  const rateEuro = data.data.rate * DISCOUNT;

  if (res) {
    res.setHeader("Content-Type", "text/xml");

    const models: ModelOrigin[] = await getModelsData();
    const colors: ColorOrigin[] = await getColorsData();
    const connections: ConnectionOrigin[] = await getConnectionsData();

    const today = new Date(Date.now());
    const month =
      today.getMonth() + 1 > 9
        ? today.getMonth() + 1
        : `0${today.getMonth() + 1}`;
    const day = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
    const hour =
      today.getHours() > 9 ? today.getHours() : `0${today.getHours()}`;
    const minutes =
      today.getMinutes() > 9 ? today.getMinutes() : `0${today.getMinutes()}`;

    let content = `<?xml version="1.0" encoding="UTF-8"?>`;
    content += `<yml_catalog date="${today.getFullYear()}-${month}-${day} ${hour}:${minutes}">`;
    content += `<shop>`;
    content += `<name>ArboniaShop</name>`;
    content += `<company>ООО ХОУМ КОМФОРТ</company>`;
    content += `<url>https://arboniashop.ru</url>`;
    content += `<categories><category id="1">Трубчатые радиаторы Arbonia Column</category></categories>`;
    content += `<offers>`;

    models
      .filter((model) => model.inStockSections)
      .forEach((model) =>
        model.inStockSections
          ? model?.inStockSections.split(",").map((sectionQnty) => {
              const color =
                colors.find((x) => x.id === model.color) || colors[0];
              const connection =
                connections.find((x) => x.id === model.connection) ||
                connections[0];

              const path = `${BASE_URL}/models/${model.id}/${sectionQnty}`;
              const title = `Радиатор Arbonia ${model.nameShort}, ${color.nameShort}, ${connection.nameShort}, ${sectionQnty} секций`;
              const offerId = `${model.id}-${color.id}-${connection.id}-${sectionQnty}`;
              const { price } = calcRadiatorCost({
                model,
                color,
                connection,
                sectionQnty: +sectionQnty,
                currencyRate: rateEuro,
              });
              const imagePrimaryPath =
                BASE_URL + global.imagesModelPath + model.imagePrimary;
              const { lengthString, dt50String, dt60String } = getRadiatorData({
                model,
                color,
                connection,
                sectionQnty: +sectionQnty,
                price: price.noConsole,
              });
              const colorGen =
                color.id === "9016"
                  ? "Белый"
                  : color.id === "7016"
                  ? "Серый"
                  : "Антрацит металлик";

              content += `<offer id="${offerId}">`;

              content += `<vendor>Arbonia</vendor>`;
              content += `<currencyId>RUB</currencyId>`;
              content += `<categoryId>1</categoryId>`;
              content += `<delivery>true</delivery>`;

              content += `<name>${title}</name>`;
              content += `<url>${path}</url>`;
              content += `<price>${price.noConsole}</price>`;
              content += `<picture>${imagePrimaryPath}</picture>`;
              content += `<description><![CDATA[<p>${model.description}</p>]]></description>`;

              content += `<param name="Цвет">${color.name}</param>`;
              content += `<param name="Цвет">${colorGen}</param>`;
              content += `<param name="Подключение">${connection.name}</param>`;
              content += `<param name="Число секций">${sectionQnty}</param>`;
              content += `<param name="Максимальное рабочее давление" unit="бар">10</param>`;
              content += `<param name="Высота" unit="мм">${model.height}</param>`;
              content += `<param name="Глбина" unit="мм">${model.width}</param>`;
              content += `<param name="Длина" unit="мм">${lengthString}</param>`;
              content += `<param name="Мощность (75/65/20)" unit="Вт">${dt50String}</param>`;
              content += `<param name="Мощность (90/70/20)" unit="Вт">${dt60String}</param>`;

              content += `</offer>`;
            })
          : null
      );

    content += `</offers></shop></yml_catalog>`;

    res.write(content);
    res.end();
  }
  return {
    props: {},
  };
};

export default YandexFeed;
