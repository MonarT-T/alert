import React from 'react';
import ReactNotify from 'react-notify';

export default class Alert extends React.Component {

	componentDidMount() {
		if (this.props.result === '200') {
	  		this.refs.notificator.success("Sukces", "Akcja zakończona pomyślnie.", 3500);
		} else if (this.props.result === '201') {
  			this.refs.notificator.error("Błąd", "Akcja nie powiodła się.", 3500); 
		}
	}

	render() {
		return (
			<div>
				<ReactNotify ref='notificator'/>
			</div>
		);
		
	}
}
