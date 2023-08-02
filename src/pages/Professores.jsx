import style from "./styles.module.css";
import personalFuncional from "../assets/personais/P.F.H.jpg";
import personalLuta from "../assets/personais/P.L.jpg";
import personalMusculacao from "../assets/personais/P.M.jpg";
import personalZumba from "../assets/personais/P.Z.jpg";
import CardProfessor from "../components/CardProfessor";

export default function Professores() {
  return (
    <>
      <main className={style.professores}>
        <span className={style.title}>PROFESSORES</span>
        <div className={style.personals}>
        <CardProfessor src={personalFuncional} name="Pedro Martins" text="Pedro Martins Oliveira é um inovador Personal Trainer especializado em Treino Funcional. Apaixonado por movimentos dinâmicos e funcionais, Pedro cria programas de treinamento desafiadores que melhoram a mobilidade, a estabilidade e a agilidade de seus alunos. Sua abordagem criativa e divertida torna cada sessão de treino uma experiência única e empolgante, incentivando seus clientes a alcançarem um condicionamento físico de alto nível."
        typeTreino="FUNCIONAL"
        durationAos="1000"
        />

        <CardProfessor typeTreino="MUAY THAY" name="Anderson Silva" src={personalLuta} text="   Anderson Silva Costa é um mestre do Muay Thai, com um extenso
              histórico no mundo das artes marciais. Conhecido por sua técnica
              precisa e poderosa, ele compartilha sua paixão pelo Muay Thai com
              seus alunos, ensinando-os a arte da autodefesa e da superação
              pessoal. Com anos de experiência em competições e treinamentos
              intensivos, Anderson dedica-se a aprimorar as habilidades de seus
              alunos, enquanto promove a disciplina e o respeito mútuo." durationAos="1200"/>
        <CardProfessor typeTreino="MUSCULAÇÃO" name="Gustavo Ferreira" src={personalMusculacao} text=" Gustavo Ferreira Lima é um experiente Personal Trainer
              especializado em Musculação e Condicionamento Físico. Com um
              profundo conhecimento em anatomia e fisiologia do exercício, ele
              projeta programas personalizados para seus clientes, ajudando-os a
              alcançar seus objetivos de força, resistência e estética. Com uma
              abordagem encorajadora e motivacional, Gustavo orienta seus alunos
              a superarem seus limites e a alcançarem um corpo saudável e forte." durationAos="1400"/>
        <CardProfessor typeTreino="ZUMBA" name="Beatriz Santos Costa" src={personalZumba} text="       Beatriz Santos Costa é uma professora carismática e contagiante de
              Zumba. Com uma energia inigualável e uma paixão pela dança,
              Beatriz conduz suas aulas de Zumba como verdadeiras festas de
              dança. Ela utiliza coreografias empolgantes e movimentos
              cativantes para fazer com que seus alunos se divirtam enquanto
              queimam calorias. Além de promover um estilo de vida ativo e
              saudável, Beatriz cultiva um ambiente acolhedor onde todos se
              sentem à vontade para se expressar através da dança." durationAos="1600"/>
          
          



        </div>
      </main>
    </>
  );
}
