import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component{
        handleSubmit(e){
            let playerName = e.target.playerName.value;
        e.preventDefault();

        if(playerName === ''){
            e.target.playerName.value = '';
            return;
        }

        Players.insert({name: playerName, score: 0});
        e.target.playerName.value = '';
    }
    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button>Add Player</button>
                </form>
        );
    }
}