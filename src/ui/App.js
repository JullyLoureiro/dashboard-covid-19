import React from 'react'
import Template from '../components/Template'
import {Grid} from '@material-ui/core'
import Card from '../components/Card'
import {api} from '../connection/api'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Chart from 'react-apexcharts'
import {rosa, verde, roxo} from '../paleta/colors'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showLoading: true,
      confirmados: 0,
      mortos: 0,
      recuperados: 0,

      //options bar
      optionsBar: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          type: 'string',
          categories: []
        },
        colors: [roxo],

      },
      //options area
      options: {
        chart: {
          id: "basic-area",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: false,
              customIcons: []
            },
            autoSelected: 'zoom' 
          },
        },
        xaxis: {
          type: 'string',
          categories: []
        },
        colors: [verde,rosa],

      },

      //options donut
      optionsDonut:{
        colors: [rosa, roxo, verde],
        labels: ['Mortos', 'Recuperados', 'Ativos']
      },

      series: [], 
      seriebrazil: []
    }
  }

  

componentDidMount = () => {
  this.setState({showLoading: true}, ()=>{
    //carrega gráfico brazil
    api.get(`countries/brazil`, 1).then(dados=>{
        var serie = [], categoria = []
        serie.push(dados.cases)
        categoria.push('Casos')

        serie.push(dados.deaths)
        categoria.push('Mortos')
        
        serie.push(dados.recovered)
        categoria.push('Recuperados')

        serie.push(dados.active)
        categoria.push('Ativos')

        this.setState({seriebrazil: [{name: 'Brasil', data: serie}], optionsBar:{...this.state.optionsBar, xaxis: {type:'string', categories: categoria}} })
    })

    //carrega dados do card
    api.get(`all`, 1).then(dados=>{
      if(dados !== null && dados !== undefined) this.setState({recuperados: dados.recovered, mortos: dados.deaths, contaminados: dados.cases})
      
      //carrega dados do gráfico de área
      api.get(`countries`, 1).then((dados)=>{
        if(dados !== null && dados !== undefined) {
            var categories = [], data = [], data2 = []
            dados.forEach((e, i)=>{
              if(i>5) return
              data.push(e.todayCases)
              data2.push(e.todayDeaths)
              categories.push(e.country)
            })  

            this.setState({showLoading: false, options: {...this.state.options, xaxis: {type: 'string', categories: categories}}, series: [{name: 'Casos confirmados hoje', data: data}, {name: 'Mortos hoje', data: data2}]})
        } else this.setState({showLoading: false})
      })
    })
  })
}

render(){
      const {showLoading, contaminados, mortos, recuperados} = this.state
      return (
        <div className="App" style={{height: 'auto'}}>
          {showLoading && <Loading />}
          <header className="App-header">
            <Template value={0}>
              <Div>
                <h1 style={{textAlign: 'center'}}>Resumo Mundial</h1>

                <Grid container spacing={2} direction={'row'}>
                  <Grid item xs={12} md={3}>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item xs={12} md={12}>
                            <Card titulo={'Contaminados'} valor={contaminados}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card titulo={'Mortos'} valor={mortos} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card titulo={'Recuperados'} valor={recuperados} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Card titulo={'Ativos'} valor={contaminados - recuperados - mortos} />
                        </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={9}>
                      <div className={'cardResumo card'} style={{padding:30}}>
                          <div className="donut">
                            <Grid container spacing={2} >
                                  <Grid item xs={12} md={6}>
                                    <Chart options={this.state.optionsDonut}  series={[mortos, recuperados, (contaminados - recuperados - mortos)]} type="donut" width="100%"/>
                                    <span style={{color: '#b3b3b3', fontSize:12}}>Percentual de casos ativos, mortos e recuperados em relação ao total de casos confirmados.</span>
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                      <Chart options={this.state.optionsBar} series={this.state.seriebrazil} type="bar" width="100%"/>
                                      <span style={{color: '#b3b3b3', fontSize:12}}>Casos confirmados, ativos, mortos e recuperados no Brasil.</span>
                                  </Grid>
                            </Grid>
                           
                          </div>
                          <div className="mixed-chart">
                              <Chart options={this.state.options} series={this.state.series} type="area" width="100%"/>
                              <span style={{color: '#b3b3b3', fontSize:12}}>Mortes e casos confirmados de hoje.</span>
                          </div>
                      </div>
                  </Grid>
                </Grid>
              </Div>
            </Template>

          </header>
        </div>
      )
  }
}


export const Div = styled.div`
 
`;

