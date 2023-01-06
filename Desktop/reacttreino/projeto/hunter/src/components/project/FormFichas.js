import { useState } from 'react'


import styles from './FormFichas.module.css'
import att_container from './Typechecks.module.css'
import textformat from './Textformat.module.css'

import Input from "../forms/Input"
import SubmitButton from "../forms/SubmitButton"
import Checkbox from "../forms/Checkbox"
function Fichas({btnText}){

    return(
            
            <form className={styles.form}> 
                <div id="page_top_inputs">
                    <div className={textformat.input_format_1}> 
                        
                        <Input 
                        type="text" 
                        text="nome" 
                        name="nome do personagem" 
                        placeholder="ex: Naruto Uzumaki"/>
                    
                    
                        <Input 
                        type="text" 
                        text="nacionalidade" 
                        name="nacionalidade" 
                        placeholder="ex: brasileiro"/>
                    
                    </div>

                    <div className={textformat.input_format_2}>
                        <Input 
                        type="text" 
                        text="jogador" 
                        name="jogador" 
                        placeholder="seu nome"/>
                    </div>

                    <div className={textformat.input_format_3}>
                        <Input 
                        type="text" 
                        text="local_nascimento" 
                        name="local_nascimento" 
                        placeholder="ex: Rio de Janeiro-RJ"/>
                    </div>
                </div>
            <div className={att_container.check_att}>
                <Checkbox name="nen_type" text="Tipo de nen"/>
            </div>
                <SubmitButton text={btnText}/>
            </form>
        
    )
}


export default Fichas