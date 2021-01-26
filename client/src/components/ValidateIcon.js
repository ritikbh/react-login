import React from 'react'

function ValidateIcon(props) {
    if(props.value == true)
    return (
        <>
        <img src="/images/correct.png" width="40" height="40" />
        </>
    )
    return (
        <>
                <img src="/images/wrong.jpg" width="35" height="35"/>

        </>
    )
}

export default ValidateIcon
