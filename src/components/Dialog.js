import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent } from '@material-ui/core'
import styled from 'styled-components'
import {formataMilhar} from './Mascaras'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)


export default function CustomizedDialogs(props) {
  const {item, open, close} = props
  return (
    <div>
      <Dialog onClose={close} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={close}>{item ? item.country : ''}</DialogTitle>
        {item !== null &&
          <Div>
            <DialogContent dividers>
                  <Card className={"cardCont card"}>
                      <CardContent className="">Casos: {formataMilhar(item.cases)} / Hoje: {formataMilhar(item.todayCases)} </CardContent>
                  </Card>
                  <Card className={"cardMort card"}>
                      <CardContent className="">Mortos: {formataMilhar(item.deaths)} / Hoje:  {formataMilhar(item.todayDeaths)}</CardContent>
                  </Card>
                  <Card className={"cardRec card"}>
                      <CardContent className="">Recuperados: {formataMilhar(item.recovered)}</CardContent>
                  </Card>
                  <Card className={"cardAtivo card"}>
                      <CardContent className="">Ativos: {formataMilhar(item.active)}</CardContent>
                  </Card>
                  <Card className={"cardCritical card"}>
                      <CardContent className="">Casos críticos: {formataMilhar(item.critical)}</CardContent>
                  </Card>
              
            </DialogContent>
          </Div>
        }
      </Dialog>
    </div>
  )
}

export const Div = styled.div`
  .cardCont{
        border-left: 4px solid #DB5ABA;
        box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardRec{
      border-left: 4px solid #e8b127;
      box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardMort {
    border-left: 4px solid #F24333;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardAtivo  {
    border-left: 4px solid  #39bfe6;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .cardCritical  {
    border-left: 4px solid  #5cd168;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .card {
    min-width: '80%';
    margin: 10px;
    padding-left: 15px;
    padding-right: 15px;
    color:  #000 !important;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  }

  .card: hover{
      box-shadow:none;
  }

`;

