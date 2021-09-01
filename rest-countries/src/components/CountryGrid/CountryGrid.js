import React,{useContext} from 'react'
import CountryContext from '../Context/CountryContext'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'


const CountryGrid =  () => {
    const globalState = useContext(CountryContext)

    return (
        <StyledWrapper>
        {Object.entries(globalState.countries).map((el , idx) => {
            return(
                <StyledCard  to={`/${el[1].alpha3Code}`} key={idx} >
                    <img src={el[1].flag} alt="countries"/>
                <StyledText>
                <h2>{el[1].name}</h2>
                <p>Population: {el[1].population}</p>
                <p>Region: {el[1].region}</p>
                <p>Capital: {el[1].capital}</p>
                </StyledText>
            </StyledCard>
            )
        })}
        </StyledWrapper>
    )
}

export default CountryGrid


const StyledWrapper = Styled.div`
/* padding: 20px 100px; */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-column-gap:3rem;
`

const StyledCard = Styled(Link)`
text-decoration:none;
margin-bottom: 2rem;
border-radius: 1rem;
background-color: ${({theme}) => theme.elements};
color: ${({theme}) => theme.text};
box-shadow: 0px 1px 6px gray;

& img {
    width: 100%;
height: 50%;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
}

&:hover {
transform: scale(1.1);
}
`

const StyledText = Styled.div`
text-decoration:none;
margin-left:10%;

`
