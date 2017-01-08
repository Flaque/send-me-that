import React from 'react';
import Output from '../Output.jsx';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

test('Test that Output is still the same', () => {

  // Shallow Renderer here because react-frame-component has strange
  // issues with full snapshots
  const shallowRenderer = ReactTestUtils.createRenderer();
  const result = shallowRenderer.render(<Output />);
  expect(result).toMatchSnapshot();
})
