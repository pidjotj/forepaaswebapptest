import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class SearchInput extends Component {
  render() {
    return (
      <div className="mt-12 ">
        <Input
          autoFocus
          className="w-4/12 bg-white pl-3 pr-3 rounded-lg"
          onChange={(e) => this.props.onChange(e.target.value)}
          placeholder="Rechercher ..."
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
