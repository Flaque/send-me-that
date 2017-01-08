import React from 'react';
import CodeEditor from '../CodeEditor.jsx';
import renderer from 'react-test-renderer';

test('Test that CodeEditor is still the same', () => {
  const tree = renderer.create(
    <CodeEditor />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
