import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import orange from '../../assets/orange.svg';

import { ReactSVG } from 'react-svg';

export default function OrangeCircleParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={orange} />
    </span>
  );
}

OrangeCircleParticle.propTypes = {
  classNames: PropTypes.string
};