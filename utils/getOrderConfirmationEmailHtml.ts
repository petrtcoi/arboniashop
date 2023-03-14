import getCartTotal from "./getCartTotal";
import getGroupedConsoles from "./getGroupedConsoles";

import { CartItemExtended } from "../models/cartItemExtended.model";
import { ConsoleType } from "../models/consoleType.model";
import { OrderData } from "../models/orderData.model";


import global from './../variables/global';

type Props = OrderData & { items: CartItemExtended[], consoleType: ConsoleType; };


const getOrderConfirmationEmailHtml = (props: Props): string => {

    const { items, consoleType } = props;
    const consoles = getGroupedConsoles({ items });

    let html = '';
    html += '<h2>Ваш запрос принят</h2>';
    html += '<p>Спасибо за ваш запрос в нашем магазине';

    html += '<br/>Мы свяжемся с вами в ближайшее время для уточнения деталей и согласования заказа.</p>';

    html += '<h3>Детали заказа</h3>';
    // html += '<ul>'
    if (props.name.length > 0) html += `<span style="white-space:pre">Имя:&#9; ${props.name}</span><br>`;
    if (props.city.length > 0) html += `<span style="white-space:pre">Город:&#9; ${props.city}</span><br>`;
    if (props.address.length > 0) html += `<span style="white-space:pre">Адрес:&#9; ${props.address}</span><br>`;
    if (props.phone.length > 0) html += `<span style="white-space:pre">Тел:&#9;&#9; ${props.phone}</span><br>`;
    if (props.email.length > 0) html += `<span style="white-space:pre">Email:&#9; ${props.email}</span><br>`;
    // html += '</ul>'
    if (props.comments.length > 0) html += `<p>Комментарий к заказу:<br/>${props.comments}</p>`;

    if (items.length > 0) html += `<h3>Заказ</h3><table border="1" cellpadding="5" cellspacing="0"><thead><td>№</td><td>Наименование</td><td>Цена</td><td>Кол-во</td><td>Сумма</td></thead><tbody>`;
    items.forEach((item, index) => {
        html += `<tr><td>${index + 1}</td><td>${item.title}</td><td>${item.price.noConsoletoLocaleString()} руб.</td><td>${item.qnty}</td><td>${(item.price.noConsole * item.qnty)toLocaleString();
    } руб.< /td></tr > `;
    });

    if (consoleType === 'w161h121') {
        consoles.forEach((console) => {
            const consolePrice = Math.floor(console.totalSum / console.qnty);
            html += `< tr > <td></td><td>Кронштейн ${console.title}, ${console.colorName}</td > <td>${ consolePricetoLocaleString(); } руб.< /td><td>${console.qnty}</td > <td>${(console.totalSum)toLocaleString()} руб.</td></tr > `;
        });
    }

    if (items.length > 0) html += '</tbody></table>';

    if (items.length > 0) html += `< p > Итого: <strong>${ getCartTotal({ items, consoleType })toLocaleString(); } руб.< /strong></p > `;

    html += `< br /> <br/><hr/ > <p>С уважением, <br/>Магазин радиаторов Arbonia<br/ > <br/>сайт: ${global.website}<br/ > тел.: +7 ${ global.phone495String; } <br/>тел.: +7 ${global.phone812String}<br/ > email: ${ global.email; } </p>`;;
html += '<img src="https://mouselite.ru/arboniashop-email-logo.png" height="50px" width="auto"/>';

return html;

};

export default getOrderConfirmationEmailHtml;