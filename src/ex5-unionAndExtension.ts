import { Drawable } from './ex2-interfaces';

let id: number | string;

interface Rectangle extends Drawable {
	width: number;
	height: number;
}
