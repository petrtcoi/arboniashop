export const standardText = {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    color: '#333333',
}
export const standardTextRed = {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    color: 'red',
}
export const standardTextRedLink = {
    ...standardTextRed,
    '&:hover': {
        textDecoration: 'underline'
    }
}
export const standardTextBold = {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    color: '#333333',
}
export const standardTextThin = {
    fontSize: '14px',
    fontWeight: '200',
    lineHeight: '20px',
    color: '#333333',
}
export const standartTextLink = {
    ...standardText,
    '&:hover': {
        color: 'ef7d00'
    }
}
export const standartTextThinLink = {
    ...standardTextThin,
    '&:hover': {
        color: '#ef7d00'
    }
}



export const smallText = {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14px',
    color: '#333333',
}
export const smallTextBold = {
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '14px',
    color: '#333333'
}
export const smallTextBoldRed = {
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '14px',
    color: 'ef7d00'
}
export const smallTextRed = {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14px',
    color: '#ef7d00'
}
export const smallTextRedLink = {
    ...smallTextRed,
    '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
    }
}
export const smallTextThin = {
    fontSize: '12px',
    fontWeight: '200',
    lineHeight: '14px',
    color: '#333333'
}

export const smallTextThinLink = {
    ...smallTextThin,
    '&:hover': {
        pointer: 'cursor',
        color: '#000000'
    }
}

export const smallTextGreen = {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    textDecoration: 'underline dotted',
    color: '#005005',
    cursor: 'pointer'
}

export const smallTextGreenUnderline = {
    ...smallTextGreen,
    '&:hover': {
        textDecoration: 'none'
    }
}


export const smallTextDotted = {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14px',
    color: '#333333',
    textDecoration: 'underline dotted',
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'none'
    }
}


export const largeText = {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '24px',
    color: '#333333',
}


export const textLinkBlock = {
    cursor: 'pointer',
    '&:hover': {
        color: 'red'
    }
}


export const roundSquareImage = {
    height: '200px',
    width: '200px',
    borderRadius: '100px',
    overflow: 'hidden'
}