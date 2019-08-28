import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AnswerEditForm = ({ answer, onSubmit }) => {
  const initialUserState = {
    text: answer.text,
    isCorrect: answer.isCorrect,
    index: answer.index,
  };

  const [localAnswer, setAnswer] = useState(initialUserState);

  const onChange = (value, key) => {
    setAnswer({ ...localAnswer, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (localAnswer.text) { // minimal validation
      onSubmit({ ...localAnswer });
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <textarea name="text" value={localAnswer.text} onChange={(e) => onChange(e.target.value, 'text')} />
      </div>
      <div>
        <select name="isCorrect" onChange={(e) => onChange(e.target.value === 'true', 'isCorrect')} defaultValue={localAnswer.isCorrect}>
          <option value>true</option>
          <option value={false}>false</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

AnswerEditForm.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string,
    isCorrect: PropTypes.bool,
    index: PropTypes.number,
  }),
  onSubmit: PropTypes.func,
};
AnswerEditForm.defaultProps = {
  answer: {
    text: '',
    isCorrect: false,
    index: 0,
  },
  onSubmit: () => {},
};

export default AnswerEditForm;
