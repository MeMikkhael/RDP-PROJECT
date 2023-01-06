import styles from './Checkbox.module.css'

function Checkbox({ text, name, options, handleOnChange, value}){
//EM CONSTRUÇÃO: Planejamento é fazer a checkbox pra definir os tipos de nen do usuário e com base nisso
//modificar os atributos.
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            
            <ul>
                
                <li>
                    <input 
                    type="radio" 
                    id='1' 
                    name='1' 
                    value={value}></input>
                </li>
                <li>
                    <input 
                    type="radio" 
                    id='1' 
                    name='1' 
                    value={value}></input>
                </li>
                <li>
                    <input 
                    type="radio" 
                    id='1' 
                    name='1' 
                    value={value}></input>
                </li>
                <li>
                    <input 
                    type="radio" 
                    id='1' 
                    name='1' 
                    value={value}></input>
                </li>
                <li>
                    <input 
                    type="radio" 
                    id='1' 
                    name='1' 
                    value={value}></input>
                </li>
                <li>
                    <input 
                    type="radio" 
                    id='1' 
                    name='1' 
                    value={value}></input>
                </li>
            </ul>

        </div>
    )
}

export default Checkbox