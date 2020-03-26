import React from 'react'
import Menu from './Menu'
import {Grid} from '@material-ui/core'
import Card from './Card'
import {api} from '../connection/api'

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
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <Card classe={'cardCont card'} titulo={'Contaminados'} />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Card classe={'cardMort card'} titulo={'Mortos'} />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Card classe={'cardRec card'} titulo={'Recuperados'} />
                    </Grid>
                </Grid>
            </Menu>
          </header>
        </div>
      )
  }
}
