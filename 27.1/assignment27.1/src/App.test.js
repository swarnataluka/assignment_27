import React from 'react';
// import the App component having myIncrement and myDecrement functions to unit test
import App, {myIncrement, myDecrement} from './App';
//Enzyme to test React Components with unit and integration tests
import {mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//configure the Enzyme adapter to run with React
configure({adapter: new Adapter()});
//to call enzyme functionalities globally
global.expect = expect;
global.render = render;
//shallow() tests components in isolation from the child components they render
global.shallow = shallow;

//create a test inside a test() or it() block including 'Increment' label for the test
  test('Increment', ()=>
 {
//Shallow rendering for isolated unit test the event invocation of increment button click
      const wrapper = shallow(<App />);
      wrapper.find('button').at(0).simulate('click');
      wrapper.update();
//Jest built-in expect() for assertion to ensure used React component renders correctly
      expect(wrapper.find('h2').text()).toEqual('Age : 1');
      const state = { age: 0};
      const newState = myIncrement(state);
      expect(newState.age).toBe(1);
  });
//create a test inside a test() or it() block including 'Decrement' label for the test
  test('Decrement',()=>
  {
//Shallow rendering for isolated unit test the event invocation of decrement button click
      const wrapper = shallow(<App />);
      wrapper.find('button').at(1).simulate('click');
      wrapper.update();
//Jest built-in expect() for assertion to ensure used React component renders correctly
      expect(wrapper.find('h2').text()).toEqual('Age : -1');
      const state = { age: 0};
      const newState = myDecrement(state);
      expect(newState.age).toBe(-1);
  });