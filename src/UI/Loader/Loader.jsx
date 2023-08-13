import CircleLoader from 'react-spinners/RingLoader';

export const Loader = () => {
  return (
    <div style={{margin: 'auto', display: 'flex', zIndex: '3', alignItems: 'center', justifyContent: 'center'}}>
      <CircleLoader color='#cc6633' size={30}/>
    </div>
  );
};