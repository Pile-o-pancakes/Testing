import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';

import BookingInfo from './BookingInfo';

it('renders', () => {

    render(<BookingInfo />);
    // fireEvent(screen.getByLabelText('Date'), 
    // new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: false
    // }))
    const dateInput = screen.getByRole('heading');
    expect(dateInput).toBeInTheDocument();
});