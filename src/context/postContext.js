import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {usePostBest} from '../hooks/usePostBest';
import {tokenContext} from './tokenContext';


export const postContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const {token} = useContext(tokenContext);

  const {posts, getPosts} = usePostBest();

  useEffect(() => {
    if (!token) {
      return;
    } else {
      getPosts(token);
    }
  }, [token]);

  return (
    <postContext.Provider value={{posts}}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};