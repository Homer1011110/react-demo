import React, { Component } from 'react'
import {
    Route,
    Link,
    NavLink,
    Redirect,
    Switch,
} from 'react-router-dom'
import { withRouter } from 'react-router'
import ThemeContext from '../../context/theme'

const Page = ({ history, match, location }) => (
    <ThemeContext.Consumer>
    {({ theme: { backgroundColor, textColor } }) => (
        <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <h1>404 Page</h1>
            <p>页面走丢了</p>
        </div>
    )}
    </ThemeContext.Consumer>
)

export default withRouter(Page)