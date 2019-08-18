import React, { Component } from 'react'
import Prism from 'prismjs'

import '../../assets/css/prism.css';

export default class Question extends Component {
  
  componentDidMount() {
    Prism.highlightAll();
  }
  
  render() {
    if (!this.props.answers) {
      return null;
    }

    return (
      <div>
        <h1>{this.props.title ? this.props.title : 'Question'}</h1>
        {this.props.description ? <p>{this.props.description}</p> : null}

        {
          this.props.codeSnippet ?
          <pre>
            <code className={this.props.codeSnippetLang ? `language-${this.props.codeSnippetLang}` : `language-js`}>
            {`${this.props.codeSnippet}`}
            </code>
          </pre> :
          null
        }

        <ul>
          {this.props.answers.map((answer) => 
            <li>{answer}</li>
          )}
        </ul>
      </div>
    )
  }
}