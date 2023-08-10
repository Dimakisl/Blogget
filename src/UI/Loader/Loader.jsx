import CircleLoader from 'react-spinners/RingLoader';

export const Loader = () => {
  return (
    <div style={{margin: 'auto', display: 'block', zIndex: '3'}}>
      <CircleLoader color='#cc6633' size={30}/>
    </div>
  );
};