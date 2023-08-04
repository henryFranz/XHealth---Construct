import { useState } from 'react';
import './Style/DuvidasStyle.css';

export default function App() {
  const [comments, setComments] = useState([]);
  const [nome, setNome] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      nome: nome,
      content: content,
      createdAt: new Date()
    };

    setComments(state => [newComment, ...state]);
    setNome("");
    setContent("");
  };

  return (
    <div id="app">
      <h2 style={{
        color:"#d5a353",
        fontSize:"2rem",
        with:"100%",
   
        textAlign:"center",
        paddingBottom:".5rem"
      }}>Qual a sua dúvida?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Nome</label>
        <input type="text" id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
        <label htmlFor="content">Comentário</label>
        <textarea id="content" cols="30" rows="5" required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button>Enviar comentário</button>
      </form>
      <h2 id="perguntasFeitas">Perguntas feitas</h2>
      <hr />
      <section className="comments-list">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id} className="comment">
                <h3>{comment.nome}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            )))
          : (null)}
      </section>
    </div>
  );
}