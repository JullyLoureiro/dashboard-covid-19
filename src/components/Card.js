import React from 'react'
import {formataMilhar} from './Mascaras'
//import Card from 'react-bootstrap/Card'

export default class App extends React.Component {
    render(){
        return (
            <div className={this.props.classe} style={{paddingTop: 1}}>
                <h2 >
                {this.props.titulo}
                </h2>
                 <h2>
                {formataMilhar(this.props.valor)}
                </h2>
            </div>
            // <Card border="light" style={{ width: '18rem' }}>
            //     <Card.Header>Header</Card.Header>
            //     <Card.Body>
            //     <Card.Title>Light Card Title</Card.Title>
            //     <Card.Text>
            //         Some quick example text to build on the card title and make up the bulk
            //         of the card's content.
            //     </Card.Text>
            //     </Card.Body>
            // </Card>
                
        )
    }
}
