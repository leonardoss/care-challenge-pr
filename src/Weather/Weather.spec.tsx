import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';

test('renders hellow world text', () => {
    const { container } = render(<Weather />);
    expect(container).toMatchSnapshot();
});
