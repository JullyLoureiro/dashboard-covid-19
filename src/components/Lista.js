import React, { Component } from 'react'
import { Grid, Card, CardContent } from '@material-ui/core'
import { formataMilhar } from './Mascaras'
import Dialog from './Dialog'
 import {Div} from './Estilo'

/**
 * Lista dinâmica, a posição das colunas é dada pela ordem do parâmentro *colunas*
 * @param {Json} colunas (Obrigatório)
 * @param {Json} itens (Obrigatório)
 * 
 * -----
 * @example 
 * // colunas:
 * [ 
 *      { 
 *          nome: String, // Título da coluna
 *          tam: Number, // Tamanho da coluna
 *          var: String, // Nome da key do objeto
 *          mask: String, // { dinheiro, data }
 *          align_right: Boolean // Alinhamento a direita
 *      }, 
 * ]
 * 
 */

class ListaDinamica extends Component {
    constructor(props) {
        super(props)

        this.state={
            open: false,
            dados: null, 
        }
    }

    retornaMascara = (e, el, index) => {
        var elemento = e[el.var]

        switch ( el.mask) {
            case 'milhar':
                return formataMilhar(elemento)
            case 'index':
             return String(index + 1) + 'º'
            default:
                return elemento
        }
    }

    render() {
        const { colunas, itens} = this.props
        const {dados, open} = this.state

        //#region 
        const ListaTitulo = (props) => (
            <Grid item sm={props.md} className={props.align_right ? "coluna align_right" : "coluna"}>
                    <span>{props.children}</span>
            </Grid>
        )

        const ListaItem = (props) => (
            <Grid item xs={12} sm={props.md} className={props.align_right ? "coluna align_right" : "coluna"}>
                <span className="titulo_coluna">
                    {props.titulo}
                </span>
                <span style={{color: props.color, fontWeight: props.bold ? 900 : 0}} className="item_text">
                    {props.children}
                </span>
            </Grid>
        )
        //#endregion

        return (
            <Div id="divLista">
                <Dialog open={open} item={dados} close={()=>{this.setState({open: false})}} />
                <div className="lista_titulo">
                    <Grid container>
                        {colunas.map((e, i) =>
                            <ListaTitulo key={i} md={e.tam} align_right={e.align_right}>{e.nome}</ListaTitulo>
                        )}
                    </Grid>
                </div>
                {itens.map((e, i) =>
                    <Card key={i} className={"card"} onClick={()=>{this.setState({open:true, dados: e})}}>
                        <CardContent className="">
                            <Grid container>
                                {colunas.map((el, il) =>
                                    <ListaItem key={il} color={el.color} bold={el.mask=== 'milhar' ? true : false} titulo={el.nome} md={el.tam} align_right={el.align_right}>{this.retornaMascara(e, el, i)}</ListaItem>   
                                )}
                            </Grid>
                        </CardContent>
                    </Card>
                )}
            </Div>
        )
    }
}

export default ListaDinamica
