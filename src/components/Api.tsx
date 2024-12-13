// import React, { Component } from 'react'
// import axios from 'axios';

// type MyProps = {}

// type MyState = {
// 	data: any,
// 	loading: boolean,
// 	error: string | null
// }

// export default class Api extends Component<MyProps, MyState> {
// 	constructor(props: MyProps) {
// 		super(props);
// 		this.state = {
// 			data: null,
// 			loading: true,
// 			error: null
// 		}
// 	}

// 	componentDidMount(): void {
// 		axios({
// 			method: 'get',
// 			url: 'https://jsonplaceholder.typicode.com/posts'
// 		})
// 			.then((response) => response.data)
// 			.then((data) => {
// 				this.setState({ data: data, loading: false }, () => {
// 					console.log('Data Fetched',this.state.data);
// 				});
// 			})
// 			.catch((error) => {
// 				this.setState({ error: error, loading: false });
// 			})
// 	}

// 	render() {

// 		if (this.state.loading) return <div>Loading...</div>
// 		if (this.state.error) return <div>Error : {this.state.error}</div>
// 		return (
// 			<div>
// 				<h1>Posts</h1>
// 				<ul>
// 					{this.state.data.length > 0 && this.state.data.map((post) => {
// 					return <li key={post.id}>{post.title}</li>
// 					})}
// 				</ul>
// 			</div>
// 		)
// 	}
// }
