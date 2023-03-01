import classNames from 'classnames';
import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

import purplestar from '../../assets/purplestar.svg';

export default function StarParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={purplestar} />
    </span>
  );
}

StarParticle.propTypes = {
  classNames: PropTypes.string
};
