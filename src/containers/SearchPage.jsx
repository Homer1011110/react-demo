import React, { Component } from 'react'
import {
    Route,
    Link,
    NavLink,
    Redirect,
    Switch,
} from 'react-router-dom'
import { withRouter } from 'react-router'
import ThemeContext from '../context/theme'

const Page = ({ history, match, location }) => (
    <ThemeContext.Consumer>
    {({ theme: { backgroundColor, textColor } }) => (
        <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span>User Page</span>
            <button onClick={ () => history.push('/act') }>go to act page</button>
        </div>
    )}
    </ThemeContext.Consumer>
)

export default withRouter(Page)