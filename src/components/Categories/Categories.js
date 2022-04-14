import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../../Redux/Categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => (state.categoriesReducer.status ? state.categoriesReducer.status : ''),
    shallowEqual);
  return (
    <>
      <button
        onClick={() => dispatch(checkStatus('Under construction'))}
        type="button"
      >
        Check status
      </button>
      <p>{status}</p>
    </>
  );
};
export default Categories;
