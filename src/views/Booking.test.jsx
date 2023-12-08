import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';

import Booking from './Booking';

describe('Booking view', async () => {

    const user = userEvent.setup();
    render(<Booking />);
    it('sends the booking data to the server', async () => {

        const submitButton = screen.getByRole('button');
        await user.click(submitButton);
        expect().toBe
        http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', {


        });
    });
});