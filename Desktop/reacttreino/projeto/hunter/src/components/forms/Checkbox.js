import { useState } from 'react'
import styles from './Checkbox.module.css'

function Checkbox({ text, name, options, handleOnChange}){
//EM CONSTRUÇÃO: Planejamento é fazer a checkbox pra definir os tipos de nen do usuário e com base nisso
//modificar os atributos.





   
//viu tentar capturar os ids dos radios com getElementById(usei o target que era mais simples) 
//e usar eles num switch pra cada case filtrar
//um tipo do db. 


    //MÓ ONDA os ids do radio têm que estar iguais pra fazer sentido no meu codigo e eu fiquei
    //meia hora tentando entender o que tinha de errado KKKKKKKKKK
    return(
        <div className={styles.check_type}>
          
                <div className={styles.form_control}>
                    <input 
                    type="radio" 
                    id='tipo' 
                    name='1' 
                    value='intensificador'
                    onChange={handleOnChange}
                    >
                    </input>
                </div>
                <div className={styles.form_control}>
                    <input 
                    type="radio" 
                    id='tipo' 
                    name='1' 
                    value='materializador'
                    onChange={handleOnChange} 
                    >   
                    </input>
                </div>
                <div className={styles.form_control}>
                    <input 
                    type="radio" 
                    id='tipo' 
                    name='1' 
                    value='transformador'
                    onChange={handleOnChange}></input>
                </div>
                <div className={styles.form_control}>
                    <input 
                    type="radio" 
                    id='tipo' 
                    name='1' 
                    value='emissor'
                    onChange={handleOnChange} ></input>
                </div>
                <div className={styles.form_control}>
                    <input 
                    type="radio" 
                    id='tipo'
                    name='1' 
                    value='manipulador'
                    onChange={handleOnChange} ></input>
                </div>
                <div className={styles.form_control}>
                    <input 
                    type="radio" 
                    id='tipo' 
                    name='1' 
                    value='especialista'
                    onChange={handleOnChange} >
                    </input>
                </div>

            
        </div>
    
    )
}

export default Checkbox