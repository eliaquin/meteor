import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: 1,
    name: "Anny",
    score: 99
},{
    _id: 2,
    name: "Elianny",
    score: -1
},{
    _id: 3,
    name: "Eliaquín",
    score: -12
},];

const renderPlayers = function(players){
    return players.map(function(x){
        return <p key={x._id}>{x.name} tiene {x.score} punto(s).</p>
    });    
}

Meteor.startup(function () {
    let nombre = "Eliaquin";
    let jsx = ( 
        <div>
             <p> Esto viene de main.js.Saludos para {nombre} </p>
             {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
});