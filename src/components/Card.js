import React from 'react'
import {formataMilhar} from './Mascaras'

export default class App extends React.Component {
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
