import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import dispatchToProps from './Redux/dispatchToProps';
import stateToProps from './Redux/stateToProps';
import Books from './Redux/Books/Books';
import Categories from './Redux/Categories/Categories';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>
);
export default connect(stateToProps, dispatchToProps)(App);
