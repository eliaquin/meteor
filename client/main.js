import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (players) => players.map((x) => (
    <p key={x._id}>
        {x.name} tiene {x.score} punto(s).
        <button onClick={()=> Players.update({_id: x._id}, {$inc: {score: -1}})}>-1</button>
        <button onClick={()=> Players.update({_id: x._id}, {$inc: {score: 1}})}>+1</button>
        <button onClick={() => Players.remove({_id: x._id})}>X</button>
    </p>
));    

Meteor.startup(() => {
        let nombre = "Eliaquin";
        Tracker.autorun(() => {
            let players = Players.find().fetch();
            let jsx = ( 
            <div>
                <TitleBar title="Score Keep"/>
                <p> Esto viene de main.js.Saludos para {nombre} </p>
                {renderPlayers(players)}
                <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById("app"));
    });
});