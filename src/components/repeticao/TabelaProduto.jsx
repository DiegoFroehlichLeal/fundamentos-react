import React from "react";
import produtos from "../../data/produtos";

const tabelaProduto = props => {
   
    function getLinhas() {
    return produtos.map((produto,i) =>{
        return(
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' :'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.nomeProduto}</td>
            <td>R$ {produto.Valor.toFixed(2).replace('.', ',')}</td>
        </tr>
    
    )})
    
   }
    return (
        <div className="TabelaProduto">
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>

    )
}

export default tabelaProduto;