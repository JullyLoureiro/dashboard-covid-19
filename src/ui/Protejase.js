import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Template from '../components/Template'
import {rosa} from '../paleta/colors'

export default class Protejase extends React.Component {
    render(){
        return (
            <Template value={3}>
                <h1 style={{textAlign: 'center'}}>Proteja-se!</h1>
                <div style={{display:'flex', justifyContent:'center'}}> 
                    <Card border="light" style={{ width: '80%', marginTop: 30 }}>
                        <Card.Header> <Card.Title style={{fontSize: 25}}>Dicas e prevenção</Card.Title></Card.Header>
                        <Card.Body style={{padding: '0.9rem'}}>
                            <Card.Text style={{textAlign: 'justify'}}>
                                <span style={{margin:15, textAlign: 'justify', marginBottom: 20}}>Está claro que este vírus está causando um grande problema no mundo inteiro, mas não entre em pânico! Apesar de não termos ainda uma forma de tratamento oficial e testada para o COVID-19, nós podemos seguir algumas regras básicas:</span>

                                <ListGroup variant="flush"style={{marginTop:20}}>
                                    <ListGroup.Item><b style={{color:rosa}}>1)</b> Lave as mãos com água e sabão</ListGroup.Item>
                                    <ListGroup.Item><b style={{color:rosa}}>2)</b> Utilize sempre álcool em gel</ListGroup.Item>
                                    <ListGroup.Item><b style={{color:rosa}}>3)</b> Cubra o nariz/boca ao espirrar ou tossir</ListGroup.Item>
                                    <ListGroup.Item><b style={{color:rosa}}>4)</b> Evite aglomerações</ListGroup.Item>
                                    <ListGroup.Item><b style={{color:rosa}}>5)</b> Procure manter os ambientes ventilados</ListGroup.Item>
                                    <ListGroup.Item><b style={{color:rosa}}>6)</b> Não compartilhe objetos pessoais</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Template>
        )
    }
}
