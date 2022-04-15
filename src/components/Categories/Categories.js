import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../../Redux/Categories/Categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => (state.categoriesReducer.status ? state.categoriesReducer.status : ''),
    shallowEqual);
  return (
    <>
      <button
        id="check-status"
        onClick={() => dispatch(checkStatus('Under construction'))}
        type="button"
      >
        Check status
      </button>
      <p id="categories-msg">{status}</p>
    </>
  );
};
export default Categories;
