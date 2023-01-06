import styles from './Calculos.module.css'
function Calculos({nome, forca}){
    
    
//AINDA EM PRODUÇÃO (DESCONECTADO DE OUTRAS PARTES), FUTURAMENTE É ONDE OS PONTOS E ATRIBUTOS VÃO
//SER CALCULADOS
    
/*
    function tipoDeNen(){
        switch(tipo){
            case 'fortificador':
                var multiplicador = nivelAtivo()
                break
            case 'materializador':
                break
            case 'emissor':
                break
            case 'transmutador':
                break
            case 'manipulador':
                break
            case 'especialista':
                break
            default:
                break
        }
    }
*/
/*
    function nivelAtivo(){
        switch(nivelAplicado){
            case 0.1:
                break
            case 0.2:
                break
            case 0.3:
                break
            case 0.4:
                break
            case 0.5:
                break
            case 1.0:
                break
        }
    }
*/
    return(
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent} >
            NOM: {nome} 
            
            </h1>  
            
            <h1 className={styles.fraseContent} >
            FOR:{forca} ------ Multipicador: {} ------ Total: {}
            </h1>
            

        </div>
            
    )
}

export default Calculos