import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="menu-lateral">
      <ul>
        <li>
          <NavLink to="/cadastros">Categorias</NavLink>
        </li>
        <li>
          <NavLink to="/linhas">Receitas</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
