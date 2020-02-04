import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './index';

it('renders without crashing', () => {
  ReactDOM.render(<Carousel />, div);
  ReactDOM.unmountComponentAtNode(Carousel);
});
