import React, { Component } from 'react'
import firebase from 'firebase'
import Note from './Note'

//https://medium.com/@hrutjes/building-a-react-firestore-app-with-zero-effort-and-mobx-525df611eabf
//https://github.com/IjzerenHein/firestorter
//https://github.com/GeekyAnts/firestore-react
class Board extends Component {

    constructor(props) {
        super(props)
        this.dataProvider = firebase.firestore().collection('notes');
        this.state = {
            fetching: false,
            notes: []
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
        this.unsubscribeSnapshot = this.dataProvider.onSnapshot(this.onUpdateSnapshot);
    }

    componentWillUnmount = () => {
        this.unsubscribeSnapshot()
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