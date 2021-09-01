import React, { useState, useEffect } from 'react'
import { EachBackHeader } from '../Header/Header';
import { useParams } from 'react-router-dom'
import BorderButton from '../Button/BorderButton';
import config from '../../config/config'
import Styled from 'styled-components'
import { mediaQueries, fontSize } from '../../Styles/Theme';


// From https://www.w3resource.com/javascript-exercises/javascript-math-exercise-39.php
const thousands_separators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
};

const EachCountry = () => {

    let { id } = useParams();
    const [country, setCountry] = useState([])
    // console.log(country)

    useEffect(() => {
        const fetchCountry = async () => {
            const response = await fetch(`${config.endpoint}/alpha/${id}`);
            const countryData = await response.json()
            console.log(countryData)
            let array = new Array(countryData)
            console.log(array)
            setCountry(array);
        }
        fetchCountry()
    }, [id])

    const { languages } = country;
    console.log(languages)
    return (
        <StyledWrapper>
            <EachBackHeader />
            {country.map((c, id) => {
                return (
                    <StyledSection>
                        <div>
                            <img src={c.flag} alt={c.name} />
                        </div>
                        <div>
                            <h1>{c.name}</h1>
                            <StyledArticle>
                                <span>
                                    <p>Native Name : <span>{c.nativeName}</span></p>
                                    <p>Region : <span>{c.region}</span></p>
                                    <p>Capital : <span>{c.capital}</span></p>
                                    <p>Currencies : <span>{c.currencies.map((cur, idx) => <span key={idx}>{cur.name}</span>)}</span></p>
                                </span>
                                <span>
                                    <p>Population : <span>{thousands_separators(c.population)}</span></p>
                                    <p>Sub Region : <span>{c.subregion}</span></p>
                                    <p>Top Level Domain : <span>{c.topLevelDomain}</span></p>
                                    <p>Languages : {c.languages.map((l, idx) => <span key={idx}> {l.name}</span>)}</p>
                                </span>
                            </StyledArticle>
                            <StyledBorder>
                                <h4>Border Countries:</h4>
                                {c.borders.map((b, idx) =>
                                    <BorderButton name={b} LinkTo={b} key={idx} />
                                )}
                            </StyledBorder>
                        </div>
                    </StyledSection>
                )
            })}
        </StyledWrapper>
    )
}

export default EachCountry


const StyledWrapper = Styled.div`
margin-left:10%;
margin-top:2rem;
flex-wrap:wrap;
`
const StyledSection = Styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
grid-gap: 5rem;
margin-top: 5rem;
margin-top:2rem;
flex-wrap:wrap;
& img {
    width: 100%;
    height: 100%;
    object-fit:cover;
}

@media ${mediaQueries.mobile}{
    display:flex;
}

`

const StyledArticle = Styled.article`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap:1rem;

    & p {
        font-weight:600;
        font-size:${fontSize.detailpage}
}
    & p > span {
        font-weight:300;
}
    @media ${mediaQueries.mobile}{
        display:flex;
        flex-wrap:wrap;
}
`

const StyledBorder = Styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
`
