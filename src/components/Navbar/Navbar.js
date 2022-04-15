import { NavLink, useLocation } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  const focus = {
    opacity: 1,
  };
  return (
    <>
      <nav id="nav">
        <h2 id="title">Bookstore CMS</h2>
        <ul id="list">
          <li>
            <NavLink style={pathname === '/' ? focus : {}} className="nav-tab" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={pathname === '/categories' ? focus : {}} className="nav-tab" to="categories">
              Categories
            </NavLink>
          </li>
        </ul>
        <ImUser className="user-icon" />
      </nav>
    </>
  );
};

export default Navbar;
