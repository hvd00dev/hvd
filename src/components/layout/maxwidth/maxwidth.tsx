import { Property } from 'csstype'
import React, { CSSProperties, ReactNode } from 'react'
import styles from './maxwidth.module.scss'

interface MaxWidthProps {
	children: ReactNode
	a11yTitle?: string
	dataContext?: string
	height?: string
	position?: Property.Position
	id?: string
	style?: CSSProperties
}

const MaxWidth = ({
	children,
	a11yTitle,
	dataContext,
	height = 'auto',
	id,
	position,
	style = {}
}: MaxWidthProps) => {
	return (
		<div
			className={styles.maxWidthContainer}
			aria-label={a11yTitle}
			data-context={dataContext}
			id={id}
			style={{
				height: height,
				position: position ? position : 'static',
				...style
			}}>
			{children}
		</div>
	)
}

export default MaxWidth
