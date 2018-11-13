import React from 'react';
import { mount } from 'enzyme';
import HelloPage from './index';

describe('HelloPage', () => {
  let helloPage;

  describe('#render', () => {
    beforeEach(() => {
      helloPage = mount(<HelloPage message="World"/>);
    });

    it('should render a hello world message', () => {
      expect(helloPage.text()).toBe('Hello World');
    });
  });
});
