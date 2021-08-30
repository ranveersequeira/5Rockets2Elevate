import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`


    body {
        background: ${({ theme}) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Nunito Sans', sans-serif;
        transition: all 0.50s linear;

    }
    p {
        line-height: 1.4rem;
    }

    .country-el {
        background: ${({ theme }) => theme.elements};


    }

`;




export const lightTheme = {
        elements:"#ffffff",
        text:"#111517",
        background:"#fafafa",
        input:'#858585'
}

export const darkTheme = {
        elements:"#2b3945",
        background:"#334757",
        text:"#ffffff",
}
