import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {

    render() {
        
        let title = 'Score Keep';
        let subTitle = 'Created By Deidra';

        return (
            <div>
                <TitleBar title={title} subTitle={subTitle} />
                <PlayerList players={this.props.players}/>
                <AddPlayer />
              
            </div>
        );
    }
}

App.propTypes = {
    players: PropTypes.array.isRequired
}