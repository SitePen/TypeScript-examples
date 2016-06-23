function combinor<T>(...rest: T[]): T {
	return rest.reduce((previous: T, current: T) => {
		return <any> previous + <any> current;
	}, rest[0] || null);
}

const strs = combinor<string>('one', 'two');

const nums = combinor<number>(1, 2);
