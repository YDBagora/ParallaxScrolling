// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import DemoPage from "./DemoPage";
// import React from "react";
// import userEvent from "@testing-library/user-event";

// describe('DemoPage Components', () => {
//   test('Render Correctly', () => {
//     render(<DemoPage />);

//     expect(screen.getByText(/Login Form/i)).toBeInTheDocument();

//     expect(screen.getByTestId('header')).toBeInTheDocument();
//     expect(screen.getByTestId('MailId')).toBeInTheDocument();
//     expect(screen.getByTestId('Password')).toBeInTheDocument();
//     expect(screen.getByTestId('firstInput')).toBeInTheDocument();
//     expect(screen.getByTestId('secondInput')).toBeInTheDocument();
//     expect(screen.getByTestId('userInput')).toBeInTheDocument();
//     expect(screen.getByTestId('submit')).toBeInTheDocument();
//   });


//   // test('allows user to input answer correctly', async () => {
//   //   render(<DemoPage />);
  
//   //   const firstInputElement = screen.getByTestId('firstInput') as HTMLInputElement;
//   //   const secondInputElement = screen.getByTestId('secondInput') as HTMLInputElement;
  
//   //   userEvent.type(firstInputElement, '2');
//   //   userEvent.type(secondInputElement, '3');
  
//   //   await waitFor(() => {
//   //     const firstInput = parseInt(firstInputElement?.value, 10) || 0;
//   //     const secondInput = parseInt(secondInputElement?.value, 10) || 0;
//   //     const correctAns = firstInput + secondInput;
  
//   //     console.log('First Input:', firstInput); 
//   //     console.log('Second Input:', secondInput); 
//   //     console.log('Correct Answer:', correctAns);
  
//   //     expect(correctAns).toBe(0); 
//   //   });
//   });
// // })  