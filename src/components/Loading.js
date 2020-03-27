import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default class Loading extends Component {
    render() {
        return (
            <div style={{position: 'fixed' ,width: '100%', height: '100%',zIndex: 99999, backgroundColor: 'rgba(0,0,0,.5', justifyContent: 'center', display:'flex', alignItems: 'center'}}>
               <CircularProgress style={{color: '#DB5ABA'}} />
            </div>
        )
    }
}