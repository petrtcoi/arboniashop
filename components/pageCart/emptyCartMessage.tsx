import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import * as styles from '../../styles/styles'

type EmptyCartMessageProps = {}

const EmptyCartMessage: React.FC<EmptyCartMessageProps> = () => {
	return (
        <Box
            sx={{
                marginTop: '40px',
                marginBottom: '100px',
                maxWidth: '500px',
                marginX: 'auto'
            }}>
            <Typography sx={styles.standardTextBold}>Ваша коризина пуста!</Typography>
        </Box>
    );
}

export default EmptyCartMessage
