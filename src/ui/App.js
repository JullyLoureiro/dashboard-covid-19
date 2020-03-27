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
                <Grid container spacing={2} direction={'column'}>
                    <Grid item xs={12} md={4}>
                        <Card classe={'cardCont card'} titulo={'Contaminados'} valor={contaminados}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card classe={'cardMort card'} titulo={'Mortos'} valor={mortos} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card classe={'cardRec card'} titulo={'Recuperados'} valor={recuperados} />
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
        padding: 8px 8px  !important;
        color: #ff6600 !important;
        border-left: 4px solid #ff6600;
        border-radius: 5px;
        max-width: 280px;
        min-height: 120px;
        box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardMort{
      padding: 8px 16px  !important;
      color: #ff1a75 !important;
      border-left: 4px solid #ff1a75;
      border-radius: 5px;
      max-width: 280px;
      min-height: 120px;
      box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardRec  {
    padding: 8px 16px  !important;
    color: #0066ff !important;
    border-left: 4px solid #0066ff;
    max-width: 280px;
    border-radius: 5px;
    min-height: 120px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .card: hover{
      box-shadow:none;
  }

`;

