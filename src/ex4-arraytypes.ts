interface MyMap {
	[index: string]: string;
}

let translations: MyMap = {
	ok: 'Alright'
};

// XXX This does not work because all pairs must match
let anotherMap: MyMap = {
	'0': 'first'
	// length: 1
};
