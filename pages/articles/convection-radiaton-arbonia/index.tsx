import React from 'react';
import { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import PageTitle from '../../../components/pageTitle/pageTitle';
import PageHeader from '../../../components/pageHeader/pageHeader';
import Hero from '../../../components/hero/hero';

import * as styles from '../../../styles/styles';
import global from '../../../variables/global';




type ArticlePageProps = {};

const ArticlePage: NextPage<ArticlePageProps> = () => {


    return (
        <Box>
            <PageHeader
                title={ "Что такое конвекция и тепловое излучение радиатора" }
                description={ "Трубчатые радиаторы Arbonia передают тепло как с помощью теплового излучеия, так и с помощью конвекции.  Какой вид передачи тепла эффективнее. Какие у каждого есть преимущества и недосткти? Разбираем в этой статье." }
            />
            <PageTitle
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" },
                    { title: "Что такое конвекция и тепловое излучение радиатора", link: "/articles/convection-radiaton-arbonia" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/slide.jpeg" }
                header={ "Что такое конвекция и тепловое излучение радиатора" }
            />
            <Box sx={ { ...global.pagePadding, maxWidth: "900px", margin: "auto" } }>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Все радиаторы отопления, без исключения, обогревают помещение за счет двух физических явлений: конвекция воздуха и тепловое (инфракрасное) излучение. Разные конструкции и модели радиаторов обладают разным соотношением доли тепла, передаваемой тем или иным способом: от 50/50 для абсолютно плоских радиаторов, состоящих из одной панели, до 90% и более конвекции для мощных конвекторов.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Разберем, от чего зависит мощность радиатора, передаваемая тем или иным путем и в чем их различие с точки зрения эффективности и комфорта. Ведь более мощный радиатор - это и менее комфортный для жизни радиатор. Достаточно сравнить показатели и стоимость недорогих и практичных панельных радиаторов с премиальными трубчатыми радиаторами Arbonia.
                </Typography>
                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Конвекция
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Передача тепла через теплый воздух - это основной вид передачи для всех радиаторов отопления. Обогрев помещения осуществляется в несколько шагов:
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ol >
                        <li >Радиатор нагревает соприкасающийся с ним воздух</li>
                        <li>Нагретый воздух поднимается вверх, освобождая место у поверхности радиатора</li>
                        <li>Теплый воздух, заполняя помещение сверху вниз, передает тепло уже всему, что там находится: стены, мебель, люди и т.д.</li>
                    </ol>
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Мощность радиатора, передаваемая через конвекцию, зависит от двух факторов
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ul >
                        <li>Площадь радиатора: чем большая площадь соприкосновения горячих частей радиатора с воздухом, тем большее количество тепла он передает</li>
                        <li>Скорость движения воздуха: чем быстрее нагретый воздух освобождает место для более холодного и потому более эффективно поглощающим тепло, тем больше тепла может передать радиатор.</li>
                    </ul>
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Для того, чтобы добиться большей площади соприкосновения радиатора с воздухом, инженеры делают радиатор “проветриваемым”, давая возможность воздуху свободно проходить сквозь него и размещая внутри отопительного прибора как можно больше пластин (абсолютно тот же принцип, что и на автомобильных радиаторах охлаждения). Достаточно взглянуть на внутреннюю часть панельных, алюминиевых радиаторов, а также конвекторов, чтобы понять, о чем идет речь.
                </Typography>
                <Box textAlign={ "center" }>
                    <Image
                        src="/images/articles/20230110_1.jpg"
                        alt="Панельный и алюминиевый радиаторы"
                        width={ 800 }
                        height={ 400 }
                    />
                </Box>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Добавленные пластины выполняют также функцию ускорения потока воздуха: закрытые вертикальные каналы создают тягу. Нагретый воздух не распыляется, но движется строго вертикально, нагреваясь и ускоряясь, подтягивая снизу новую порцию холодного воздуха. Если это конвектор с принудительной конвекцией (внутрипольный или настенный), то его мощность уже на порядок больше, чем у точно таких же конвекторов, но с естественной конвекцией.
                </Typography>
                <Typography marginTop="40px" variant="h6" component={ "h3" }>
                    Преимущества и недостатки конвекторов
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Какие преимущества имеют отопительные приборы, делающие ставку на конвекцию:
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ul >
                        <li >Цена. В большинстве случаев, это радиаторы из бюджетного сегмента: батареи с такой конструкцией относительно просто изготавливать и они имеют лучшее соотношение цены к тепловой мощности.
                        </li>
                        <li>Эффективность с точки зрения отдачи тепла: конвекторы очень эффективно передают тепло от теплоносителя в окружающую среду. Это не одно и то же, что передача тепла туда, где оно требуется. Об этом ниже.
                        </li>
                        <li>Вытекающие из эффективности небольшие габариты. Конвекторы позволяют разместить достаточно большую мощность внутри компактного небольшого прибора. Место для такого радиатора найти проще.
                        </li>
                    </ul>
                </Typography>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Почему же конвекторы не являются единственным типом отопительных приборов  и их основная сфера применения - это жилье эконом / комфорт - класса? Для этого есть ряд причин, вытекающих из преимуществ конвекторов, а потому неустранимых принципиально.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ul>
                        <li>Скорость нагрева. Передача тепла через воздух не является эффективной. Да, конвекторы эффективно передают тепло в окружающий воздух, но сам воздух является плохим передатчиком тепла: проходит много времени, прежде чем теплый воздух заполнит объем под потолком и опустится до пола. Любое проветривание помещение может удалить теплый воздух и процесс начнется заново.
                        </li>
                        <li>Равномерность нагрева. Чем больше помещение, тем менее равномерно оно будет прогреваться: какие-то участки будут находиться по ходу движения потока воздуха, а какие-то могут оказаться в стороне. Как этот недостаток, так и предыдущий, проявляются тем больше, чем большую площадь и высоту потолков имеет помещение (еще одна причина, почему конвекторы - это, в первую очередь, эконом-сегмент).
                        </li>
                        <li>Гигиеничность. Создание внутри радиатора закрытых каналов для воздуха значительно затрудняет или делает невозможным полноценную уборку его поверхностей от пыли. Те же панельные радиаторы, как правило, имеют в своей линейке “гигиенические” версии, состоящие только из плоских панелей с большим расстоянием между ними. Этот недостаток может быть ключевым, если речь идет о медицинских учреждениях или домах, где живут люди, страдающие аллергией.
                        </li>
                        <li>Разнообразие. В большинстве случаев, конвекторы имеют ограниченный набор типоразмеров, вариантов подключений и цветов. Это связано как с их невысокой стоимостью, так и с особенностями производства. Для дорогих и эксклюзивных интерьеров подобные решения могут просто не подойти.
                        </li>
                    </ul>
                </Typography>


                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Тепловое излучение
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Если при конвекции передача тепла осуществляется опосредованно, через воздух, в три этапа, то при тепловом излучении шаг только один: нагретый радиатор греет предметы вокруг себя напрямую через инфракрасное излучение. В этом простота и сила подобных приборов. Мощность теплового излучения также зависит от двух факторов:
                </Typography>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ul>
                        <li>Площадь видимой части радиатора. Речь идет не об общей площади поверхности, как было с конвекторами, а именно о “видимой” части радиатора. Внутренняя конструкция здесь не играет роли.
                        </li>
                        <li>Температура поверхности. Чем горячее радиатор, тем сильнее он излучает тепло. Материал отопительного прибора здесь не имеет значения: чугунный радиатор, стальной трубчатый или плоская алюминиевая панель.
                        </li>
                    </ul>
                </Typography>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Именно поэтому радиаторы, имеющую высокую долю теплового излучения, внешне выглядят проще. Для того, чтобы лучше понять принцип работы инфракрасного излучения, можно посмотреть на потолочные инфракрасные панели. Эти отопительные приборы, за редким исключением, используются только на коммерческих объектах большого объема, где конвекторы являются малоэффективными: складские помещения, терминалы аэропортов, спортивные спортивные сооружения и т.д. Внешне такие панели представляют из себя плоские алюминиевые листы.
                </Typography>
                <Box textAlign={ "center" }>
                    <Image
                        src="/images/articles/20230110_2.jpg"
                        alt="Трубчатые радиаторы Arbonia"
                        width={ 800 }
                        height={ 400 }
                    />
                </Box>

                <Typography marginTop="40px" variant="h6" component={ "h3" }>
                    Преимущества и недостатки инфракрасного излучения
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Какие преимущества имеют отопительные приборы, делающие ставку на конвекцию:
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ul >
                        <li >Скорость. При таком типе передачи тепла устраняется воздух в виде посредника. Радиатор сразу же передает тепло окружающим его предметам и людям.
                        </li>
                        <li>ЭЭффективность передачи. Радиатор передает тепло не воздуху, греющему потолок, но непосредственно всему, что есть в комнате. Тепло идет именно на то, что нужно. Хорошим примером этого принципа являются уличные инфракрасные обогреватели, которые создают комфортную среду без нагрева воздуха.
                        </li>
                        <li>Гигиеничность. Благодаря более простой конструкции, лишенной закрытых участков, поверхности подобных отопительных приборов легко убирать от пыли и грязи.
                        </li>
                        <li>Разнообразие. В большинстве случаев, радиаторы данного типа могут предложить большое число типоразмеров, подключений и цветов. Например, трубчатые радиаторы Arbonia могут быть высотой от 19 см до 3 метров. Число трубок в секции от 2 до 6. А также огромный выбор вариантов подключений, креплений и монтажа, цветовых решений, не говоря о возможности изготовления радиаторов угловой или радиусной формы.
                        </li>
                    </ul>
                </Typography>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Но есть здесь и недостатки:
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    <ul >
                        <li >Стоимость. Первое, что бросается в глаза - это стоимость. Трубчатые радиаторы стоят дороже стальных панельных или алюминиевых. А 2-трубчатые часто стоят дороже 3-6-трубчатых моделей аналогичной мощности, но с меньшей долей теплового излучения. Потолочные ИК-панели, несмотря на кажущуюся простоту, стоят еще дороже.  Хорошее стоит денег. Хотя, если вам нужен простой, но “работающий” вариант, то можно рассмотреть бюджетные панельные радиаторы типа 10 или 20 (то есть, состоящие из одной или двух панелей и лишенные внутренних конвекционных пластин).
                        </li>
                        <li>Габариты. Чем выше доля теплового излучения, тем большие габариты у радиатора. Соответственно, радиатор становится более заметным и для его установки становится сложнее найти место. К счастью, радиаторы Arbonia вовсе не стоит прятать, а широкий выбор размеров дает возможность найти подходящую нишу практически в любой ситуации. Добавим здесь также и то, что при тепловом излучении тепло, передаваемое от радиатора, используется более эффективно.
                        </li>
                    </ul>
                </Typography>
                <Box textAlign={ "center" }>
                    <Image
                        src="/images/articles/20230110_3.jpg"
                        alt="Потолочная инфракрасная панель"
                        width={ 800 }
                        height={ 400 }
                    />
                </Box>
                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Заключение
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    В данной статье мы кратко рассмотрели основные отличия конвекционного способа передачи тепла от инфракрасного. Первый, как правило, является более дешевым и компактным решением. Конвекция прекрасно подходит для небольших и средних помещений с потолками до 3 метров. Если оставить в стороне вопросы дизайна и гигиены, то конвекторы вроде панельных, алюминиевых или биметаллических радиаторов - это отличный вариант.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Если же вам требуется обогреть большую комнату с высокими потолками, количество пыли в воздухе имеет существенное значение, а интерьер требует решений из соответствующего сегмента, то
                    &#160;
                    <Link href="/catalog">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                            трубчатые радиаторы Arbonia
                            </Typography>
                        </a>
                    </Link>
                    &#160;
                     будут наиболее подходящим вариантом. При этом, чем более плоскую модель вы выбираете (2-трубчатый, вместо 3-трубчатого, например), тем более явно будут проступать преимущества именно трубчатых радиаторов: выше доля теплового излучения и проще уборка.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    В нашем магазине вы можете приобрести как складские модели Arbonia, так и заказать их изготовление по индивидуальным параметрам на заводе.
                </Typography>

               
            </Box>
        </Box>
    );
};

export default ArticlePage;