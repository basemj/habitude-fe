import React from 'react';
import { mount } from 'enzyme';
import Question from './Question';
import questionObject from '../../../stories/index.stories';

const answerClickHandler = jest.fn();

describe('Question', () => {
  describe('snapshot', () => {
    let component;
    it('it renders', () => {
      component = mount(<Question
        question={questionObject}
        answerClickHandler={answerClickHandler}
      />);
      expect(component.html()).toMatchSnapshot();
    });

    it('renders title in a H1', () => {
      component = mount(<Question
        question={questionObject}
        answerClickHandler={answerClickHandler}
      />);
      expect(component.find('h1').text()).toBe(questionObject.title);
    });

    it('renders question description', () => {
      component = mount(<Question
        question={questionObject}
        answerClickHandler={answerClickHandler}
      />);
      expect(component.find('p').text()).toBe(questionObject.description);
    });

    it('renders code snippet with correct language', () => {
      component = mount(<Question
        question={questionObject}
        answerClickHandler={answerClickHandler}
      />);
      expect(component.find('code').text()).toBe(questionObject.codeSnippet);
      expect(component.find('code').hasClass(`language-${questionObject.codeSnippetLang}`)).toBe(true);
    });

    it('renders all three answers', () => {
      component = mount(<Question
        question={questionObject}
        answerClickHandler={answerClickHandler}
      />);
      expect(component.find('li').length).toBe(3);
    });
  });

  describe('action', () => {
    let component;

    it('invokes a callback with the correct data', () => {
      component = mount(<Question
        question={questionObject}
        answerClickHandler={answerClickHandler}
      />);

      expect(answerClickHandler).not.toHaveBeenCalled();
      component.find('button').at(1).simulate('click');
      expect(answerClickHandler).toHaveBeenCalled();
      expect(answerClickHandler).toHaveBeenCalledWith(questionObject.answers[1]);
    });
  });
});
