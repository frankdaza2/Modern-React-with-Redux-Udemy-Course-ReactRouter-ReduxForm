import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component {

  render() {
    return (
      <form>
        
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);