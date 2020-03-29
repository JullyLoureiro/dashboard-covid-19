
 import Chip from '@material-ui/core/Chip'
 import GitHubIcon from '@material-ui/icons/GitHub'
import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Language from '@material-ui/icons/Language'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalHospital from '@material-ui/icons/LocalHospital'
import Public from '@material-ui/icons/Public'
import { withStyles } from "@material-ui/core/styles"
import {preto, rosa} from '../paleta/colors'

const styles = theme => ({
  root: {
    width: '100%',
    color: '#fff',
    backgroundColor: preto
  },
});

class SimpleBottomNavigation extends React.Component {  
  clickMenu = (value) => {
    switch(value){
      case 0: 
        window.location.assign('/')
        break;
      case 1:
        window.location.assign('/paises')
        break;
      case 2:
        window.location.assign('/covid19')
        break;
      case 3:
        window.location.assign('/protejase')
        break;
    }
  }

  render(){
    const { classes, value } = this.props

    return (
      <div>
         <div style={{zIndex: 9999, position: 'fixed', top: 10, width: '100%', textAlign:'end'}}>
              <Chip icon={<GitHubIcon style={{ color: '#fff' }}/>} style={{ marginRight: 8, marginTop: 8, color: '#fff', backgroundColor: rosa}} size="medium"  label="Desenvolvido por Juliana Loureiro" onClick={()=>{window.open('https://github.com/JullyLoureiro/AppCovid19', '_blank')}}/>
          </div>
  
        <div style={{paddingLeft:20, paddingRight:20, paddingTop: 50, marginBottom: 60}}>
          {this.props.children}
        </div>
  
        <div style={{width: '100%',position: 'fixed', bottom: 0}}>
          <BottomNavigation value={value} onChange={(event, newValue) => {this.clickMenu(newValue)}}  showLabels className={classes.root}>
            <BottomNavigationAction style={{color: value === 0 ? rosa : '#fff'}} label="Global" icon={<Language style={{ color: value === 0 ? rosa : '#fff' }}/>} />
            <BottomNavigationAction style={{ color: value === 1 ? rosa : '#fff' }} label="Países" icon={<Public style={{ color: value === 1 ? rosa : '#fff' }}/>} />
            <BottomNavigationAction style={{ color: value === 2 ? rosa : '#fff' }} label="Covid-19" icon={<LocalHospital style={{ color: value === 2 ? rosa : '#fff' }}/>} />
            <BottomNavigationAction style={{ color: value === 3 ? rosa : '#fff' }} label="Proteja-se" icon={<FavoriteIcon style={{ color: value === 3 ? rosa : '#fff' }}/>} />
          </BottomNavigation>
           
        </div>
      </div>
     
    );
  }
  
}

export default withStyles(styles, { withTheme: true })(SimpleBottomNavigation);