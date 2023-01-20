import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}){

    return(
        <div className={styles.att_input}>
            <label htmlFor={name}></label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default Input