import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

const renderPlayers = (players) => players.map((x) => (
    <p key={x._id}>
        {x.name} tiene {x.score} punto(s).
        <button onClick={()=> Players.update({_id: x._id}, {$inc: {score: -1}})}>-1</button>
        <button onClick={()=> Players.update({_id: x._id}, {$inc: {score: 1}})}>+1</button>
        <button onClick={() => Players.remove({_id: x._id})}>X</button>
    </p>
));    

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if(playerName === ''){
        e.target.playerName.value = '';
        return;
    }

    Players.insert({name: playerName, score: 0});
    e.target.playerName.value = '';
}

Meteor.startup(() => {
        let nombre = "Eliaquin";
        Tracker.autorun(() => {
            let players = Players.find().fetch();
            let jsx = ( 
            <div>
                <h1>Mi titulo</h1>
                <p> Esto viene de main.js.Saludos para {nombre} </p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById("app"));
    });
});