import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default class Loading extends Component {
    render() {
        return (
            <View style={{position: 'absolute' ,width: '100%', height: '100%',zIndex: 99999, backgroundColor: 'transparent', justifyContent: 'center', flex: 1, alignItems: 'center'}}>
               <CircularProgress color="secondary" />
            </View>
        )
    }
}