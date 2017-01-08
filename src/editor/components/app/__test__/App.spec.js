import React from 'react';
import App from '../App.jsx';
import renderer from 'react-test-renderer';

test('Test that App is still the same', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
