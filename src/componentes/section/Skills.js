import styles from './Skills.module.css';
import javaScript from '../../img/skills/javaScript-logo.svg';
import html from '../../img/skills/html-logo.svg'
import css from '../../img/skills/css-logo.svg';
import react from '../../img/skills/react-logo.svg';
import typeScript from '../../img/skills/typeScript-logo.svg';
function Skills(){
    return(
        <div className={styles.skill} id='skills'>
            <div>
                <h1>Habilidades</h1>  
                <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            </div>
            <div>
                <img src={javaScript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typeScript}/>
            </div>            
        </div>
    )
}

export default Skills;