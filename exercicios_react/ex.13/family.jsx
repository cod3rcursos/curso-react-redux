import React from 'react'

export default props => (
    <div>
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) }
    </div>
)