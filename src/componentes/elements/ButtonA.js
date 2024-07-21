import styles from './ButtonA.module.css';

function ButtonA({text, link}){
    return(
        <div>
            <a href={link} target='_blank' rel="noreferrer noopener">
                <button className={styles.btnA}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonA;