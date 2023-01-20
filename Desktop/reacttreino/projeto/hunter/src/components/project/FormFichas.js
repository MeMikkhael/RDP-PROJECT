import { useState } from 'react'


import styles from './FormFichas.module.css'

import attribute_container from './AttributeContainer.module.css'
import textformat from './Textformat.module.css'

import Input from "../forms/Input"
import Input_att from "../forms/Input_att"
import SubmitButton from "../forms/SubmitButton"
import Checkbox from "../forms/Checkbox"
import Calculos from '../Calculos'

function Fichas({btnText}){

const jogador = {
    nome: 'nome',
    nomejog:'player',
    nacionalidade:'nacionalidade',
    local_nascimento:'local',
    tipo:'',
    pontos: 0,
    força: 1,
    destreza:1,
    constituição:1,
    carisma:1,
    inteligencia:1,
    sabedoria: 1,
    aura:1
}



    //Modificação dos atributos do jogador
    const att_change = (e) => {
        //e.target.id pra descobrir qual atributo
        //e.target.value pra modificar
        var att = e.target.id
        jogador[att] = e.target.value
        console.log(`${att}: ${jogador[att]}`)
        
    }
    return(
            //PAGINA DE FORMULARIO DAS FICHAS
            <form className={styles.form}> 
                <div id="page_top_inputs">
                    <div className={textformat.input_format_1}> 
                        
                        <Input 
                        type="text" 
                        text="nome" 
                        name="nome do personagem" 
                        handleOnChange={att_change}
                        placeholder="ex: Naruto Uzumaki"/>
                    
                        <Input 
                        type="text" 
                        text="jogador" 
                        name="jogador"
                        handleOnChange={att_change} 
                        placeholder="seu nome"/>

                        <Input 
                        type="number" 
                        text="pontos" 
                        name="pontos"
                        handleOnChange={att_change} 
                        placeholder="espaço do mestre"/>
                    </div>
                    <div className={textformat.input_format_2}>
                        <Input 
                        type="text" 
                        text="nacionalidade" 
                        name="nacionalidade"
                        handleOnChange={att_change} 
                        placeholder="ex: brasileiro"/>
                    
                    
                       
                    
                        <Input 
                        type="text" 
                        text="local_nascimento" 
                        name="local_nascimento"
                        handleOnChange={att_change} 
                        placeholder="ex: Rio de Janeiro-RJ"/>
                    </div>
                </div>
            
                <Checkbox name="nen_type" text="Tipo de nen" handleOnChange={att_change}/>
            
                
          <div>      
                <Input_att 
                    type="number" 
                    text="força" 
                    name="força" 
                    handleOnChange={att_change}
                    placeholder='0'
                    />
                
                   
                <Input_att 
                    type="number" 
                    text="destreza" 
                    name="destreza" 
                    handleOnChange={att_change}
                    placeholder='0'
                    />
                   
                    
                <Input_att
                    type="number" 
                    text="constituição" 
                    name="constituição" 
                    handleOnChange={att_change}
                    placeholder='0'
                    />
                    
                <Input_att 
                    type="number" 
                    text="carisma" 
                    name="carisma" 
                    handleOnChange={att_change}
                    placeholder='0'
                    />
                    
                <Input_att
                    type="number" 
                    text="inteligencia" 
                    name="inteligencia" 
                    handleOnChange={att_change}
                    placeholder='0'
                    />
                    
                <Input_att 
                    type="number" 
                    text="sabedoria" 
                    name="sabedoria" 
                    handleOnChange={att_change}
                    placeholder='0'
                    />
                    
            </div>
            <div className={attribute_container.att}>
                <Calculos jogador={jogador}/>
            </div>
            <SubmitButton text={btnText}/>
            </form>
        
    )
}


export default Fichas