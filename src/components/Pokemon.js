import { Component } from 'react';

class Pokemon extends Component {
	constructor(data) {
		super(data);
		this.id = data.id;
		this.name = data.name;
		this.sprite = data.sprites.front_default;
		this.type = data.types[0].type.name;
		this.moves = data.moves;
	}
}

export default Pokemon;
