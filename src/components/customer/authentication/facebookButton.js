import React, {PropTypes} from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookButton = ({onCallback, errors}) => {
  return (
    <FacebookLogin appId="347205502054817" autoLoad={false} fields="name,email,picture"  cssClass="my-facebook-button-class" textButton="" callback={onCallback} />
  );
};

FacebookButton.propTypes = {
  error: PropTypes.object,
  onCallback: PropTypes.func.isRequired
};

export default FacebookButton;
