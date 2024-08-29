import'./styles.css'
import'../styles/global.css'


export default function Home(){
  return (
      <main>
        <section>
          <h2>Registre as suas tarefas diarias</h2>

          <label>Qual a sua tarefa</label>
          <input type="text" id="expense" name="expense" placeholder="Digite a sua tarefa" required></input>

          <button type = "submit">Guardar tarefa</button>
        </section>

        <section>
          <h1>teste</h1>
        </section>
      </main>
  )
}