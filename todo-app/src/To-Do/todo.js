import Input from "./Input";
import List from "./List";


function Todo() {
  return (
    <div>
          <section className="todoapp">
    <Input  />
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy" />
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy" />
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button className="destroy" />
          </div>
        </li>
      </ul>
    </section>
    <footer className="footer">
      <span className="todo-count">
        <strong>2</strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  </section>
  <footer className="info">
    <p>Click to edit a todo</p>
    <p>
      Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
    </p>
    <p>
      Edited to React App by <a href="https://github.com/HasanRs">@HasanRs</a>
    </p>
  </footer>
    </div>
  )
}

export default Todo