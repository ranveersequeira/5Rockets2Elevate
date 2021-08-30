import React from 'react'
import { SunIcon,MoonIcon } from '../../icons/MoonSun'

const ToggleButton = ({theme,toggleTheme}) => {
    return (
        <span onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </span>
    )
}

export default ToggleButton
