// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import SignupPage from './SignupPage';

// describe('SignupPage Testing', () => {
//     test('Render SignupPage', () => {
//         render(<SignupPage />);
//         expect(screen.getByText(/Form/i)).toBeInTheDocument();
//         expect(screen.getByTestId('header')).toBeInTheDocument();
//     });

//     test('Submit the userName and Password', () => {
//         const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
//         render(<SignupPage />);

//         fireEvent.change(screen.getByLabelText(/Enter Name/i), { target: { value: 'user123' } });
//         fireEvent.change(screen.getByLabelText(/Enter Password/i), { target: { value: 'pass123' } });

//         fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

//         expect(logSpy).toHaveBeenCalledWith('Form submitted with', 'user123', 'pass123');

//         logSpy.mockRestore();
//     })
// })