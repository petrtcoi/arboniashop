import type { Breakpoint, SxProps, Theme } from '@mui/material'
import React from 'react'

/**
 * Замена Hidden из MUI ≤ 6 (удалён в MUI 7+). Без обёртки: добавляет дочерним
 * MUI-элементам CSS-правило display: none на нужных ширинах, поэтому разметка
 * (в том числе ячейки таблиц) и серверный HTML не меняются.
 */
type HiddenProps = {
	children: React.ReactNode
	smDown?: boolean
	mdDown?: boolean
	mdUp?: boolean
}

const Hidden: React.FC<HiddenProps> = ({ children, smDown, mdDown, mdUp }) => {
	const rules: SxProps<Theme>[] = []
	const hide = (query: (theme: Theme) => string) => rules.push((theme: Theme) => ({ [query(theme)]: { display: 'none' } }))
	const down = (bp: Breakpoint) => (theme: Theme) => theme.breakpoints.down(bp)
	const up = (bp: Breakpoint) => (theme: Theme) => theme.breakpoints.up(bp)
	if (smDown) hide(down('sm'))
	if (mdDown) hide(down('md'))
	if (mdUp) hide(up('md'))

	return (
		<>
			{React.Children.map(children, child => {
				if (!React.isValidElement<{ sx?: SxProps<Theme> }>(child)) return child
				const own = child.props.sx
				const ownList = own === undefined ? [] : Array.isArray(own) ? own : [own]
				return React.cloneElement(child, { sx: [...ownList, ...rules] as SxProps<Theme> })
			})}
		</>
	)
}

export default Hidden
