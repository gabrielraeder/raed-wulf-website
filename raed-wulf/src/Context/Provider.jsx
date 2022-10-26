import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default function Provider({ children }) {

  const context = {};

  return (
    <Context.Provider value={ context }>{ children }</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
