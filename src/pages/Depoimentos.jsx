import Coment from "../components/Coment";
import style from "./styles.module.css";
import photoPerson1 from "../assets/persons/person-1.jpg";
import photoPerson2 from "../assets/persons/person-2.jpg";
import photoPerson3 from "../assets/persons/person-3.jpg";
import photoPerson4 from "../assets/persons/person-4.jpg";
import photoPerson5 from "../assets/persons/person-5.jpg";
import photoPerson6 from "../assets/persons/person-6.jpg";


export default function Depoimentos() {
  return (
    <main className={style.depoimentos}>
      <span>DEPOIMENTOS</span>
      <section className={style.coments}>
        <Coment
          src={photoPerson1}
          text="Sempre procurei um lugar para treinar onde pudesse alcançar meus objetivos e depois de alcançados, encontrasse motivação para continuar treinando. E foi aqui que encontrei! Com excelente atendimento, métodos de treinamento atualizados e dinâmicos, e contando com profissionais qualificados, consigo alcançar meus objetivos e continuo motivado para treinar!"
          name="João Pereira"
        />
         <Coment
          src={photoPerson2}
          text="Nunca tinha feito atividade física e estava a procura de algo que me trouxesse bem estar. Estou muito feliz com os exercícios a Prof Camila é muito dedicada e atenciosa. Aos poucos passei a me sentir muito bem, mais disposta e percebi que fui perdendo medidas. Nem imaginava o quanto mudaria minha vida!"
          name="Sofia Oliveira"
    
        />
         <Coment
          src={photoPerson3}
          text="Falar do Espaço XHealth é falar sobre excelência e profissionalismo, além de ter sido muito bem recebida, as aulas sempre são agradáveis, atrativas e com metodologia impecável!          Os instrutores estão sempre buscando aperfeiçoamento, trazendo pra gente aulas mais dinâmicas e interessantes, além de buscarem melhorar também a estrutura física, visando nosso conforto e bem estar. Tenho total confiança no profissionais, pois colocam nossa saúde e bem estar sempre em primeiro lugar."
          name="Isabella Santos"
        />
         <Coment
          src={photoPerson4}
          text="Comecei a treinar em Setembro de 2017, quando decidi optar por uma vida mais saudável. No Espaço XHealth encontrei orientação e disponibilidade. Desde o primeiro contato foram super atenciosos. Os treinos são realmente personalizados e os profissionais mostram um profundo conhecimento dos métodos trabalhados, sempre buscando as melhores maneiras de atingir os objetivos propostos. Além disso é um ambiente de treinamento super agradável.Desde então tenho meu horário diário de exercícios, uma vida saudável, com mais energia e disposição."
          name="Pedro Rodrigues"
        />
         <Coment
          src={photoPerson5}
          text="Sempre tive muita dor lombar, devido há uma hérnia discal, a dor fazia parte da minha rotina, procurei vários tratamentos, sem nenhum resultado satisfatório, foi quando conheci o Espaço XHealth e comecei a fazer Zumba.... depois de algum tempo, não tenho mais dores, estou ótima!
          O Espaço XHealth é maravilhoso, ótimos aparelhos, e professores excelentes! NOTA 10! Estou muito feliz em treinar com essa equipe e com os colegas que fiz!"
          name="Laura Costa"
        />
         <Coment
          src={photoPerson6}
          text="Frequento as aulas de Muay Thai desde 2015. Minha prioridade é o fortalecimento muscular, já que sofria com dores nas articulações. Os resultados foram satisfatórios! O que me conquista no Espaço XHealth é o ambiente tranquilo e o conhecimento dos professores que me transmitem segurança nos exercícios, que são bastante variados."
          name="Mateus Oliveira"
        />
      </section>
    </main>
  );
}