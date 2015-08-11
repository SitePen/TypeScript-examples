function combinor<T>(...rest: T[]): T {
    return rest.reduce(function (previous, current) {
        return (<any> previous) + (<any> current);
    }, rest[0] || null);
}

let strs = combinor<string>('one', 'two');

let nums = combinor<number>(1, 2);
