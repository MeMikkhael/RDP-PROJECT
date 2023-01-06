import Ficha from "../project/FormFichas"
import LinkButton from "../layouts/LinkButton"
import { useState } from 'react'

import styles from './Home.module.css'
import hxh from '../../imgs/hunterxhunterimg2.jpg'
function Home({nome, forca}){

    return(
        //AQUI DEVE FICAR UMA FOTO DO PERSONAGEM ACOMPANHADA DE NOME, IDADE, NACIONALIDADE, NIVEL DE NEN
        //E NIVEL FISICO.
        <section className={styles.home_container}>
            <h1>Criador de fichas de rpg <span>Reino dos Predadores</span></h1>
            <LinkButton to="/Cadastro" text="Nova Ficha"/>
            <img src={hxh} alt="Conteúdo da imagem"/>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            
        </section>
    )
}

export default Home