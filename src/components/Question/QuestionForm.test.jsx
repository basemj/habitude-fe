import React from 'react';
import { shallow } from 'enzyme';
import QuestionForm from './QuestionForm';
import { initialQuestion } from '../../../stories/QuestionForm.stories';


describe('QuestionForm layout', () => {
  it('should have 2 textareas', () => {
    const wrapper = shallow(<QuestionForm />);

    expect(wrapper.find('textarea').length).toEqual(2);
    expect(wrapper.find('code').length).toEqual(1);
  });
});


describe('QuestionForm initial values', () => {
  it('should pre-populate description', () => {
    const wrapper = shallow(<QuestionForm question={initialQuestion} />);
    const descriptionTextarea = wrapper.find('textarea[name="description"]');
    expect(descriptionTextarea.props().value.indexOf('It is a') >= 0).toBe(true);
  });
  it('should pre-populate script', () => {
    const wrapper = shallow(<QuestionForm question={initialQuestion} />);
    const scriptTextarea = wrapper.find('textarea[name="script"]');
    expect(scriptTextarea.props().value.indexOf('var name = \'John Doe\'') >= 0).toBe(true);
    const code = wrapper.find('code').text();
    expect(code.indexOf('var name = \'John Doe\'') >= 0).toBe(true);
  });
});
