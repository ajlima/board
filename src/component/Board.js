import React, { Component } from 'react'
import firebase from 'firebase'
import Note from './Note'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [
                { 
                    id: 1,
                    titulo: 'Titulo 1', 
                    descricao: 'Descrição 1'
                },
                { 
                    id: 2,
                    titulo: 'Titulo 2', 
                    descricao: 'Descrição 2'
                },
                { 
                    id: 3,
                    titulo: 'Titulo 3', 
                    descricao: 'Descrição 3'
                }
            ]
        }
    } 

    componentDidMount = () => {
        var db = firebase.firestore();

        
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