import { Button } from '@material-ui/core'
import React from 'react'
import {StyledLink} from '../../App'




const BorderButton = ({name,LinkTo , crossBorder}) => {

    return (
        <StyledLink to={LinkTo}>
            <Button onClick={crossBorder}>{name}</Button>
        </StyledLink>

    )
}

export default BorderButton
