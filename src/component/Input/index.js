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
		this.setState({
			value: event.target.value
		})
		this.props.onChange(event);
	}

	render(){
		const { placeholder, icon } = this.props;
		const { value } = this.state;

		return (
			<Wrapper>
				<i className={`fa fa-${icon} icon`} />
				<input value={value} placeholder={placeholder} onChange={this.handleChange} />
			</Wrapper>
		);
	}
}