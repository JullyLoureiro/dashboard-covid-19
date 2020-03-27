import styled from 'styled-components'


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
.card case {
    background-color: red
}
`;

