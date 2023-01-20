import axios from 'axios'
import { NEN_TYPE_API } from "../.env"
import { useState, useEffect } from 'react'  
import styles from './Calculos.module.css'
function Calculos({jogador}){
    //USA o tipo pra filtrar os dados seu bobão
    
    const [nenType, setNentype] = useState({})
    const [Loaded, setLoaded] = useState(false)
    const [buffedAtt, setBuffedatt] = useState()
    const URL = "http://localhost:5000/nentype/"
    //REQUISITA OS TIPOS DE NEN DO BANCO DE DADOS
    
    function reDo(e){
        e.preventDefault()
        findType()
    }

    function findType(){
        var x 
        //Procura pela id os tipos de nen pra comparar com o do jogador
        for(x=0; x<6 ; x++){
            console.log('i enter here baby')
            if(nenType[x].name === jogador.tipo){
                console.log(`TIPO TESTADO: ${nenType[x].name} é igual a: ${jogador.tipo}`)
                att_wnen(x)
                
                break
            }
        }
    }

    function att_wnen(key){
        //Multiplica os atributos do jogador com base no tipo de nen escolhido.
        //o primeiro do lado esquerdo do asterisco se refere ao numero do multiplicador e o do 
        //lado direito se refere ao 'nome do atributo'.
        var buff_att = []
        buff_att.push(nenType[key].primary_att_multiplier[1] * jogador[nenType[key].primary_att_multiplier[0]])
        buff_att.push(nenType[key].secondary_att_multiplier[1] * jogador[nenType[key].secondary_att_multiplier[0]])
        buff_att.push(nenType[key].tertiary_att_multiplier[1] * jogador[nenType[key].tertiary_att_multiplier[0]])

        console.log(nenType[key].primary_att_multiplier[1] * jogador[nenType[key].primary_att_multiplier[0]]) 
        console.log(nenType[key].secondary_att_multiplier[1] * jogador[nenType[key].secondary_att_multiplier[0]]) 
        console.log(nenType[key].tertiary_att_multiplier[1] * jogador[nenType[key].tertiary_att_multiplier[0]])

        return buff_att
        
        

    }

    async function dataLoad(){
        await axios.get("http://localhost:5000/nentype")
        .then((resp) => {
            setNentype(resp.data)
            setLoaded(true)
        })
    }
    //Controlador de chamada de função e manipulação de side effects
    useEffect(() =>{
        dataLoad()
    }, [])
   
    if(Loaded){
        console.log(nenType[1].id)
        findType()
        
    }else{
        console.log('carregando')
    }
    

    
    
    


    return(
        <>

            <button type="submit" onClick={reDo}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</button>
            
        </>
    )
}

export default Calculos