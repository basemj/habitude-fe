import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import styles from './QuestionForm.module.css';
import '../../assets/css/prism.css';
import AnswerForm from '../Answer/AnswerEditForm';

const QuestionForm = (
  {
    question: {
      id, description: initialDescription, script: initialScript, answers: initialAnswers,
    },
    onSubmit,
  },
) => {
  const [description, setDescription] = useState(initialDescription);
  const [script, setScript] = useState(initialScript);
  const [answers, setAnswer] = useState(initialAnswers);
  const [answersHasChanged, setAnswerChangeStatus] = useState(false);

  useEffect(() => Prism.highlightAll());

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnswerChangeStatus(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [answersHasChanged]);

  const saveAnswer = (answer, index) => {
    const i = index === undefined ? answers.length : index;
    answers.splice(i, 1, answer);
    setAnswer([...answers]);
    setAnswerChangeStatus(true);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {
      id,
      description,
      script,
      answers,
    };
    onSubmit(data);
  };

  return (
    <div>
      <h1>Edit question</h1>
      {answersHasChanged ? <div className={styles.answersHasChanged}>Answer has changed but the question was not saved!</div> : ''}
      <form className={styles.form} onSubmit={submit}>
        <div>
          <label htmlFor="description">
            Description
            <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
          </label>
        </div>
        <div>
          <label htmlFor="script">
            Script
            <textarea id="script" name="script" onChange={(e) => setScript(e.target.value)} value={script} />
          </label>
        </div>
        <div>
          <pre>
            <code className="language-js">{script}</code>
          </pre>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <p>
        {'There are '}
        {answers.length}
        {' answers added.'}
      </p>
      {answers.map((answer, index) => <AnswerForm key={`answer-${Math.random() + index}`} answer={answer} onSubmit={(a) => saveAnswer(a, index)} />)}
      <AnswerForm onSubmit={(a) => saveAnswer(a)} />

    </div>
  );
};

QuestionForm.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    script: PropTypes.string,
    answers: PropTypes.array,
  }),
  onSubmit: PropTypes.func,
};
QuestionForm.defaultProps = {
  question: {
    id: '',
    answers: [],
    description: '',
    script: '',
  },
  onSubmit: () => {},
};

export default QuestionForm;
