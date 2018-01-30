import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calcPlayerPositions } from '../imports/api/players';
import App from '../imports/ui/App';

Meteor.startup(() => {
    //track db queries and rerun code when server db queries change. syncs mini mongo with mongo db
    Tracker.autorun(() => {
        let players = Players.find({}, { sort: {score: -1}}).fetch();
        let positionedPlayers = calcPlayerPositions(players);
        ReactDOM.render(<App players={positionedPlayers}/>, document.getElementById('app'));
    });

});