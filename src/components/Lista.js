import React, { Component } from 'react'
import { Grid, Card, CardContent } from '@material-ui/core'
import { formataMilhar } from './Mascaras'
import styled from 'styled-components'
import Dialog from './Dialog'

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


export const Div = styled.div`
    .lista_titulo{
        padding: 8px 16px;
        .MuiGrid-item{
            color:#757575;
            font-size:14px;
        }
        .coluna{
            span{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            }
        }
    }
    .MuiGrid-item{
            padding-right:16px;
    }
    .card{
        cursor: pointer;
        color: black;
        margin-bottom:12px;
        border:none;
        box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
        min-height: 56px;
        .titulo_coluna{
            display:none
        }
        .MuiCardContent-root:last-child{
            padding-bottom:16px;
        }
        .ContextMenu{
            position:absolute;
            width:48px;
            top:4px;
            right:4px;
            outline:none;
        }
        .item_text{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
        }
    }
    .cardExpandido{
        background-color: silver
    }
    .align_right{
        text-align:right;
    }
    .item_textbox {
        margin:0;
        & .Mui-disabled{
            margin-left:-14px;
            .Mui-disabled{margin:0}
        }
        .MuiFormLabel-filled{display:none;}
    }
    @media (max-width:598px){
        .item_textbox {
            margin:0;
            margin: 8px;
            & .Mui-disabled{margin:0;}
            .MuiFormLabel-filled{display:block;}
        }
    }
    @media (max-width:598px){
        .lista_titulo{
            display:none;
        }
        .card{
            color: black;
            .titulo_coluna{
                display:inline;
                font-weight:bold;
            }
            .titulo_coluna::after{
                content:': '
            }
            .item_text{
                display:inline;
                text-align:left;
            }
        }
        .align_right{
            text-align:left;
        } 
    }
`;

