import { NextComponentType } from "next"
import { useState } from "react"

import Image from 'next/image'
import Link from "next/link"

import { AppBar, Box, IconButton, Toolbar, Typography, Hidden } from "@mui/material"
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import trackEvent from '../../utils/trackEvent'


import global from './../../variables/global'
import * as styles from '../../styles/styles'
import { menuButton, menuButtonDropDown } from "../../styles/stylesNavbarFooter"



const pages: string[] = global.pages




type NavbarProps = {}

const Navbar: NextComponentType<NavbarProps> = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const myLoader = ({ src, width, quality }: { src: any, width: number, quality: number }) => {
        return `{src}?w=${width}&q=${quality || 75}`
    }


    return (
        <AppBar position="static" color="transparent" style={ { borderBottom: "1px solid #e5e5e5", boxShadow: "none" } }>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none', } } }>
                        <IconButton
                            size="large"
                            aria-label="Меню"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleOpenNavMenu }
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorElNav }
                            anchorOrigin={ {
                                vertical: 'bottom',
                                horizontal: 'left',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'left',
                            } }
                            open={ Boolean(anchorElNav) }
                            onClose={ handleCloseNavMenu }
                            sx={ {
                                display: { xs: 'block', md: 'none' },
                            } }
                            itemScope
                            itemType="https://schema.org/BreadcrumbList"
                        >
                            { pages.map((page) => (
                                <Box
                                    component={ "span" }
                                    key={ page[0] }
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <Link href={ page[1] }>
                                        <Box component="span">
                                            <MenuItem key={ page } onClick={ handleCloseNavMenu } itemProp="item">
                                                <Typography
                                                    textAlign="center"
                                                    variant="body1"
                                                    sx={ menuButtonDropDown }
                                                    itemProp="name"
                                                >
                                                    { page[0] }
                                                </Typography>
                                            </MenuItem>
                                            <meta itemProp="position" content="1" />
                                        </Box>
                                    </Link>
                                </Box>
                            )) }
                        </Menu>
                    </Box>

                    <Box
                        sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }
                        itemScope
                        itemType="https://schema.org/BreadcrumbList"
                    >
                        { pages.map((page) => (
                            <Box
                                component={ "span" }
                                key={ page[0] }
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <Link href={ page[1] }>
                                    <a
                                        style={ { textDecoration: 'none' } }
                                        itemProp="item"
                                    >
                                        <Typography
                                            textAlign="center"
                                            variant="body1"
                                            ml={ 4 }
                                            sx={ menuButton }
                                            itemProp="name"
                                        >
                                            { page[0] }
                                        </Typography>
                                        <meta itemProp="position" content="1" />
                                    </a>
                                </Link>
                            </Box>

                        )) }
                    </Box>
                    <Hidden smDown>
                        <Box mr={ 1 }>
                            <LocalPhoneIcon
                                color="secondary"
                                sx={ { fontSize: "16px", marginTop: "6px" } }
                            />
                        </Box>
                    </Hidden>
                    <Box mr={ 4 } itemScope itemType="https://schema.org/Organization">
                        <Typography
                            textAlign="center"
                            variant="body1"
                            sx={ { ...styles.standardText } }
                        >
                            <Link href={ `tel:${global.phone495}` } >
                                <a
                                    style={ { textDecoration: "none" } }
                                    onClick={ () => trackEvent('phone_click') }
                                >
                                    <Typography sx={ { ...styles.standartTextLink } } component="span" itemProp="telephone">
                                        { global.phone495String }
                                    </Typography>
                                </a>
                            </Link>
                            <br />
                            <Link href={ `tel:${global.phone812}` }>
                                <a
                                    style={ { textDecoration: "none" } }
                                    onClick={ () => trackEvent('phone_click') }
                                >
                                    <Typography sx={ { ...styles.standartTextLink } } component="span" itemProp="telephone">
                                        { global.phone812String }
                                    </Typography>
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                    <Box itemScope itemType="https://schema.org/Organization">
                        <Link href="/">
                            <a >
                                <Image
                                    layout="fixed"
                                    src="/images/logo.png"
                                    alt="Arbonia Columns column radiators"
                                    width={ 130 }
                                    height={ 50 }
                                    itemProp="logo"
                                />
                            </a>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar