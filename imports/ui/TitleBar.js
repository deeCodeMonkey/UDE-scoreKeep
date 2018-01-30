﻿import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {
                        this.props.subTitle ?
                            <h3 className="title-bar__subtitle">{this.props.subTitle}</h3> : undefined
                    }
                </div>
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

