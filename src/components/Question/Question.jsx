import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

import '../../assets/css/prism.css';

export default class Question extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const {
      answerClickHandler,
      question,
    } = this.props;

    const {
      title,
      description,
      codeSnippet,
      codeSnippetLang,
      answers,
    } = question;

    const sendAnswer = (answer) => {
      if (answerClickHandler) {
        answerClickHandler(answer);
      }
    };

    if (!question || !answers) {
      return null;
    }

    return (
      <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}

        {
          codeSnippet
            && (
              <pre>
                <code className={`language-${codeSnippetLang}`}>
                  {`${codeSnippet}`}
                </code>
              </pre>
            )
        }

        <ul>
          {answers.map((answer) => (
            <li key={answer.id}>
              <button type="button" onClick={sendAnswer.bind(this, answer)} onKeyDown={sendAnswer.bind(this, answer)}>{answer.text}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Question.propTypes = {
  answerClickHandler: PropTypes.func.isRequired,
  question: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    codeSnippet: PropTypes.string,
    codeSnippetLang: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
  }),
};

Question.defaultProps = {
  question: {
    title: 'Question',
    codeSnippetLang: 'js',
    answers: [],
  },
};
