import styles from './Footer.module.css';
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/' target="_blank" rel="noreferrer noopener"><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/duusantos' target="_blank" rel="noreferrer noopener"><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/git' target="_blank" rel="noreferrer noopener"><FaLinkedin size={30}/></a></li>
            </ul>
            <p>edusantoscomercial@gmail.com</p>
            <p>Eduardo Santos © 2024</p>
        </div>
    )
}

export default Footer;