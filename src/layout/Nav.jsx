import { NavLink } from 'react-router-dom';

function Nav(){
return (
    <nav>
    <ul>
        <li><NavLink to="/">Todas as Receitas</NavLink></li>
        <li><NavLink to="/cadastros">Cadastrar Receitas</NavLink></li>
    </ul>
    </nav>
  );
}

export default Nav;