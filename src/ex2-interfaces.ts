export interface Drawable {
	id: number;
	name?: string;
	draw: (target: Node) => void;
}

class Rect implements Drawable {
	id: number;
	draw(target: Node) {}
}

const thing: Drawable = {
	id: 0,
	draw: function (target: Node) { }
};
