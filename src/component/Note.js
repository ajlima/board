import React, { Component } from 'react'
import Card from '@material-ui/core/Card';


class Note extends Component {

    constructor(props) {
        super(props)
        const { data } = props
        this.state = {
            data: data
        }
    }
    render = () => {
        return (
            <div className="col-md-4 mt-2 mb-2 ">
                <Card className="py-2 px-2">
                    <h4>{ this.state.data.titulo }</h4>
                    <p>{ this.state.data.descricao }</p>
                </Card>
            </div>
        )
    }
}

export default Note