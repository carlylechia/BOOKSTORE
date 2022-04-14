import { Route, Routes } from 'react-router-dom';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
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
export default App;
