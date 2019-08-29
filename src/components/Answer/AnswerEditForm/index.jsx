import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AnswerEditForm.module.css';

const AnswerEditForm = ({ answer, onSubmit }) => {
  const isUpdateForm = !!answer.text;
  const initialUserState = {
    text: answer.text,
    isCorrect: answer.isCorrect,
  };

  const [localAnswer, setAnswer] = useState(initialUserState);

  const onChange = (value, key) => {
    setAnswer({ ...localAnswer, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (localAnswer.text) { // minimal validation
      onSubmit({ ...localAnswer });
      setAnswer({ text: '', isCorrect: false });
    }
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <textarea name="text" value={localAnswer.text} onChange={(e) => onChange(e.target.value, 'text')} />
      </div>
      <div>
        <select name="isCorrect" onChange={(e) => onChange(e.target.value === 'true', 'isCorrect')} defaultValue={localAnswer.isCorrect}>
          <option value>true</option>
          <option value={false}>false</option>
        </select>
      </div>
      <button type="submit">{isUpdateForm ? 'Update' : 'Add'}</button>
    </form>
  );
};

AnswerEditForm.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string,
    isCorrect: PropTypes.bool,
  }),
  onSubmit: PropTypes.func,
};
AnswerEditForm.defaultProps = {
  answer: {
    text: '',
    isCorrect: false,
  },
  onSubmit: () => {},
};
export default AnswerEditForm;
