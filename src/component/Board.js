import React, { Component } from 'react'
import firebase from 'firebase'
import Note from './Note'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [
            ]
        }
    } 

    componentDidMount = () => {
        var notes = [];
        var db = firebase.firestore();
        db.collection('notes')
            .onSnapshot(snapshot => {
                snapshot.forEach(d => {
                    notes.push(d.data())
                })
                this.setState({notes: notes})
            })
    }

    render = () => {
        return (
            <React.Fragment>
                <h1>Boards</h1>
                <div className="row">
                    {
                        this.state.notes.map((item, i) => {
                            return <Note key={i} data={item} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Board;