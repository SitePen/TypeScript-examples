export enum Phylum { Chordata }

interface Loyalty {
	beLoyal(): any;
}

export default class Animal {
	private _type: Phylum;

	get type() { return this._type; }

	constructor(type: Phylum) { this._type = type; }
}

export class Dog extends Animal implements Loyalty {
	private _name: string;

	constructor(name: string) {
		super(Phylum.Chordata);
		this._name = name;
	}

	beLoyal() { }
}
