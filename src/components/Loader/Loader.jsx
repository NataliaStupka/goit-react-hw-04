import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Hearts
        style={{ margin: '20px auto' }}
        height="80"
        width="80"
        color="#e281bb"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
