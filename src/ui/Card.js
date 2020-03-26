import React from 'react'
import styled from 'styled-components'

export default class App extends React.Component {
  
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Div>
                <h2 className={this.props.classe}>
                    {this.props.titulo}
                </h2>
            </Div>
     
        )
    }
}

export const Div = styled.div`
  .cardCont{
        padding: 8px 16px  !important;
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

