import React from 'react';
import App from '../App.jsx';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

test('Test that App is still the same', () => {

  // We're currently using the shallow renderer to avoid
  // issues with refs in the CodeEditor module.
  // See: https://github.com/facebook/react/issues/7148
  const shallowRenderer = ReactTestUtils.createRenderer();
  const result = shallowRenderer.render(<App />);
  expect(result).toMatchSnapshot();
})
