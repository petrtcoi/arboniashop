import { Box, Typography } from '@mui/material';

import type { NextPage } from 'next';
import PageHeader from '../components/pageHeader/pageHeader';

import * as styles from '../styles/styles';
import global from '../variables/global';



type AgreementPageProps = {};

const AgreementPage: NextPage<AgreementPageProps> = () => {

    return (
        <Box sx={ { ...global.pagePadding } }>
            <PageHeader title={ "Магазин радиаторов Arbonia. Пользовательское соглашение" } />
            <Typography variant="h3" component="h1">
                Пользовательское соглашение
            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                Настоящий документ «Пользовательское соглашение» (далее — Соглашение) представляет собой предложение ООО «Маус Лайт», размещенное на сайте www.arboniashop.ru (далее — «Сайт»), заключить договор на изложенных ниже условиях Соглашения.
            </Typography>


            <Typography variant="h5" component="h2">
                1. Общие положения
            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                1.1.Вы настоящим подтверждаете, что с момента регистрации на Сайте и в течение времени пользования Сайтом, а также персонализированными сервисами Сайта, вы являетесь Пользователем Сайта вплоть до вашего личного обращения в администрацию Сайта с требованием об отказе от любых взаимоотношений с Сайтом.
                <br />
                1.2.Использование вами Сайта любым способом и в любой форме в пределах его объявленных функциональных возможностей, включая:
                <br />
                а)просмотр размещенных на Сайте материалов;
                <br />
                б)регистрация и/или авторизация на Сайте;
                <br />
                в)размещение или отображение на Сайте любых материалов, включая но не ограничиваясь такими как: тексты, гипертекстовые ссылки, изображения, аудио и видео- файлы, сведения и/или иная информация;

                создает договор на условиях настоящего Соглашения в соответствии с положениями ст.437 и 438 Гражданского кодекса Российской Федерации.
                <br />
                1.3.Воспользовавшись любой из указанных выше возможностей по использованию Сайта вы подтверждаете, что:
                <br />
                а)ознакомились с условиями настоящего Соглашения в полном объеме до начала использования Сайта;
                <br />
                б)принимаете все условия настоящего Соглашения в полном объеме без каких-либо изъятий и ограничений с вашей стороны и обязуетесь их соблюдать или прекратить использование Сайта. Если вы не согласны с условиями настоящего Соглашения или не имеете права на заключение договора на их основе, вам следует незамедлительно прекратить любое использование Сайта;
                <br />
                в)Соглашение (в том числе любая из его частей) может быть изменено Сайтом без какого-либо специального уведомления. Новая редакция Соглашения вступает в силу с момента ее размещения на Сайте либо доведения до сведения Пользователя в иной удобной форме, если иное не предусмотрено новой редакцией Соглашения.
            </Typography>

            <Typography variant="h5" component="h2">
                2. Общие условия пользования Сайтом
            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                2.1.Сайт осуществляет продажу товара посредством веб-ресурса www.arboniashop.ru и сопутствующих сервисных служб Сайта.
                <br />2.2.Сайт осуществляет доставку товара способами, определенными в Части 3 настоящего Соглашения.
                <br />2.3.Сайт предоставляет доступ к персонализированным сервисам Сайта для получения наиболее полной информации по интересующему вас товару, создания рейтингов и мнений, участия в конкурсных программах и иных акциях, проводимых Сайтом.
                <br />
                2.4.Настоящим вы даете своё добровольное согласие на информирование вас обо всех действиях Сайта, связанных с продажей товара и/или оказанием услуг, в том числе о статусе выполнения заказа, а также об иных событиях любого характера, относящихся к сервисам Сайта.
                <br />2.5.Согласие на получение рассылки:
                Подписываясь на SMS- и email-рассылку www.arboniashop.ru  или третьих лиц, уполномоченных на рассылку от имени www.arboniashop.ru , в сети Интернет www.arboniashop.ru, я соглашаюсь получать информационную рассылку на телефон и электронный адрес, указанный мной при подписке через сервис подписки информационной рассылки на сайте www.arboniashop.ru . Я проинформирован о том, что в случае, если у меня возникнет желание отказаться от информационной рассылки  www.arboniashop.ru, мне будет необходимо написать соответствующий запрос на электронную почту sales@mouselite.ru или же сообщить о несогласии получения информационных рассылок по адресам, указанным в разделе «Контакты» данного Соглашения. Я также даю разрешение Сайту или третьим лицам, уполномоченным на рассылку от имени Сайта, собирать, хранить и обрабатывать все переданные мною в адрес Сайта персональные данные (в том числе фамилию, имя, отчество и адрес электронной почты) с целью информирования о новостях и других событиях Сайта.
                <br />2.6.Вы соглашаетесь, что Сайт не несет никакой ответственности за задержки, сбои, неверную или несвоевременную доставку, удаление или несохранность каких-либо уведомлений. При этом Сайт оставляет за собой право повторного направления любого уведомления, в случае его неполучения Вами.
                <br />2.7.Все вопросы по информационной поддержке Вы можете задать по адресу sales@mouselite.ru.
                <br />
                2.8.Вы признаёте, что сопровождающее товар описание на Сайте не претендует на исчерпывающую информативность и может содержать неточности. Вы вправе направить все замечания по неточному описанию товара Сайту по адресу sales@mouselite.ru.
                <br />
                2.9.Вы признаёте, что Сайт прилагает достаточные усилия, чтобы внешний вид, упаковка и характеристики товаров соответствовали описаниям, приведенным в каталоге Сайта. Одновременно Сайт доводит до вашего сведения, что фактические внешний вид, упаковка и характеристики товара могут отличаться от этих описаний в случае ассортиментного товара, а также в случае внесения изменений в товар непосредственно производителем.
                <br />2.10.Вы проинформированы, что цена и наличие товара на Сайте изменяется на круглосуточно без предварительного уведомления об этом и указываются в индивидуальном статусе и подробной карточке товара, отображаемым в каталоге на Сайте.


            </Typography>

            <Typography variant="h5" component="h2">
                3. Обязательства Пользователя при использовании Сайта

            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                <br />3.1.Вы соглашаетесь не использовать сервисы Сайта с целью:
                <br />3.1.1.загрузки контента, который является незаконным, нарушает любые права третьих лиц; пропагандирует насилие, жестокость, ненависть и/или дискриминацию по расовому, национальному, половому, религиозному, социальному признакам; содержит недостоверные сведения и/или оскорбления в адрес конкретных лиц, организаций, органов власти;
                <br />3.1.2.побуждения к совершению противоправных действий, а также содействия лицам, действия которых направлены на нарушение ограничений и запретов, действующих на территории РФ;
                <br />3.1.3.нарушения прав несовершеннолетних лиц и/или причинение им вреда в любой форме;
                <br />3.1.4.ущемления прав меньшинств;
                <br />3.1.5.выдачи себя за другого человека или представителя организации и/или сообщества без достаточных на то прав, в том числе за сотрудников Сайта;
                <br />3.1.6.введения в заблуждение относительно свойств и характеристик каких-либо товаров из каталога на Сайте; некорректного сравнения товаров, а также формирования негативного отношения к лицам, (не) пользующимся определенными товарами, или осуждения таких лиц;
                <br />3.1.7.загрузки контента, который вы не имеете права делать доступным по законодательству РФ или согласно каким-либо контрактным отношениям;
                <br />3.1.8.загрузки контента, который затрагивает и/или содержит какой-либо патент, торговый знак, коммерческую тайну, фирменное наименование, авторские и смежные с ними права, а равно прочие права на результаты интеллектуальной деятельности, принадлежащие или правомерно используемые третьими лицами;
                <br />3.1.9.загрузки не разрешенной специальным образом рекламной информации и/или спама;
                <br />3.1.10.сбора и обработки персональных данных, информации о частной жизни любых лиц;
                <br />3.1.11.нарушения нормальной работы Сайта;
                <br />3.1.12.нарушения российских или международных норм права.
                <br />3.2.Вы соглашаетесь не использовать на Сайте бранных слов, непристойных и оскорбительных образов, сравнений и выражений, в том числе в отношении пола, расы, национальности, профессии, социальной категории, возраста, языка человека и гражданина, а также в отношении организаций, органов власти, официальных государственных символов (флагов, гербов, гимнов), религиозных символов, объектов культурного наследия (памятников истории и культуры).
                <br />3.3.Вы признаете и соглашаетесь, что Сайт имеет право (но не обязанность) по своему усмотрению отказать в размещении и/или удалить любой контент, доступный через сервисы Сайта.


            </Typography>

            <Typography variant="h5" component="h2">
                4. Политика конфиденциальности
            </Typography>

            <Typography sx={ { ...styles.standardText } }>

                <br />4.1.Условия Политики конфиденциальности и отношения между вами и Сайтом, связанные с обработкой персональных данных, регулируются Федеральным Законом РФ №152-ФЗ от 27 июля 2006г. «О персональных данных».
                <br />4.2.Политика конфиденциальности действует в отношении персональных данных, которые Сайт получил или может получить от вас при регистрации и/или оформлении заказа на Сайте, и необходимые для выполнения обязательств со стороны Сайта в отношении приобретаемого вами товара/услуги и/или вашего доступа к сервисам Сайта.

                <br />4.3.Политика конфиденциальности доступна по ссылке – www.arboniashop.ru/privacy.
            </Typography>

            <Typography variant="h5" component="h2">
                5. Условия приобретения и доставки товара
            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                5.1.Вы можете приобрести товар на Сайте, оплатив его следующими способами: наличными, кредитной картой, электронными деньгами, с лицевого счёта мобильного телефона, банковским переводом по квитанции, подарочным сертификатом.
                <br />
                5.2.Настоящим вы соглашаетесь, что выбранный вами способ оплаты не подлежит изменению с момента оформления заказа на Сайте.
                <br />5.3.Настоящим вы соглашаетесь, что подтверждение заказа, оплаченного электронными деньгами, кредитной картой, с личного счета мобильного телефона, банковским переводом, происходит только после подтверждения списания денежных средств в счёт оплаты заказа.
                <br />5.4.Вы подтверждаете, что оплата заказа электронными деньгами, кредитной картой, с личного счета мобильного телефона должна быть произведена в течение 5 календарных дней с момента его оформления на Сайте. Вы соглашаетесь, что в случае неоплаты заказа по истечении указанного срока, заказ может быть аннулирован.

                <br />5.5.Сайт осуществляет доставку товара следующими способами: служба доставки Сайта (курьерская доставка или доставка в пункт самовывоза),  доставка службами Деловые Линии, Возовоз и Почты России. Вы вправе выбрать любой удобный для вас способ доставки в соответствии с условиями доставки в свой регион/страну или исходя из своих предпочтений.
                <br />5.6.Вы соглашаетесь, что в случае невозможности передачи вам товара по вашей вине, в том числе нарушения вами срока, в течение которого вы обязаны забрать товар, будет расцениваться Сайтом как ваш отказ от товара. При этом товар возвращается Сайту, а заказ считается аннулированным.
                <br />5.7.В случае вашего отказа от товара, а также в случае отсутствия заказанного вами товара, перечисленная Сайту предоплата за товар, за исключением расходов Сайта на доставку товара, будет возвращена вам не позднее чем через 10 календарных дней с даты предъявления.
                <br />5.8.Все вопросы, связанные со сроками и условиями доставки товара, вы можете направить в Сайту по адресу — sales@mouselite.ru.
            </Typography>

            <Typography variant="h5" component="h2">
                6.Ответственность
            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                <br />6.1Сервисы Сайта могут содержать ссылки на другие ресурсы. Вы признаете и соглашаетесь с тем, что Сайт не несет никакой ответственности за доступность этих ресурсов и за их контент, а также за любые последствия, связанные с использованием вами контента этих ресурсов.
                <br />6.2.Вы также соглашаетесь с тем, что Сайт не несёт никакой ответственности за ваши персональные данные, которые вы предоставляете сторонним ресурсам и/или иным третьим лицам в случае перехода на них с Сайта.
                <br />6.3.Вы подтверждаете, что Сайт не отвечает за возможную потерю и/или порчу данных, которая может произойти из-за нарушения вами положений настоящего Соглашения, а также неправильного доступа и/или использования персонализированных сервисов Сайта.

                <br />6.4.Ответственность за действия несовершеннолетних, включая приобретение ими товаров из каталога на Сайте, лежит на законных представителях несовершеннолетних.

                <br />6.5.Вы соглашаетесь, что в случае неисполнения и/или ненадлежащего исполнения Сайтом обязательств по продаже и/или доставке вам товара в связи с предоставлением вами недостоверных и/или недействительных данных о себе, а равно невыполнение вами условий настоящего Соглашения, Сайт ответственности не несет.
            </Typography>

            <Typography variant="h5" component="h2">
                7. Реквизиты Сайта
            </Typography>

            <Typography sx={ { ...styles.standardText } }>
                ООО «Маус Лайт»
                <br />
                www.mouselite.ru
                <br />
                Юр. адрес: 190005, Санкт-Петербург, наб. Обводного канала, 118АХ, офис 438,
                <br />
                Факт. адрес: 190005, Санкт-Петербург, наб. Обводного канала, 118АХ, офис 438,
                <br />
                ИНН 7841&zwj;407862, КПП 783901001
                <br />
                ОГРН 1097847137630
                <br />
                р/с 40702810432320000128
                <br />
                в Филиал «САНКТ-ПЕТЕРБУРГСКИЙ» ОАО «АЛЬФА-БАНК» г Санкт-Петербург
                <br />
                БИК 044030786
                <br />
                Электронный адрес для обращений: sales@mouselite.ru
                <br /><br />


                Дата публикации – 31.01.2022
            </Typography>

        </Box>
    );

};


export default AgreementPage;

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    };
}