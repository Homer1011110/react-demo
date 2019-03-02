import React from 'react'

export const themes = {
    light: {
        backgroundColor: '#fff',
        textColor: '#000',
    },
    dark: {
        backgroundColor: '#222',
        textColor: '#fff',
    },
}

export const context = React.createContext(themes.light)

export default context