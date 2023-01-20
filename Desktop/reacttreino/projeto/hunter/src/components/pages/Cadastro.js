import { useState } from 'react'
import styles from './Cadastro.module.css'

import FormFichas from '../project/FormFichas'

function Cadastro({setNome, setForca}){

const [liberado, setLiberado] = useState(false)


    return (
        <div className={styles.cadastro_container}>
            

            <FormFichas btnText="Gerar Ficha"/>
        </div>
    )
}

export default Cadastro