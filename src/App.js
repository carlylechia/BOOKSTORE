import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>
);
export default App;
