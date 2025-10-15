import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Badge, Fab } from '@mui/material'
import Link from 'next/link'

import { ShoppingCartContext, ShoppingCartItem } from './../../contexts/shoppingCartContext'
import global from './../../variables/global'

type ShoppingCartProps = {}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
	const router = useRouter()
	const shoppingCartContext = useContext(ShoppingCartContext)

	const [itemsQnty, setItemsQnty] = useState<number>(shoppingCartContext.state.items.length)
	useEffect(() => {
		setItemsQnty(shoppingCartContext.state.items.reduce((acc: number, x) => acc + x.qnty, 0))
	}, [shoppingCartContext.state.items])

	const [shoppingCartItemsLoaded, setShoppingCartItemsLoaded] = useState<boolean>(false)
	useEffect(() => {
		const localStorageItems: ShoppingCartItem[] = JSON.parse(
			localStorage.getItem(global.localStorageShoppingCartItemsKey) || '[]'
		)
		shoppingCartContext.dispatch({
			type: 'SET_FETCHED_ITEMS',
			value: localStorageItems,
		})
		setShoppingCartItemsLoaded(true)
	}, [])
	useEffect(() => {
		if (!shoppingCartItemsLoaded) return
		localStorage.setItem(global.localStorageShoppingCartItemsKey, JSON.stringify(shoppingCartContext.state.items))
	}, [shoppingCartContext.state.items])

	if (router.asPath.includes('/order/')) return <></>
	if (itemsQnty === 0) return <></>

	return (
		<Link href='/order/cart'>
			<Fab
				color='primary'
				aria-label='Корзина покупок'
				sx={{
					position: 'fixed',
					top: 50,
					right: 16,
					zIndex: 1400,
				}}
			>
				<ShoppingBasketIcon />

				<Badge
					badgeContent={itemsQnty}
					color='primary'
					overlap='circular'
					sx={{
						position: 'fixed',
						top: 60,
						right: 30,
						'& .MuiBadge-badge': {
							fontSize: 20,
							height: 30,
							width: 30,
							borderRadius: 15,
						},
					}}
				/>
			</Fab>
		</Link>
	)
}

export default ShoppingCart
