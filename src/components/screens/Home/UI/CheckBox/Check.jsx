import React from 'react';
import { BsCheck } from 'react-icons/bs';
import style from './Check.module.css';

function Check({ isCompleted }) {
  const circleStyle = {
    backgroundColor: isCompleted ? '#5E60CE' : '#262626',
    borderColor: isCompleted ? '#5E60CE' : '#4EA8DE'
  };

  return (
    <div className={style.circle} style={circleStyle}>
      {isCompleted && <BsCheck className={style.check} size={24} />}
    </div>
  );
}

export default Check;
