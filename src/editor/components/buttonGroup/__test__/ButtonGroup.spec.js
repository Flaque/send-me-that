import React from 'react';
import ButtonGroup from '../ButtonGroup.jsx';
import renderer from 'react-test-renderer';

test('Test that ButtonGroup is still the same', () => {
  const tree = renderer.create(
    <ButtonGroup />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
