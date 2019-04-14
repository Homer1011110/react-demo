import React, { Component } from 'react'
import { withRouter } from 'react-router'
import ThemeContext from '../../context/theme'

const Page = ({ backgroundColor, textColor, history, match, location }) => (
    <ThemeContext.Consumer>
    {({ theme: { backgroundColor, textColor } }) => (
        <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span>Home Page</span>
            <button onClick={ () => history.push('/search') }>go to search page</button>
        </div>
    )}
    </ThemeContext.Consumer>
)

export default withRouter(Page)