import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('A textbox', async () => {

    const user = userEvent.setup();
    render(<Input type='textbox'/>);
    it('types a letter', async () => {

        await user.click(screen.getByRole('textbox'));
        await user.keyboard('a');
        expect(screen.textbox).toBe('a');
    });
});