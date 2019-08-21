import React, {Component} from 'react';
import Prism from 'prismjs';

import '../../assets/css/prism.css';

export default class Question extends Component {

  sendAnswer = (answer) => {
    if (this.props.answerClickHandler) {
      this.props.answerClickHandler(answer);
    }
  }
  
  componentDidMount() {
    Prism.highlightAll();
  }
  
  render() {
    if (!this.props.question && !this.props.answers) {
      return null;
    }

    const {
      title,
      description,
      codeSnippet,
      codeSnippetLang,
      answers
    } = this.props.question;  

    return (
      <div>
        <h1>{title ? title : 'Question'}</h1>
        {description ? <p>{description}</p> : null}

        {
          codeSnippet ?
          <pre>
            <code className={codeSnippetLang ? `language-${codeSnippetLang}` : `language-js`}>
            {`${codeSnippet}`}
            </code>
          </pre> :
          null
        }

        <ul>
          {answers.map((answer) => 
            <li key={answer.id} onClick={this.sendAnswer.bind(this, answer)}>{answer.text}</li>
          )}
        </ul>
      </div>
    )
  }
}
