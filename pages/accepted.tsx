import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import PageHeader from '../components/pageHeader/pageHeader';

import * as styles from '../styles/styles';
import global from '../variables/global';



type PageAcceptedProps = {};

const PageAccepted: NextPage<PageAcceptedProps> = () => {

    return (
        <Box sx={ { ...global.pagePadding } }>
            <PageHeader title={ "Запрос на радиаторы Arbonia принят" } />
            <Typography variant="h4" component="h1" gutterBottom >
                Запрос был получен
            </Typography>
            <Box marginTop="100px" marginBottom="100px" sx={ { maxWidth: "500px", marginX: "auto" } }>

                <Typography sx={ { ...styles.standardText } } textAlign="center">
                    Спасибо за ваш запрос.<br />Мы свяжемся с вами в ближашие рабочие часы.
                </Typography>
            </Box>
        </Box >
    );

};


export default PageAccepted;

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    };
}