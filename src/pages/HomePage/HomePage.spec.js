import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import HomePage from './index';

describe('HomePage', () => {
  let homePage;

  describe('#render', () => {
    beforeEach(() => {
      homePage = shallow(<HomePage />);
    });

    it('should render two links', () => {
      expect(homePage.find(Link).length).toBe(2);
    });
  });
});
