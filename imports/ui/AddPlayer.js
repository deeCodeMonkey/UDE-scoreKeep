﻿import React, { Component } from 'react';

import { Players } from './../api/players';


export default class AddPlayer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if (playerName) {
            e.target.playerName.value = '';
            //insert a player at startup
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }

    render() {
        return (
            <div className="item">
                
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}