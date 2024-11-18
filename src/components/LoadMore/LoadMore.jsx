import s from './LoadMore.module.css';
import PropTypes from 'prop-types';

const LoadMore = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} className={s.button}>
        Load more
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMore;
