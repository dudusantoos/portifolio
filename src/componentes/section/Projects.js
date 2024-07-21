import ButtonB from '../elements/ButtonB.js'; 
import style from './Projects.module.css';
import Card from '../elements/Card.js';
import projects1 from '../../img/projects/projects1.svg';
import projects2 from '../../img/projects/projects2.svg';

function Projects(){
    return(
        <div className={style.projects} id='projects'>
            <div>
                <h1>Projetos</h1>
                <Card
                img={projects1}
                title="Projeto XPTO " 
                tech="HTML, CSS, JS" 
                description="Projeto Front-End para realizar pipipi e popo." 
                repo="https://github.com/dudusantoos?tab=repositories" 
                site="https://github.com/dudusantoos/projeto-landing-page"
                />
                <Card
                img={projects2} 
                title="Projeto XPTO" 
                tech="HTML, CSS, JS" 
                description="Projeto Front-End para realizar pipipi e popo." 
                repo="https://github.com/dudusantoos?tab=repositories" 
                site="https://github.com/dudusantoos?tab=repositories"
                />
            </div>
            
            <ButtonB text='Ver repositório Completo' link='https://github.com/duusantos'/>
            
        </div>
    )
}

export default Projects;