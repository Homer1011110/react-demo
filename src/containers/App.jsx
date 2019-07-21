import _ from 'lodash'
import React, { Component, Suspense } from 'react'
import { util } from '../lib'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect,
    Switch,
} from 'react-router-dom'
import ThemeContext, { themes } from '../context/theme'
const HomePage = React.lazy(() => import(/* webpackChunkName: "homepage" */ '../pages/home'))
const SearchPage = React.lazy(() =>  import(/* webpackChunkName: "detailpage" */ '../pages/search'))
const DetailPage = React.lazy(() =>  import(/* webpackChunkName: "detailpage" */ '../pages/detail'))
const NotFoundPage = React.lazy(() =>  import(/* webpackChunkName: "detailpage" */ '../pages/404'))

class App extends Component {
    state = {
        theme: themes.light,
    }

    toggleTheme(theme) {
        this.setState({
            theme: themes[theme]
        })
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    themes,
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                }}
            >
                <Router>
                    <Suspense
                        fallback={<div>loading...</div>}
                    >
                        <Switch>
                            <Route exact path="/" component={HomePage}></Route>
                            <Route path="/search" component={SearchPage}></Route>
                            <Route path="/detail" component={DetailPage}></Route>
                            <Route
                                component={NotFoundPage}
                            ></Route>
                        </Switch>
                    </Suspense>

                    {/* <div>
                        <ul>
                            <li><NavLink to="/" activeClassName='hurray'>Home</NavLink></li>
                            <li><NavLink to="/about" activeClassName='hurray'>About</NavLink></li>
                            <li><Link to="/topics">Topics</Link></li>
                            <li><Link to="/wrong">test</Link></li>
                            <li><Redirect to="/wrong">redirect</Redirect></li>
                        </ul>
                    </div> */}
                </Router>
            </ThemeContext.Provider>
        )
    }
}

export default App