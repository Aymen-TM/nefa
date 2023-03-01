import React from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import blue from '../../assets/blue.svg';

export default function BlueCircleParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={blue} />
    </span>
  );
}

BlueCircleParticle.propTypes = {
  classNames: PropTypes.string
};