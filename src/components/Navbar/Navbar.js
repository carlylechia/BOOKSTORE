import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <h2>Book Store</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="categories">Categories</Link></li>
    </ul>
  </>
);

export default Navbar;
