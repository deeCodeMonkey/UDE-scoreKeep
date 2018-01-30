import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {
                    this.props.subTitle ?
                        <h3>{this.props.subTitle}</h3> : undefined
                }
            </div>
            );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

//TitleBar.defaultProps = {
//    title: 'Default title'
//}

