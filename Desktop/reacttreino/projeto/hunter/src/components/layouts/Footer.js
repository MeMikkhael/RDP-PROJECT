import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){

    return(
        <footer className={styles.footer}>
            
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram />
                </li>
                <li>    
                    <FaGithub />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>

            <p className={styles.copy_right}>
                <span>Kingdom of Predators RPG</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer