import React from 'react'
import Menu from './Menu'
import {api} from '../connection/api'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Lista from '../components/Lista'
import {InputBase, Grid} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles';

const _colunas = [
  {nome: "Ranking", tam: 1, var: "", mask: 'index', color: '#000'},
  {nome: "País", tam: 4, var: "country", color: '#000'},
  {nome: "Casos", tam: 3, var: "cases", mask: 'milhar', color: '#DB5ABA'},
  {nome: "Mortos", tam: 2, var: "deaths", mask: 'milhar', color: '#F24333'},
  {nome: "Recuperados", tam: 2, var: "recovered", mask: 'milhar', color: '#e8b127'},
]

const useStyles = makeStyles(theme => ({
  inputRoot: {
    width: '100%',
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showLoading: true,
      itens: [],
      busca: '',
    }
}

componentDidMount = () => {this.setState({showLoading: true}, ()=>{api.get(`countries`, 1).then(dados=>{this.setState({showLoading: false, itens: dados})})})}

render(){
      const {showLoading, itens, busca} = this.state
      return (
        <div className="App">
          {showLoading && <Loading />}
          <header className="App-header">
            <Menu>
              <Div>
                <Grid  container spacing={1} style={{display:'flex', justifyContent: 'center'}}>
                  <Grid item xs={12} md={4}>
                      <InputBase placeholder="Search…"classes={{root: useStyles.inputRoot, input: useStyles.inputInput}} inputProps={{ 'aria-label': 'search' }}/>
                  </Grid>
                  <Grid item xs={12} md={1}><SearchIcon /></Grid>

                </Grid>
                
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

