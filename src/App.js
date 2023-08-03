import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postContext';
import {TokenContextProvider} from './context/tokenContext';
// import {useToken} from './hooks/useToken';


function App() {
  // const [token, delToken] = useToken('');


  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostContextProvider >
          <Header />
          <Main />
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;