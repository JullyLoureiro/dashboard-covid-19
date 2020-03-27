import React from 'react'
import Menu from './Menu'
import {Grid} from '@material-ui/core'
import Card from './Card'
import {api} from '../connection/api'
import styled from 'styled-components'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showLoading: true
    }
  }

  

componentDidMount = () => {
  this.setState({showLoading: true}, ()=>{
    api.get(``).then(dados=>{console.log(dados)})
  })
}

render(){
      return (
        <div className="App">
          <header className="App-header">
            <Menu>
              <Div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card classe={'cardCont card'} titulo={'Contaminados'} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card classe={'cardMort card'} titulo={'Mortos'} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card classe={'cardRec card'} titulo={'Recuperados'} />
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
        min-height: 150px;
        box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardMort{
      padding: 8px 16px  !important;
      color: #ff1a75 !important;
      border-left: 4px solid #ff1a75;
      border-radius: 5px;
      min-height: 150px;
      box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardRec  {
    padding: 8px 16px  !important;
    color: #0066ff !important;
    border-left: 4px solid #0066ff;
    border-radius: 5px;
    min-height: 150px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .card: hover{
      box-shadow:none;
  }

`;

