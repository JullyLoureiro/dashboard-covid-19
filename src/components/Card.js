import React from 'react'
import {formataMilhar} from './Mascaras'
import Card from 'react-bootstrap/Card'
import {rosa} from '../paleta/colors'

export default class App extends React.Component {
    render(){
        return (
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header> <Card.Title>{this.props.titulo}</Card.Title></Card.Header>
                <Card.Body style={{padding: '0.9rem'}}>
                    <Card.Text>
                        <b style={{color: rosa, fontSize: 25}}>{formataMilhar(this.props.valor)}</b>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
