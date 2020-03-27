import React from 'react'


export default class App extends React.Component {
  
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className={this.props.classe}>
                <h2 >
                {this.props.titulo}
                </h2>
                 <h2>
                {this.props.valor}
                </h2>
            </div>
            
        )
    }
}
