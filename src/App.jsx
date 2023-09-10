import React from "react";
import './App.css'
import './components/repeticao/TabelaProduto.css'
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAluno from "./components/repeticao/ListaAluno";
import TabelaProduto from "./components/repeticao/TabelaProduto";

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card Title="Produtos" color="#00ffff">
                    <TabelaProduto></TabelaProduto>
                </Card>

                <Card Title="Lista Alunos" color="#ff00ff">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card Title="Familia" color="#ff0000">
                    <Familia lastName="Leal">
                        <FamiliaMembro name="Diego"></FamiliaMembro>
                        <FamiliaMembro name="Ingrid"></FamiliaMembro>
                        <FamiliaMembro name="Paulo"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card Title="Aleatório" color="#080">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card Title="Fragmento" color="#F0B27A">
                    <Fragmento></Fragmento>
                </Card>

                <Card Title="Com Parametro" color="#FF5733">
                    <ComParametro titulo="primeiro titulo" subtitulo="segundo titulo"></ComParametro>
                </Card>

                <Card Title="Primeiro Card" color="#2980B9">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}