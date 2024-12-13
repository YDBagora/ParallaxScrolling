// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// type MyProps = {}

// type MyState = {
//   user: string;
//   password: any;
// }

// export default class SignupPage extends Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.state = {
//       user: '',
//       password: null,
//     }
//   }

//   handleButton = () => {
//     console.log('Form submitted with', this.state.user, this.state.password);
//     this.setState({user: '', password: ''});
//   }

//   handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     this.setState({ user: e.target.value });
//   }

//   handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     this.setState({ password: e.target.value });
//   }

//   render() {
//     return (
//       <StyleBox>
//         <h1 data-testid="header">Form</h1>
//         <Text fullWidth label="Enter Name" value={this.state.user} onChange={this.handleUser} data-testid="Name" variant="outlined" focused />
//         <Text fullWidth label="Enter Password" value={this.state.password} onChange={this.handlePass} data-testid="Password" variant="outlined" focused />
//         <Btn variant="outlined" fullWidth color='error' data-testid="submit" onClick={this.handleButton}>
//           Submit
//         </Btn>
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