import React from 'react'
import Styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from '../src/Styles/GlobalStyle';
import { useDarkMode } from '../src/Styles/useDarkMode';
import ToggleButton from '../src/components/Buttons/ToggleButton';





const App = () => {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <div>
                <GlobalStyle />
                <StyledNav className="country-el">
                    <h1>Where is The World?</h1>
                    <ToggleButton theme={theme} toggleTheme={toggleTheme} />
                </StyledNav>
            </div>

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


& h1 {
    flex-wrap:wrap;
}

`
