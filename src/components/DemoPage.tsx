// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { InputAdornment } from '@mui/material';

// type MyProps = {}

// type MyState = {
//   randomValue1: number[],
//   randomValue2: number[],
//   ans: number;
//   userAns: string;
// }

// export default class DemoPage extends Component<MyProps, MyState> {
//   constructor(props: MyState) {
//     super(props)
//     this.state = {
//       randomValue1: [],
//       randomValue2: [],
//       ans: 0,
//       userAns: "",
//     }
//   }

//   componentDidMount(): void {
//     this.handleRandomValues();
//   }

//   handleRandomValues = () => {
//     const firstNumber = Math.floor(Math.random() * 100) + 1
//     const secondNumber = Math.floor(Math.random() * 100) + 1
//     if (firstNumber !== secondNumber) {
//       const result = firstNumber + secondNumber;
//       this.state.randomValue1.push(firstNumber);
//       this.state.randomValue2.push(secondNumber);
//       this.setState({ ans: result }, () => {
//         console.log(this.state.ans);
//       })
//     }
//     console.log(this.state.randomValue1, this.state.randomValue2);
//   }

//   handleAns = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     this.setState({ userAns: e.target.value });

//   }

//   handleSubmit = () => {
//     if (this.state.ans !== Number(this.state.userAns)) {
//       alert("Your Ans Is Not Correct");
//     }
//     else {
//       alert("Your Ans is Correct");
//     }
//   }

//   render() {
//     return (    
//       <StyleBox>
//         <h1 data-testid="header">Login Form</h1>
//         <Text fullWidth label="Enter E-MailId" data-testid="MailId" variant="outlined" focused />
//         <Text fullWidth label="Enter Password" data-testid="Password" variant="outlined" focused />
//         <Text label="First Value" color='warning' data-testid="firstInput" variant="outlined" focused value={this.state.randomValue1[1]} />
//         <Text label="Second Value" color='success' data-testid='secondInput' variant="outlined" focused value={this.state.randomValue2[1]} />
//         <TextField fullWidth
//           sx={{ m: 1, width: '25ch' }}
//           slotProps={{
//             input: {
//               startAdornment: <InputAdornment position="start">First + Second Value = </InputAdornment>,
//             },
//           }}
//           data-testid="userInput"
//           variant="standard" value={this.state.userAns} onChange={this.handleAns}
//         />
//         <Btn variant="outlined" fullWidth color='error' data-testid="submit" onClick={this.handleSubmit}>Submit</Btn>
//       </StyleBox>
//     )
//   }
// }


// const StyleBox = styled(Box)({
//   maxWidth: 460,
//   margin: '30px auto',
//   alignItems: 'center',
//   padding: '20px',
//   border: '2px dashed grey',
//   borderRadius: '20px'
// })

// const Text = styled(TextField)({
//   margin: '10px 3px',
// })

// const Btn = styled(Button)({
//   margin: '20px 0px',
//   padding: '10px 20px',
//   textDecoration: 'none',
//   textTransform: 'none'
// })


// // import { render } from "@testing-library/react";
// // import React from "react";

// // const Greeting = ({ name }) => {
// //     return (
// //         <div>
// //             <h1>Hello , {name}!</h1>
// //         </div>
// //     )
// // }

// // export default Greeting;




// // describe('Greeting Components', () => {
//     // test('render the correct message', () => {
//         // render(<Greeting name='John'/>);

//         // screen.debug();

//         // const greetingElement = screen.getByText(/hello , John!/i);
//         // expect(greetingElement).toBeInTheDocument();
//     // })
// // })