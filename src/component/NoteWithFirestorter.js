import React from 'react'
import Card from '@material-ui/core/Card';
import {observer} from 'mobx-react';


const NoteWithFirestorter = observer(({note}) => {
    const { id, titulo, descricao } = note.data
    return (
        <div id={ id } className="col-md-4 mt-2 mb-2 ">
            <Card className="py-2 px-2">
                <h4>{ titulo }</h4>
                <p>{ descricao }</p>
            </Card>
        </div>
    )
})

export default NoteWithFirestorter