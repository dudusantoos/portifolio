import style from './Presentation.module.css';
import ButtonA from '../elements/ButtonA.js';
import ButtonB from '../elements/ButtonB.js';

function Presentation(){
    return(
        <div className={style.presentation} id='presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Eduardo</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como <br/> Product Manager, eu tenho o compromisso de resolver <br/> problemas complexos e trazer resultados excepcionais para os <br/> negócios. Meus projetos já geraram milhões de reais em receita <br/> anual e estou sempre em busca de novos desafios para superar.</p>

            <ButtonA link='https://github.com/dudusantoos' text='Conecte-se comigo'/><br/>
        </div>
    )
}

export default Presentation;