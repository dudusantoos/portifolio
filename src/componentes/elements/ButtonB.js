import style from './ButtonB.module.css';

function ButtonB({text, link}){
    return(
        <div>
            <a href={link} target="_blank" rel="noreferrer noopener" >
                <button className={style.btnB}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonB;