import classNames from 'classnames'
import React from 'react'

const PrimaryButton = ({children,className}) => {
  return (
    <div className={classNames("btn btn-primary",className)}>{children}</div>
  )
}

export default PrimaryButton