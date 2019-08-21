/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';

import AnswerEditForm from '../src/components/Answer/AnswerEditForm';

export const initialData = {
  index: 2,
  text: 'lots of text',
  isCorrect: true,
};
storiesOf('AnswerForm for admins', module)
  .add(
    'AnswerForm without initial data',
    () => (
      <div>
        <p>
          This component is for editing the answers.
          <br />
          You can add predefined data by answer=
          {'data'}
          and handle the submit by onSubmit=
          {'yourHandler'}
        </p>
        <AnswerEditForm onSubmit={action('submitting answer')} />
      </div>
    ),
  )
  .add(
    'AnswerForm with initial data',
    () => <AnswerEditForm onSubmit={action('submitting answer')} answer={initialData} />,
  );
