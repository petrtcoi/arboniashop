import { NextComponentType } from 'next'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Hidden, IconButton, Toolbar, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import trackEvent from '../../utils/trackEvent'

import * as styles from '../../styles/styles'
import { menuButton, menuButtonDropDown } from '../../styles/stylesNavbarFooter'
import global from './../../variables/global'

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
	const myLoader = ({ src, width, quality }: { src: any; width: number; quality: number }) => {
		return `{src}?w=${width}&q=${quality || 75}`
	}

	return (
		<AppBar
			position='static'
			color='transparent'
			style={{ borderBottom: '1px solid #e5e5e5', boxShadow: 'none' }}
		>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					itemScope
					itemType='https://schema.org/SiteNavigationElement'
				>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='Меню'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page, index) => (
								<Box
									component={'span'}
									key={page[0]}
								>
									<Link href={page[1]}>
										<a
											style={{ textDecoration: 'none' }}
											href={page[1]}
											itemProp='url'
										>
											<Box component='span'>
												<MenuItem
													key={page}
													onClick={handleCloseNavMenu}
												>
													<Typography
														textAlign='center'
														variant='body1'
														sx={{ ...menuButtonDropDown }}
													>
														{page[0]}
													</Typography>
												</MenuItem>
											</Box>
										</a>
									</Link>
								</Box>
							))}
						</Menu>
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							flexWrap: 'wrap',
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page, index) => (
							<Box
								component={'span'}
								key={page[0]}
							>
								<Link href={page[1]}>
									<a
										style={{ textDecoration: 'none' }}
										href={page[1]}
										itemProp='url'
									>
										<Typography
											textAlign='center'
											variant='body1'
											ml={4}
											sx={{ ...menuButton, fontSize: '12px' }}
										>
											{page[0]}
										</Typography>
									</a>
								</Link>
							</Box>
						))}
					</Box>
					<Hidden smDown>
						<Box mr={1}>
							<LocalPhoneIcon
								color='secondary'
								sx={{ fontSize: '16px', marginTop: '6px' }}
							/>
						</Box>
					</Hidden>
					<Box mr={4}>
						<Typography
							textAlign='center'
							variant='body1'
							sx={{ ...styles.standardText, minWidth: '120px' }}
						>
							<Link href={`tel:${global.phone495}`}>
								<a
									style={{ textDecoration: 'none' }}
									onClick={() => trackEvent('phone_click')}
								>
									<Typography
										sx={{ ...styles.standardTextLink }}
										component='span'
									>
										{global.phone495String}
									</Typography>
								</a>
							</Link>
							<br />
							<Link href={`tel:${global.phone812}`}>
								<a
									style={{ textDecoration: 'none' }}
									onClick={() => trackEvent('phone_click')}
								>
									<Typography
										sx={{ ...styles.standardTextLink }}
										component='span'
									>
										{global.phone812String}
									</Typography>
								</a>
							</Link>
						</Typography>
					</Box>
					<Box>
						<Link href='/'>
							<a>
								<img
									// layout="fixed"
									src='/images/logo.png'
									alt='Логотип Arbonia'
									width={102}
									height={50}
								/>
							</a>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navbar
