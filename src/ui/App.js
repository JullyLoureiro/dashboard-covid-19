import React from 'react'
import Menu from './Menu'
import {Grid} from '@material-ui/core'
import Card from './Card'
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
            <div style={{marginTop:10}}>Desenvolvido por Juliana Loureiro</div>

                
              </Div>
            </Menu>

          </header>
        </div>
      )
  }
}


export const Div = styled.div`
  .cardCont{
        color: #F7C548 !important;
        border-left: 4px solid #F7C548;
        border-radius: 5px;
        height: 110px;
        box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardRec{
      color: #DB5ABA !important;
      border-left: 4px solid #DB5ABA;
      border-radius: 5px;
      height: 110px;
      box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardMort {
    color: #F24333 !important;
    border-left: 4px solid #F24333;
    border-radius: 5px;
    height: 110px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardAtivo  {
    color:  #5AD2F4 !important;
    border-left: 4px solid  #5AD2F4;
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

