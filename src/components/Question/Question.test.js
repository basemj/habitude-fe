import React from 'react';
import { mount } from 'enzyme';
import Question from './Question';

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
};

describe('Question', () => {
  describe('snapshot', () => {
    let component;
    it('it renders', () => {
      component = mount(<Question />);
      expect(component.html()).toMatchSnapshot();
    });

    it('renders title in a H1', () => {
      component = mount(<Question question={questionObject} />);
      expect(component.find('h1').text()).toBe(questionObject.title);
    });

    it('renders question description', () => {
      component = mount(<Question question={questionObject} />);
      expect(component.find('p').text()).toBe(questionObject.description);
    });

    it('renders code snippet with correct language', () => {
      component = mount(<Question question={questionObject} />);
      expect(component.find('code').text()).toBe(questionObject.codeSnippet);
      expect(component.find('code').hasClass(`language-${questionObject.codeSnippetLang}`)).toBe(true);
    });

    it('renders all three answers', () => {
      component = mount(<Question question={questionObject} />);
      expect(component.find('li').length).toBe(3);
    });
  });

  describe('action', () => {
    let component;
    let answerClickHandler = jest.fn();

    it('invokes a callback with the correct data', () => {
      component = mount(<Question question={questionObject} answerClickHandler={answerClickHandler} />);

      expect(answerClickHandler).not.toHaveBeenCalled();
      component.find('li').at(1).simulate('click');
      expect(answerClickHandler).toHaveBeenCalled();
      expect(answerClickHandler).toHaveBeenCalledWith(questionObject.answers[1]);
    });
  });
});
