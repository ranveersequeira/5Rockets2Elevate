import React from 'react'
import Header from '../Header/Header'
import Styled from 'styled-components'
import CountryGrid from '../CountryGrid/CountryGrid'

const DashBoard = () => {
    return (
        <StyledWrapper>
            <Header />
            <CountryGrid />
        </StyledWrapper>
    )
}

export default DashBoard

const StyledWrapper = Styled.div`
flex-direction:row;
width:80%;
margin-left:10%;
margin-right:10%;


`
