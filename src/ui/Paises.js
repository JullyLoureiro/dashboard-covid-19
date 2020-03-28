import React from 'react'
import Template from '../components/Template'
import {api} from '../connection/api'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Lista from '../components/Lista'
import {Grid} from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

const _colunas = [
  {nome: "Ranking", tam: 1, var: "", mask: 'index', color: '#000'},
  {nome: "País", tam: 4, var: "country", color: '#000'},
  {nome: "Casos", tam: 3, var: "cases", mask: 'milhar', color: '#DB5ABA'},
  {nome: "Mortos", tam: 2, var: "deaths", mask: 'milhar', color: '#F24333'},
  {nome: "Recuperados", tam: 2, var: "recovered", mask: 'milhar', color: '#e8b127'},
]

class Busca extends React.Component {
    constructor(){
      super()
      this.state = {
        busca: '',
      }
    }

    render() {
      return (
        <SearchBar value={this.state.busca} onChange={(text) => this.setState({busca: text})} onRequestSearch={() => {return this.props.children(this.state.busca)}} onCancelSearch={()=>{this.setState({busca:''})}} style={{margin: '0 auto', maxWidth: 800}} />
      )
    }
}

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showLoading: true,
      itens: [],
      busca: '',
    }
}

componentDidMount = () => {
  this.setState({showLoading: true}, ()=>{api.get(`countries`, 1).then(dados=>{
      this.setState({showLoading: false, itens: dados})
  })})
}

loadSearch = () => {
  this.setState({showLoading: true}, ()=>{
    const {busca, itens} = this.state
    var array = itens.filter(item=> item.country.toLowerCase().includes(busca.toLowerCase()))
    this.setState({itens: array, showLoading: false})
  })
 
}

render(){
      const {showLoading, itens} = this.state
      return (
        <div className="App">
          {showLoading && <Loading />}
          <header className="App-header">
            <Template value={1}>
              <Div>
                <h1 style={{marginBottom: 40}}>Resumo por país</h1>

                <Busca>
                  {(result)=>{
                     this.setState({busca: result}, ()=>{
                       if(result.trim().length>0) this.loadSearch()
                       else this.componentDidMount()
                     })
                  }}
                </Busca>
                <div style={{marginTop: 40}}>
                    <Lista ativo={true} colunas={_colunas} itens={itens} />
                </div>
                 
              </Div>
            </Template>
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

