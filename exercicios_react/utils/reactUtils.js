import React from 'react'

// Adicionado no ex.14
function childrenWithProps(children, props) {
    return React.Children.map(children,
            child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }