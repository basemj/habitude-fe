import React from 'react';
import { shallow, mount } from 'enzyme';
import AnswerEditForm from './index';
import { initialData } from '../../../../stories/AnswerEditForm.stories';

describe('AnswerEditForm layout', () => {
  it('should contain a textarea', () => {
    const component = shallow(<AnswerEditForm />);
    const input = component.find('textarea');
    expect(input.length).toBe(1);
  });
  it('should contain a select with true false values', () => {
    const component = shallow(<AnswerEditForm />);
    const select = component.find('select');
    expect(select.length).toBe(1);
    expect(select.first().find('option').length).toBe(2);
    expect(select.first().find('option').at(0).text()).toBe('true');
    expect(select.first().find('option').at(1).text()).toBe('false');
  });
  it('should contain a submit button', () => {
    const component = shallow(<AnswerEditForm />);
    const button = component.find('button');
    expect(button.length).toBe(1);
    expect(button.first().props().type).toBe('submit');
  });
});
describe('AnswerEditForm onSubmit action', () => {
  it('should be called when textarea is not empty', () => {
    const action = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(<AnswerEditForm onSubmit={action} />);
    wrapper.find('textarea').first().simulate('change', { target: { value: 'abc' } });
    expect(wrapper.find('textarea').first().props().value).toBe('abc');
    wrapper.find('form').first().simulate('submit', { preventDefault });
    expect(action).toHaveBeenCalledWith({ isCorrect: false, text: 'abc' });
    expect(preventDefault).toHaveBeenCalled();
  });

  it('should be called and pre-populate when there are pre-defined data', () => {
    const action = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = mount(<AnswerEditForm answer={initialData} onSubmit={action} />);

    expect(wrapper.find('textarea').first().props().value).toBe('lots of text');
    wrapper.find('form').first().simulate('submit', { preventDefault });
    expect(action).toHaveBeenCalledWith({ isCorrect: true, text: 'lots of text' });
    expect(preventDefault).toHaveBeenCalled();
  });


  it('should not be called when textarea is empty', () => {
    const action = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(<AnswerEditForm onSubmit={action} />);
    wrapper.find('form').first().simulate('submit', { preventDefault });
    expect(action).not.toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
});
