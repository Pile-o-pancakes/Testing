import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import Navigation from './Navigation';

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//    useNavigate: () => mockedUsedNavigate,
//  }));

describe('Navigation bar', async () => {

    render(<Navigation />)
    it('has links which navigates to it\'s matching view', async () => {

    expect(getByText("Booking")).toBeInTheDocument();
    });
});
