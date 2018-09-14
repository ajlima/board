import React, { Component } from 'react'
import Card from '@material-ui/core/Card';


class Note extends Component {

    constructor(props) {
        super(props)
        const { note } = props
        this.state = {
            note: note
        }
    }
    render = () => {
        return (
            <div id={this.state.note.id} className="col-md-4 mt-2 mb-2 ">
                <Card className="py-2 px-2">
                    <h4>{ this.state.note.data.titulo }</h4>
                    <p>{ this.state.note.data.descricao }</p>
                </Card>
            </div>
        )
    }
}

export default Note