import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';
import Player from './../imports/ui/Player';

Meteor.startup(() => {
        Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "Score Keep"
        ReactDOM.render(<App title={title} players={players}/>, document.getElementById("app"));
    });
});