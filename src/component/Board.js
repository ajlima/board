import React, { Component } from 'react'
import firebase from 'firebase'
import Note from './Note'

//https://medium.com/@hrutjes/building-a-react-firestore-app-with-zero-effort-and-mobx-525df611eabf
class Board extends Component {

    constructor(props) {
        super(props)
        this.dataProvider = firebase.firestore().collection('notes');
        this.state = {
<<<<<<< HEAD
            fetching: false,
            notes: []
=======
            notes: [
            ]
>>>>>>> 91a82c103a2955f7114d6af6f1963dc5e77b7a40
        }
    } 

    onUpdateSnapshot = (snapshot) => {
        const notes = snapshot.docs.map((docSnapshot) => ({
            id: docSnapshot.id,
            data: docSnapshot.data()
        }))

        this.setState({
            notes: notes,
            fetching: false
        })
    }

    componentDidMount = () => {
<<<<<<< HEAD
        this.unsubscribeSnapshot = this.dataProvider.onSnapshot(this.onUpdateSnapshot);
    }

    componentWillUnmount = () => {
        this.unsubscribeSnapshot()
=======
        var notes = [];
        var db = firebase.firestore();
        db.collection('notes')
            .onSnapshot(snapshot => {
                snapshot.forEach(d => {
                    notes.push(d.data())
                })
                this.setState({notes: notes})
            })
>>>>>>> 91a82c103a2955f7114d6af6f1963dc5e77b7a40
    }

    render = () => {
        return (
            <React.Fragment>
                <h1>Boards</h1>
                <div className="row">
                    {
                        this.state.notes.map((item, i) => {
                            return <Note key={item.id} note={item} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Board;