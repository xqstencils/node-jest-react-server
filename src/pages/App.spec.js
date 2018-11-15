import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import HelloPage from './HelloPage';

describe('App', () => {
  let app;

  describe('#render HomePage', () => {
    beforeEach(() => {
      app = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    });

    it('should only render HomePage', () => {
      expect(app.find(HomePage).length).toBe(1);
      expect(app.find(HelloPage).length).toBe(0);
    });
  });

  describe('#render HelloPage', () => {
    beforeEach(() => {
      app = mount(<MemoryRouter initialEntries={['/hello']}><App /></MemoryRouter>);
    });

    it('should only render HomePage', () => {
      expect(app.find(HomePage).length).toBe(0);
      expect(app.find(HelloPage).length).toBe(1);
    });
  });
});
