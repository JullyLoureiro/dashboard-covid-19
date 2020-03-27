import React from 'react'
import Menu from './Menu'
import {Grid} from '@material-ui/core'
import {api} from '../connection/api'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Lista from '../components/Lista'

const _colunas = [
  {nome: "Ranking", tam: 1, var: "", mask: 'index', color: '#000'},
  {nome: "País", tam: 4, var: "country", color: '#000'},
  {nome: "Casos", tam: 3, var: "cases", mask: 'milhar', color: '#DB5ABA'},
  {nome: "Mortos", tam: 2, var: "deaths", mask: 'milhar', color: '#F24333'},
  {nome: "Recuperados", tam: 2, var: "recovered", mask: 'milhar', color: '#e8b127'},
]

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showLoading: true,
      itens: []
    }
}

componentDidMount = () => {this.setState({showLoading: true}, ()=>{api.get(`countries`).then(dados=>{this.setState({showLoading: false, itens: dados})})})}

render(){
      const {showLoading,itens} = this.state
      return (
        <div className="App">
          {showLoading && <Loading />}
          <header className="App-header">
            <Menu>
              <Div>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12}>
                      <div>
                           <h1>Resumo por país</h1>

                           <Lista ativo={true} colunas={_colunas} itens={itens} />
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

