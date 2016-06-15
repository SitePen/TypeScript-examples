interface DrawMethod {
	(target: Node): void;
	(target: number, options?: Object): void;
}

let method: DrawMethod = function(target: any) { };

let anotherMethod: DrawMethod = function(target: any, options?: Object) { };
