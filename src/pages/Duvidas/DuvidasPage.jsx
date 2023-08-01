import { ContainerStyle, Wrapper, Card, Poster, Details } from './Style/DuvidasStyle'
import { Link } from 'react-router-dom'
import Danca from '../../assets/Dança.png'
import Hiit from '../../assets/image3.png'
import Jump from '../../assets/image6.png'
import Luta from '../../assets/luta.jpg'
import Musculacao from '../../assets/Musculação.jpg'
import Ciclismo from '../../assets/image5.png'
import TreinoFuncional from '../../assets/treino funcional.jpg'

function Duvidas() {
    return (
        <>
            <ContainerStyle>
                <Wrapper>
                    <Card>
                        <Poster>
                            <img src={Danca} alt="imagem do modulo de dança" />
                        </Poster>
                        <Details>
                            <h1>Dança</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                    <Card>
                        <Poster>
                            <img src={Hiit} alt="imagem do módulo de Hiit" />
                        </Poster>
                        <Details>
                            <h1>Hiit</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                    <Card>
                        <Poster>
                            <img src={Jump} alt="imagem do módulo de Jump" />
                        </Poster>
                        <Details>
                            <h1>Jump</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                    <Card>
                        <Poster>
                            <img src={Luta} alt="imagem do módulo de Luta" />
                        </Poster>
                        <Details>
                            <h1>Luta</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                    <Card>
                        <Poster>
                            <img src={Musculacao} alt="imagem do módulo de Musculação" />
                        </Poster>
                        <Details>
                            <h1>Musculação</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                    <Card>
                        <Poster>
                            <img src={Ciclismo} alt="imagem do módulo de Ciclismo" />
                        </Poster>
                        <Details>
                            <h1>Ciclismo</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                    <Card>
                        <Poster>
                            <img src={TreinoFuncional} alt="imagem do módulo de Treino funcional" />
                        </Poster>
                        <Details>
                            <h1>Treino funcional</h1>
                            <h2>2023 * XHealth</h2>
                        </Details>
                    </Card>
                </Wrapper>
            </ContainerStyle>
        </>
    )
}

export default Duvidas