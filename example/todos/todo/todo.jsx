import { spanStyle } from './todo.style';

const TodoItem = ({ id, text, done, toggle, remove }) =>
  <li>
    <div
      onclick={() => toggle({id})}
      style={done ? {textDecoration: 'line-through' } : {}}>
      {text}
    </div>
    <span
      onclick={() => remove({ id })}
      style={spanStyle}>
      x</span>
  </li>;

export { TodoItem };
