import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import purple from '../../assets/purple.svg';
import { ReactSVG } from 'react-svg';

export default function PurpleCircleParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={purple} />
    </span>
  );
}

PurpleCircleParticle.propTypes = {
  classNames: PropTypes.string
};
