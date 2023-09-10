import React from "react";
import './App.css'
import './components/repeticao/TabelaProduto.css'

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
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

            <Card Title="#10 Comunicação Indireta" color="#2F3A59">
                    <IndiretaPai></IndiretaPai>
                </Card>

            <Card Title="#09 Comunicação Direta" color="#F9A826">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card Title="#08 Par ou Impar" color="#9925be">
                    <ParOuImpar numero={3}></ParOuImpar>
                    <UsuarioInfo usuario={{nome:"Diego"}}></UsuarioInfo>
                </Card>

                <Card Title="#07 Produtos" color="#be4d25">
                    <TabelaProduto></TabelaProduto>
                </Card>

                <Card Title="#06 Lista Alunos" color="#49be25">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card Title="#05 Familia" color="#ff0000">
                    <Familia lastName="Leal">
                        <FamiliaMembro name="Diego"></FamiliaMembro>
                        <FamiliaMembro name="Ingrid"></FamiliaMembro>
                        <FamiliaMembro name="Paulo"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card Title="#04 Aleatório" color="#080">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card Title="#03 Fragmento" color="#F0B27A">
                    <Fragmento></Fragmento>
                </Card>

                <Card Title="#02 Com Parametro" color="#FF5733">
                    <ComParametro titulo="primeiro titulo" subtitulo="segundo titulo"></ComParametro>
                </Card>

                <Card Title="#01 Primeiro Card" color="#2980B9">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}