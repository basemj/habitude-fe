import React from 'react';

import { storiesOf } from '@storybook/react';

import Question from '../src/components/question';

const questionObject = {
  title: 'Simple question',
  description: 'Here is the description for this simple question.',
  codeSnippet: '// foo bar\nvar foo = \'bar\';\n\nfunction hello() {\n\treturn \'Hello World!\'\n}',
  codeSnippetLang: 'js',
  answers: [1,2,3,4]
}

storiesOf('Question', module)
  .add('Question with no input', () => <Question />)
  .add('Question with correct input', () => <Question 
      title={questionObject.title}
      description={questionObject.description}
      codeSnippet={questionObject.codeSnippet}
      codeSnippetLang={questionObject.codeSnippetLang}
      answers={questionObject.answers}
    />);
