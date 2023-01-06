import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../imgs/logohunter.png'
function Navbar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="hunterxproject" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                
                
                    <li className={styles.item}>
                        <Link to="/Ficha">Ficha</Link>
                    </li>
                
                
                    <li className={styles.item}>
                        <Link to="/Cadastro.js">Nova Ficha</Link>
                    </li>

                </ul>
                 
            </Container>
        </nav>
    )
}

export default Navbar