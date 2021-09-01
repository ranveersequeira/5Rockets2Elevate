
import React, { useContext, useState } from 'react'
import Select from 'react-select'
import styled from '@emotion/styled'
import CountryContext from '../Context/CountryContext';

const options = [

    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
];


const ReactSelect = ({onSelect}) => {
    const [select, setSelect] = useState('')
    const globalState = useContext(CountryContext)
    const handleSelect = (select) => {
        setSelect(select)
        console.log(select)
        let urlForRegion = `region/${select.value}`
        console.log(urlForRegion)
        globalState.showGrid(urlForRegion)
    }
    return (
        <span>
            <StyledSelect
                // theme={customTheme}
                value={select}
                onChange={handleSelect}
                options={options}
                placeholder="Region"
            />
        </span>
    )
}

export default ReactSelect

const StyledSelect = styled(Select)`
text-indent:1rem;
font-size:2rem;
margin:1rem;
height:100%;
width:8em;
color: darkblue;

    &:hover {
        color: darkcyan;
}

`
