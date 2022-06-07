import type { NextPage } from 'next'
import { Box } from '@mui/material'

import PageHeader from '../components/pageHeader/pageHeader'
import PageTitle from '../components/pageTitle/pageTitle'
import MainPageCarousel from '../components/pageMain/mainPageCarousel'
import Advantages from '../components/pageMain/advantages'
import WhyMouseLite from '../components/pageMain/whyMouseLite'
import Portfolio from '../components/pageMain/portfolio'


const Home: NextPage = () => {
  return (
    <Box  >
      <PageHeader title={ "Магазин радиаторов Arbonia" } />
      <PageTitle
        header={ "Специализированный магазин Arbonia в России" }
        subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
      />

      <Box>
        <MainPageCarousel />
      </Box>
      <Box >
        <Box marginTop="50px" paddingX={ { xs: "10px", md: "20px" } }>
          <Advantages />
        </Box>
        <Box marginTop="40px" paddingY="40px" sx={ { backgroundColor: "#e6e6e6" } }>
          <Box paddingX={ { xs: "10px", md: "20px" } }>
            <WhyMouseLite />
          </Box>
        </Box>
        <Box marginTop="40px" paddingX={ { xs: "10px", md: "20px" } }>
          <Portfolio />
        </Box>
      </Box>
    </Box>


  )
}

export default Home
