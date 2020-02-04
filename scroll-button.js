import React from 'react'
import PropTypes from 'prop-types'

const ScrollButton = props => {
    return <div className="scroll-button" onClick={props.click}>
        {props.side ? ">" : "<"}
    </div>
}

ScrollButton.protoType = {
    side: PropTypes.bool,
    click: PropTypes.func,
}

export default ScrollButton