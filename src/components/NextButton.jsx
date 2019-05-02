import React from 'react';
import { ReactComponent as Next } from '../icons/next.svg';

function NextButton({ onClick }) {
  return (
    <button className="timer-button" type="button" onClick={onClick}>
      <Next />
    </button>
  );
}

export default NextButton;