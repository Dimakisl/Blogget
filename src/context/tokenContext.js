import React from 'react';
import PropTypes from 'prop-types';
import {useToken} from '../hooks/useToken';

export const tokenContext = React.createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, delToken] = useToken('');
  return (
    <tokenContext.Provider value={{token, delToken}} >
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import {useAuth} from '../hooks/useAuth';


// export const authContext = React.createContext({});

// export const AuthContextProvider = ({children}) => {
//   const [auth, clearAuth] = useAuth();

//   return (
//     <authContext.Provider value={{auth, clearAuth}}>
//       {children}
//     </authContext.Provider>
//   );
// };

// AuthContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };