import React, { useEffect, useState } from 'react'
import Styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './Styles/GlobalStyle';
import DashBoard from './components/DashBoard/DashBoard'
import { useDarkMode } from './Styles/useDarkMode';
import ToggleButton from './components/Button/ToggleButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CountryContext from './components/Context/CountryContext';
import config from './config/config'
import EachCountry from './components/CountryDetails/EachCountry';



const App = () => {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const showGrid = async (url) => {
        try {
            await fetch(`${config.endpoint}/${url}`)
                .then(res => res.json())
                .then(result => {
                    // console.log(result)
                    setCountries(result);
                })
        } catch (err) {
            console.log('Error while showing grid,Check app.js ', err)
        }
    }
    // Global State
    const [countries, setCountries] = useState(() => showGrid('all'));


    useEffect(() => {
    }, [countries])

    const globalState = {
        countries: countries,
        setCountries: setCountries,
        showGrid: showGrid,
    }

    return (
        <ThemeProvider theme={themeMode}>
            <CountryContext.Provider value={globalState}>
                <Router>
                    <GlobalStyle />
                    <StyledNav className="country-el">
                        <StyledLink to={`/`} > <h1>Where is The World?</h1> </StyledLink>
                        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
                    </StyledNav>
                    <Switch>
                        <Route path="/" exact >
                            <DashBoard />
                        </Route>
                        <Route path="/:id" >
                            <EachCountry />
                        </Route>
                    </Switch>
                </Router>
            </CountryContext.Provider>
        </ThemeProvider>

    )
}

export default App;


const StyledNav = Styled.div`

display:flex;
justify-content:space-between;
align-items:center;
padding:1rem;
border:none;
width:100%;

& h1 {
    flex-wrap:wrap;
    color:${({ theme }) => theme.text}
}

`
export const StyledLink = Styled(Link)`
text-decoration:none;
color:${({ theme }) => theme.input};



`
