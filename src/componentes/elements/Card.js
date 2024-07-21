import style from './Card.module.css';
import ButtonB from './ButtonB.js';

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={style.card}>
            <div>
                <a href={site}>
                    <img src={img} alt='ERROR!'/>
                </a>                
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologias:</strong> {tech}</p> <p>{description}</p>
                    <ButtonB text='Acesse o repositório' link={repo}/>
                </section>
            </div>
        </div>
    )
}

export default Card;