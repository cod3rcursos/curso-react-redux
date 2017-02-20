import React from 'react'

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}