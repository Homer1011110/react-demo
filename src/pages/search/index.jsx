import React, { Component, useState, useReducer } from 'react'
import { withRouter } from 'react-router'
import ThemeContext from '../../context/theme'

const initialState = {
    search: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'input':
            return { search: action.payload.search }
        case 'reset':
            return { search: '' }
        default:
            throw new Error();
    }
}

const actionCreators = {
    inputSearch: (dispatch, search) => {
        dispatch({ type: 'input', payload: { search } })
    },
    resetSearch: (dispatch) => {
        dispatch({ type: 'reset' })
    },
}

const Page = ({ history, match, location }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { search } = state

    return (
        <ThemeContext.Consumer>
        {({ theme: { backgroundColor, textColor } }) => (
            <div
                style={{ backgroundColor: backgroundColor, color: textColor }}
            >
                <div className="header">
                    <span className="icon"></span>
                    <input
                        className="input"
                        type="text"
                        value={ search }
                        onChange={ (e) => actionCreators.inputSearch(dispatch, e.target.value) }
                    />
                    <button onClick={ (e) => actionCreators.resetSearch(dispatch) }>reset</button>
                </div>
                <span>Search Page</span>
                {/* <button onClick={ () => history.push('/act') }>go to act page</button> */}
            </div>
        )}
        </ThemeContext.Consumer>
    )
}

export default withRouter(Page)