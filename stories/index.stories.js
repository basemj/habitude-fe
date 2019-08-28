/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Question from '../src/components/Question';

const questionObject = {
  title: 'Simple question',
  description: 'Here is the description for this simple question.',
  codeSnippet: '// foo bar\nvar foo = \'bar\';\n\nfunction hello() {\n\treturn \'Hello World!\'\n}',
  codeSnippetLang: 'js',
  answers: [
    {
      id: 'answer1',
      text: 'This is a sample answer',
      isCorrect: false,
    },
    {
      id: 'answer2',
      text: 'This could be the right answer',
      isCorrect: true,
    },
    {
      id: 'answer3',
      text: 'Here\'s another answer',
      isCorrect: false,
    },
  ],
};

storiesOf('Question', module)
  .add('Question with no input', () => <Question />)
  .add('Question with correct input', () => <Question question={questionObject} answerClickHandler={action('answered')} />);

export default questionObject;
