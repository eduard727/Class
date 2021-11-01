
import React from 'react';
import {User} from './Home';


interface ContainerState {
	showMessage: boolean
}
interface ContainerProps {
	name?:string;
	users?:User[];
}

export class Container extends React.Component<ContainerProps, ContainerState>{
	
	state: ContainerState = {
		showMessage: false
	}

	render() {
		
		const userName = this.props.name ?? 'No name (Ejemplo de Operador nullish)';
		const users = this.props.users && this.props.users.length > 1 ;
		const buttonText = this.state.showMessage ? 'Hide message' : 'Show message';
		const {showMessage} = this.state
		
		return <React.Fragment>
			<h1>Condicional Rendering {userName}</h1>
			<button onClick={() => this.setState((previous) => ({ showMessage: !previous.showMessage }))}> {buttonText}</button>
			<div>
				{showMessage ? <Message/> : null}
			</div>
			<div>
				{users && <p> Hay mas de un usuario en la lista</p>}
			</div>
		</React.Fragment>
	}
};

const Message: React.FC = () => {
	return <p>This is a message</p>
}