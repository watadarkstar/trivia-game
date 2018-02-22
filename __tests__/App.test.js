/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
