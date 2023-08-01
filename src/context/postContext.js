import React from 'react';
import PropTypes from 'prop-types';
import {usePostBest} from '../hooks/usePostBest';


export const postContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const [post] = usePostBest();

  return (
    <postContext.Provider value={{post}}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};