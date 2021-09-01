import { useContext } from 'react';
import { Input } from '@material-ui/core';
import Styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import CountryContext from '../Context/CountryContext'





const SearchButton = () => {
    const globalState = useContext(CountryContext)
    let timeoutID = 0;
    const debounceSearch = (value) => {

        if (value === "") {
            return;
        }
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            onSearch(value);
        }, 300);
    }
    const onSearch = (value) => {
        let url = `name/${value}`
        globalState.showGrid(url)
    }
    return (
        <StyledSpan>
            <SearchIcon />   <SearchBtn onChange={(e) => debounceSearch(e.target.value)} placeholder="Search Country" />
        </StyledSpan>

    )
}
export default SearchButton


const SearchBtn = Styled(Input)`

& input[type=text] {
color: ${({ theme }) => theme.text};
text-indent:1rem;
font-size:2rem;
flex-wrap:wrap;
`

const StyledSpan = Styled.span`
display:flex;

align-items:center;
`
