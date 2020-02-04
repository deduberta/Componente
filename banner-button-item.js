import React from 'react'
import PropTypes from 'prop-types'

const ButtonBannerItem = props =>
    <a href={props.link}>
        <div
            className={'banner-button ' + `${props.position.toLowerCase()}`}
            style={{width: `${props.width}px`, height: `${props.height}px`}}>
            {props.children}
        </div>
    </a>


ButtonBannerItem.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    position: PropTypes.string,
    caption: PropTypes.string,
    link: PropTypes.string
}

ButtonBannerItem.defaultProps = {
    width: 300,
    height:300
}

export default BannerButton