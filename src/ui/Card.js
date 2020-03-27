import React from 'react'
import {formataMilhar} from '../components/Mascaras'

export default class App extends React.Component {
  
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className={this.props.classe} style={{paddingTop: 1}}>
                <h2 >
                {this.props.titulo}
                </h2>
                 <h2>
                {formataMilhar(this.props.valor)}
                </h2>
            </div>
            
        )
    }
}
