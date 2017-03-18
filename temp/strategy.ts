import * as _ from "underscore";

interface Strategy {
    groupBy: Function;
}

class _Strategy implements Strategy {
    public groupBy(arr: number[], iteratee) {
        const result = _.groupBy(arr, iteratee);
        console.log(result);
    }
}

class vanillaStrategy implements Strategy {
    public groupBy(arr: number[], iteratee) {
        const groups = {};
        arr.forEach((el) => {
            const group = iteratee(el);
            groups[group] = groups[group] || [];
            groups[group].push(el);
        });
        console.log(groups);
    }
}

class Context {
    constructor(private strategy: Strategy) {
    }

    public executeStrategy(arr, iteratee) {
        this.strategy.groupBy(arr, iteratee);
    }
}
const iterateeFunc = (num) => { return Math.floor(num); };
const numList = [11.5, 22.3, 22.7];

let context: Context = new Context(new _Strategy());
context.executeStrategy(numList, iterateeFunc);

context = new Context(new vanillaStrategy());
context.executeStrategy(numList, iterateeFunc);


