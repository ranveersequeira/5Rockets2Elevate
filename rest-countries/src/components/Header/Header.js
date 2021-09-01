import React from 'react'
import ReactSelect from '../Button/ReactSelect'
import SearchButton from '../Button/Search'
import Styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <StyledWrapper>
        <SearchButton  />
        <ReactSelect />
        </StyledWrapper>
    )
}

export default Header

export const EachBackHeader = () => {
    return (
        <StyledLink to={`/`}>
                <ArrowBackIcon />
            </StyledLink>
    )

}

const StyledWrapper = Styled.div`
display:flex;
justify-content:space-between;
width:100%;
margin:1rem;
flex-wrap:wrap;

`
const StyledLink = Styled(Link)`
color:${({theme}) => theme.text};

`
