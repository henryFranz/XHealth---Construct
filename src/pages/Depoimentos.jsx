import Coment from "../components/Coment";
import style from "./styles.module.css";
import photoPerson1 from "../assets/persons/person-1.jpg";
import photoPerson2 from "../assets/persons/person-2.jpg";
import photoPerson3 from "../assets/persons/person-3.jpg";
import photoPerson4 from "../assets/persons/person-4.jpg";
import photoPerson5 from "../assets/persons/person-5.jpg";
import photoPerson6 from "../assets/persons/person-6.jpg";
import photoPerson7 from "../assets/persons/person-7.jpg";
import photoPerson8 from "../assets/persons/person-8.jpg";
import photoPerson9 from "../assets/persons/person-9.jpg";

export default function Depoimentos() {
  return (
    <main className={style.depoimentos}>
      <span className={style.title}>DEPOIMENTOS</span>
      <section className={style.coments}>
        <Coment
          key="1"
          src={photoPerson1}
          text="Sempre procurei um lugar para treinar onde pudesse alcançar meus objetivos e depois de alcançados, encontrasse motivação para continuar treinando. E foi aqui que encontrei! Com excelente atendimento, métodos de treinamento atualizados e dinâmicos, e contando com profissionais qualificados, consigo alcançar meus objetivos e continuo motivado para treinar!"
          name="João Pereira"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="2"
          src={photoPerson2}
          text="Nunca tinha feito atividade física e estava a procura de algo que me trouxesse bem estar. Estou muito feliz com os exercícios a Prof Camila é muito dedicada e atenciosa. Aos poucos passei a me sentir muito bem, mais disposta e percebi que fui perdendo medidas. Nem imaginava o quanto mudaria minha vida!"
          name="Sofia Oliveira"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="3"
          src={photoPerson3}
          text="Falar do Espaço XHealth é falar sobre excelência e profissionalismo, além de ter sido muito bem recebida, as aulas sempre são agradáveis, atrativas e com metodologia impecável! Os instrutores estão sempre buscando aperfeiçoamento, trazendo pra gente aulas mais dinâmicas e interessantes, além de buscarem melhorar também a estrutura física, visando nosso conforto e bem estar"
          name="Isabella Santos"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="4"
          src={photoPerson4}
          text="Comecei a treinar em Setembro de 2017, quando decidi optar por uma vida mais saudável. No Espaço XHealth encontrei orientação e disponibilidade. Desde o primeiro contato foram super atenciosos. Os treinos são realmente personalizados e os profissionais mostram um profundo conhecimento dos métodos de trabalho."
          name="Pedro Rodrigues"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="5"
          src={photoPerson5}
          text="Sempre tive muita dor lombar, devido há uma hérnia discal, a dor fazia parte da minha rotina, procurei vários tratamentos, sem nenhum resultado satisfatório, foi quando conheci o Espaço XHealth e comecei a fazer Zumba.... depois de algum tempo, não tenho mais dores, estou ótima!
          O Espaço XHealth é maravilhoso, ótimos aparelhos, e professores excelentes! NOTA 10! Estou muito feliz em treinar com essa equipe e com os colegas que fiz!"
          name="Laura Costa"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="6"
          src={photoPerson6}
          text="Frequento as aulas de Muay Thai desde 2015. Minha prioridade é o fortalecimento muscular, já que sofria com dores nas articulações. Os resultados foram satisfatórios! O que me conquista no Espaço XHealth é o ambiente tranquilo e o conhecimento dos professores que me transmitem segurança nos exercícios, que são bastante variados."
          name="Mateus Oliveira"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="7"
          src={photoPerson7}
          text="Minha experiência na academia tem sido incrível! As aulas de musculação e aeróbica me renovam todos os dias, tonificando meu corpo e aumentando minha resistência. Além disso, conheci pessoas maravilhosas com interesses em comum. Sou grata pela motivação dos instrutores, que me ajudam a alcançar meus objetivos. Ir à academia é um momento esperado e prazeroso do meu dia."
          name="Maria Silva"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="8"
          src={photoPerson8}
          text="A academia mudou minha vida para melhor! As aulas de CrossFit e HIIT são desafiadoras, mas me sinto mais forte, ágil e confiante a cada treino. Fiz amizades incríveis com pessoas que compartilham meu estilo de vida ativo. A academia é meu lugar de desestressar, focar em mim mesmo e superar limites. Agradeço aos professores dedicados que me incentivam sempre."
          name="João Santos"
          typeAos="fade-up"
          durationAos="1000"
        />
        <Coment
          key="9"
          src={photoPerson9}
          text="A academia é meu refúgio e fonte de equilíbrio. Sempre fui ansiosa e procurava maneiras de lidar com o estresse. Desde que me matriculei, encontrei uma válvula de escape saudável. As aulas de ioga e pilates me ensinaram a ter mais consciência corporal e respiratória, refletindo positivamente em minha vida. Tenho mais energia e disposição para enfrentar o dia-a-dia. Sou grata aos professores inspiradores por essa jornada de autodescoberta e bem-estar!"
          name="Ana Oliveira"
          typeAos="fade-up"
          durationAos="1000"
        />
      </section>
    </main>
  );
}
