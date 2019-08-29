/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';

import QuestionForm from '../src/components/Question/QuestionForm';


export const initialQuestion = {
  id: '1234',
  description: `It is a
  javascript question
  `,
  script: `
var name = 'John Doe';
const hello = () => ('Hello world', name);
  `,
  answers: [{
    text: 'The return value is John Doe',
    isCorrect: true,
  }, {
    text: 'The return value is Hello world',
    isCorrect: false,
  }],
};
storiesOf('Question Form', module)
  .add('empty form', () => (
    <QuestionForm onSubmit={action('submit')} />
  ))
  .add('initial values', () => (
    <QuestionForm question={initialQuestion} onSubmit={action('submit with initial values')} />
  ));
