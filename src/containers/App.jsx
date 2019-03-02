import _ from 'lodash'
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect,
    Switch,
} from 'react-router-dom'
import ThemeContext, { themes } from '../context/theme'



class App extends Component {
    state = {
        theme: themes.light,
    }

    toggleTheme = (theme) => {
        this.setState({
            theme: themes[theme]
        })
    }

    render() {
        return (
            <ThemeContext.Provider
                value={
                    themes,
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                }
            >
                <Router>
                    <Switch>
                        T/<Route exact path="/" component={Home}></Route>
                        {/* <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                        <Route
                            component={Always}
                        ></Route> */}
                    </Switch>
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