import React from 'react'
import Card from 'react-bootstrap/Card'
import Template from '../components/Template'
import {rosa} from '../paleta/colors'
import {Grid} from '@material-ui/core'

export default class Protejase extends React.Component {
    render(){
        return (
            <Template value={2}>
                <h1 style={{textAlign: 'center'}}>Sobre o Covid-19</h1>
                <Grid container style={{marginTop:40}}>
                    <Grid item xs={12} md={4}>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Header> <Card.Title style={{fontSize: 25}}>O que é?</Card.Title></Card.Header>
                            <Card.Body style={{padding: '0.9rem'}}>
                                <Card.Text style={{textAlign: 'justify'}}>
                                    O coronavírus (COVID-19) é uma doença infecciosa causada por um novo vírus que nunca havia sido identificado em humanos.
                                    O vírus causa uma doença respiratória semelhante à gripe e tem sintomas como tosse, febre e, em casos mais graves, pneumonia. É possível se proteger ao lavar as mãos com frequência e evitar tocar no rosto.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card border="light" style={{ width: '18rem'}}>
                            <Card.Header> <Card.Title style={{fontSize: 25}}>Transmissão</Card.Title></Card.Header>
                            <Card.Body style={{padding: '0.9rem'}}>
                                <Card.Text style={{textAlign: 'justify'}}>
                                A principal forma de contágio do novo coronavírus é o contato com uma pessoa infectada, que transmite o vírus por meio de tosse, espirros, gotículas de saliva ou coriza.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Header> <Card.Title style={{fontSize: 25}}>Sintomas</Card.Title></Card.Header>
                            <Card.Body style={{padding: '0.9rem'}}>
                                <Card.Text style={{textAlign: 'justify'}}>
                                    <ul>
                                        <li>Falta de ar</li>
                                        <li>Tosse</li>
                                        <li>Dor de garganta</li>
                                        <li>Febre</li>
                                        <li>Coriza</li>
                                        <li>Vômito e diarreia</li>
                                        <li>Náusea e dores de cabeça</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid>
             

                
            </Template>
        )
    }
}
