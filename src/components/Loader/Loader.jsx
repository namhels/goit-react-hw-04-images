import { Dna } from 'react-loader-spinner';

const Loader = () =>
  <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
    wrapperStyle={{
      display:'flex' ,
      justifyContent:'center',
      alignItems: 'center',
      width: '100%',
    }}
  wrapperClass="dna-wrapper"
/>;

export default Loader;