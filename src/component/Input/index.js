import React from 'react';
import { Wrapper } from './Wrapper';

export class Input extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		}
	}

	handleChange = (event) => {
		console.log(event.target.value);
		this.setState({
			value: event.target.value
		})
		this.props.onChange(event);
	}

	render(){
		const { placeholder, type } = this.props;
		const { value } = this.state;

		return (
			<Wrapper>
				{type === 'search' && <i class="fa fa-search icon" />}
				<input value={value} placeholder={placeholder} onChange={this.handleChange} />
			</Wrapper>
		);
	}
}