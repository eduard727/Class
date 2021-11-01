
import React from 'react';
import styled from 'styled-components';

interface HelloProps {
	name: string;
	age: number;
	address?: string;//El signo de ? es que no es requerido
	email: string;
}

export const Hello: React.FC<HelloProps> = ({ name, age, address = 'no address', email }) => {
	return <Container>
		<ul>
			<li>Name: {name}</li>
			<li>Age: {age}</li>
			<li>Address: {address}</li>
			<li> Email: {email}</li>
		</ul>

	</Container>
}

const Container = styled.div`
	width:400px;
	padding: 15px 10px;
	background:#530b6c ;
	color: #fff;
	margin-bottom:15px;
	border-radius: 6px;
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

const Item = styled.li<{isOlder:boolean}>`
	padding:0 0 10px 0;
	text-decoration:${props => props.isOlder ? 'underline': 'none'};
	font-weight: ${props => props.isOlder ? '800': '300'};
`;