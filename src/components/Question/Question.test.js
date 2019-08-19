import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders question correctly', () => {
  const div = document.createElement('div');
  const questionObject = {
    title: 'Simple question',
    description: 'Here is the description for this simple question.',
    codeSnippet: '// foo bar\nvar foo = \'bar\';\n\nfunction hello() {\n\treturn \'Hello World!\'\n}',
    codeSnippetLang: 'js',
    answers: [
      {
        id: 'answer1',
        text: 'This is a sample answer'
      },
      {
        id: 'answer2',
        text: 'This could be the right answer'
      },
      {
        id: 'answer3',
        text: 'Here\'s another answer'
      }
    ]
  }
  
  ReactDOM.render(<Question question={questionObject} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
