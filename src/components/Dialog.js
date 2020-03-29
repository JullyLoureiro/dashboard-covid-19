import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import {formataMilhar} from './Mascaras'
import ListGroup from 'react-bootstrap/ListGroup'
import { rosa, verde} from '../paleta/colors'
import {Chip, Grid} from '@material-ui/core'

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
      <Dialog  onClose={close} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle  id="customized-dialog-title" onClose={close}>{item ? item.country : ''}</DialogTitle>
        {item !== null &&
          <div style={{width: '500px'}}>
            <DialogContent dividers>
                  <ListGroup variant="flush" >
                      <Grid container spacing={1} style={{display: 'flex', justifyContent: 'center', margin: 10}}>
                        <Grid item xs={12} md={6}>
                            <Chip style={{ color: '#fff', backgroundColor: verde, minWidth: 200}} size="medium"  label={`Confirmados hoje: ${item.todayCases}`} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Chip style={{ color: '#fff', backgroundColor: rosa, minWidth: 200}} size="medium"  label={`Mortos hoje: ${item.todayDeaths}`}/>
                        </Grid>
                      </Grid>
                      <ListGroup.Item>Total de casos: {formataMilhar(item.cases)}</ListGroup.Item>
                      <ListGroup.Item>Total de mortos: {formataMilhar(item.deaths)}</ListGroup.Item>
                      <ListGroup.Item>Total de recuperados: {formataMilhar(item.recovered)}</ListGroup.Item>
                      <ListGroup.Item>Total de casos ativos: {formataMilhar(item.active)}</ListGroup.Item>
                      <ListGroup.Item>Total em estado crítico: {formataMilhar(item.critical)}</ListGroup.Item>
                  </ListGroup>
            </DialogContent>
          </div>
        }
      </Dialog>
    </div>
  )
}

