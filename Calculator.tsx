
import React from 'react';
// import { ContactForm } from '../Components/ContactForm';

interface CalcState {
	celcius:number;
	fahrenheit:number;
}

export class Calculator extends React.Component<{}, CalcState> {
	state:CalcState = {
		celcius:0,
		fahrenheit:32,
	}
	
	handleInput = (num:string) => {
		const value = parseInt(num);
		const result = (value * 1.800)+32;
		this.setState({fahrenheit:result});
	}

	render(){
		return<>
			<h3>Calculadora</h3>
			<label>Celcius</label>
			<input name='celcius' onChange={(e)=> this.handleInput(e.target.value)} type='number'/>
			<p>Covert to F: {this.state.fahrenheit}</p>
			{/* <ContactForm/> */}
		</>
	}
}

// F = C*1.800+32