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
import { util } from '../lib'

const ActPage = ({ history, match, location }) => (
    <ThemeContext.Consumer>
    {({ theme: { backgroundColor, textColor } }) => (
        <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span>Activity Page</span>
            <button onClick={ () => history.push('/') }>go to home page</button>
            
        </div>
    )}
    </ThemeContext.Consumer>
)

export default withRouter(ActPage)