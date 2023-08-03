import './Style/DuvidasStyle.css'

function Duvidas() {
    return (
        <div id="app">
            <h2>Seção de comentários</h2>
            <form>
                <label htmlFor="author">Nome</label>
                <input type="text" id="author" required />
                <label htmlFor="content">Comentário</label>
                <textarea id="content" cols="30" rows="6" required></textarea>
                <button type="submit">Enviar pergunta</button>
            </form>
            <hr />
            <section id="comments">
                <div>
                    <h3>Diogo maçal costa</h3>
                    <span>Em 08/08/2003</span>
                    <p>Pergunta..</p>
                </div>
            </section>
        </div>
    )
}

export default Duvidas