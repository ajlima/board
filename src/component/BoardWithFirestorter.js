import React, { Component } from 'react'
import firebase from 'firebase'
import NoteWithFirestorter from './NoteWithFirestorter'
import {initFirestorter, Collection} from 'firestorter';
import {observer} from 'mobx-react';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSZraEcYOgbI2S9ilu5a1NYbWdiHu9aO8",
    authDomain: "test-dev-d6cc6.firebaseapp.com",
    databaseURL: "https://test-dev-d6cc6.firebaseio.com",
    projectId: "test-dev-d6cc6",
    storageBucket: "test-dev-d6cc6.appspot.com",
    messagingSenderId: "1059010722579"
};
firebase.initializeApp(config);

// Initialize `firestorter`
initFirestorter({firebase: firebase});

const notes = new Collection('notes')

//https://medium.com/@hrutjes/building-a-react-firestore-app-with-zero-effort-and-mobx-525df611eabf
//https://github.com/IjzerenHein/firestorter
//https://github.com/GeekyAnts/firestore-react
const BoardWithFirestorter = observer(class BoardWithFirestorter extends Component {

    render = () => {
        return (
            <React.Fragment>
                <h1>Boards</h1>
                <div className="row">
                    { 
                        notes.docs.map((item) => {
                            console.log(item)
                            return <NoteWithFirestorter key={item.id} note={item} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

})

export default BoardWithFirestorter;