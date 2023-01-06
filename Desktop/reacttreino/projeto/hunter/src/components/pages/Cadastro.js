import { useState } from 'react'
import styles from './Cadastro.module.css'

import FormFichas from '../project/FormFichas'

function Cadastro({setNome, setForca}){

const [liberado, setLiberado] = useState(false)


    return (
        <div className={styles.cadastro_container}>
            <h1>Criar Ficha</h1>

            <FormFichas btnText="Gerar Ficha"/>
        </div>
    )
}

export default Cadastro