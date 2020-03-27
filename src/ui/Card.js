import React from 'react'


export default class App extends React.Component {
  
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <h2 className={this.props.classe}>
                {this.props.titulo}
            </h2>
        )
    }
}
