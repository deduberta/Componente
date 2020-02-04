import React from 'react'
import PropTypes from 'prop-types'

const ItemContainer = props => <a href={props.link}><div
    style={{
        width: `${props.width}px`,
        height: `${props.height}px`
    }}
    className="item-container">
    <div style={{
        width: `${props.width - props.decoration}px`,
        height: `${props.height - props.decoration}px`
    }}>
        <img src={props.url} alt={`pic from ${props.url}`} />
    </div>
</div></a>

ItemContainer.propTypes = {
    url: PropTypes.string,
    link: PropTypes.string
}

export default ItemContainer

