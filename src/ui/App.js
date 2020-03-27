import React from 'react'
import Menu from './Menu'
import {Grid} from '@material-ui/core'
import Card from '../components/Card'
import {api} from '../connection/api'
import styled from 'styled-components'
import Loading from '../components/Loading'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showLoading: true,
      confirmados: 0,
      mortos: 0,
      recuperados: 0,
    }
  }

  

componentDidMount = () => {
  this.setState({showLoading: true}, ()=>{
    api.get(`all`).then(dados=>{
      this.setState({showLoading: false, recuperados: dados.recovered, mortos: dados.deaths, contaminados: dados.cases})
    })
  })
}

render(){
      const {showLoading, contaminados, mortos, recuperados} = this.state
      return (
        <div className="App">
          {showLoading && <Loading />}
          <header className="App-header">
            <Menu>
             
              <Div>
                <Grid container spacing={1} direction={'row'}>
                  <Grid item xs={12} md={3}>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item xs={12} md={12}>
                            <Card classe={'cardCont card'} titulo={'Contaminados'} valor={contaminados}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card classe={'cardMort card'} titulo={'Mortos'} valor={mortos} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card classe={'cardRec card'} titulo={'Recuperados'} valor={recuperados} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card classe={'cardAtivo card'} titulo={'Ativos'} valor={contaminados - recuperados - mortos} />
                        </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={9}>
                      <div className={'cardResumo card'}>
                           <h1>Resumo Mundial</h1>

                          etstetetetetetetet
                          etstetetetetetetet
                          etstetetetetetetet
                          etstetetetetetetetetstetetetetetetetetstetetetetetetet
                      </div>
                  </Grid>
                </Grid>
              </Div>
            </Menu>

          </header>
        </div>
      )
  }
}


export const Div = styled.div`
  .cardCont{
        padding-left: 15px;
        color: #DB5ABA !important;
        border-left: 4px solid #DB5ABA;
        border-radius: 5px;
        height: 110px;
        box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardRec{
      padding-left: 15px;
      color: #e8b127 !important;
      border-left: 4px solid #e8b127;
      border-radius: 5px;
      height: 110px;
      box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardMort {
    padding-left: 15px;
    color: #F24333 !important;
    border-left: 4px solid #F24333;
    border-radius: 5px;
    height: 110px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardAtivo  {
    padding-left: 15px;
    color:  #39bfe6 !important;
    border-left: 4px solid  #39bfe6;
    border-radius: 5px;
    height: 110px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardResumo  {
    padding: 8px 16px  !important;
    color: #000 !important;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }
  .card: hover{
      box-shadow:none;
  }

`;

