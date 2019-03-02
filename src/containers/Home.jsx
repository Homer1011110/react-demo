import React, { Component } from 'react'
import {
    Route,
    Link,
    NavLink,
    Redirect,
    Switch,
} from 'react-router-dom'
import ThemeContext from '../context/theme'

export default const Home = () => (
    <ThemeContext.Consumer>
    {({ theme: { backgroundColor, textColor } }) => (
        <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            Home Page
        </div>
    )}
    </ThemeContext.Consumer>
)