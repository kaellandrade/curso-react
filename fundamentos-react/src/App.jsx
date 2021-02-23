import React from 'react'

import './App.css'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import MembroFamilia from './components/basicos/MembroFamilia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default _ => (  //com default podemos usar funções anônimas
    <div className="App">
        <h1 className="Title">Fundamentos react</h1>

        <div className="Cards">
            <Card titulo='#13- Desafio Mega' color='#E05F11'>
                <Mega qtd={10}></Mega>
            </Card>

            <Card titulo='#12- Usando Class' color='#E15F43'>
                <Contador numeroInicial={40} passoInicial={1}></Contador>
            </Card>

            <Card titulo='#11- Componente Controlado' color='#E45F56'>
                <Input></Input>
            </Card>
            <Card titulo='#10- Comunicação Indireta' color='#8BAD39'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='#09- Comunicação Direta' color='#1FFA5A'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#08- Condicional' color='#1FDA9A'>
                <ParOuImpar num={Math.floor(Math.random() * 100)}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Micael' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'micael.java@outlook.com' }}></UsuarioInfo>

            </Card>

            <Card titulo='#07 - Desafio Repetição' color='#4a4e4d'>
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo='#06 - Repetição' color='#f6cd61'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#78C0A8">
                <Familia sobrenome="Andrade">
                    <MembroFamilia nome="Micael"></MembroFamilia>
                    <MembroFamilia nome="Ana" ></MembroFamilia>
                    <MembroFamilia nome="Manoel"></MembroFamilia>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#8C4646">
                <Aleatorio titulo="Número aleatório" min={10} max={50}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#F2AE72">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Usando Parametro" color="#D96459">
                <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota={9.3}></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
);
