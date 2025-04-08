import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Menu from './Menu';

const mockOnPress = jest.fn();

describe('Menu', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Menu onPress={mockOnPress} />);
    expect(getByTestId('menu-component')).toBeTruthy();
  });

  it('executes onPress function on button press', () => {
    const { getByTestId } = render(<Menu onPress={mockOnPress} />);
    const menuButton = getByTestId('menu-button');
    fireEvent.press(menuButton);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('applies correct backgroundColor', () => {
    const { getByTestId } = render(<Menu onPress={mockOnPress} />);
    const menuComponent = getByTestId('menu-component');
    expect(menuComponent.props.style.backgroundColor).toBe('#FFFFFF');
  }); 
});
