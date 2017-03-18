//we will use a push observer pattern
interface IObservable {
    subscribe: Function;
    unsubscribe: Function;
    publish: Function;
}
class Observable implements IObservable {
    private subscribers: any[] = new Array();
    public subscribe(cb) {
        //we could check to see if it is already subscribed
        this.subscribers.push(cb);
        console.log(`${cb.name} " has been subscribed`);
    }
    public unsubscribe(cb) {
        this.subscribers = this.subscribers.filter((el) => {
            return el !== cb;
        });
    }
    public publish(data) {
        this.subscribers.forEach((subscriber) => {
            subscriber(data);
        });
    }
}

//Observer (or subscriber) subscribes to any Observable (or publisher)
class Observer {
    constructor(data) {
        console.log(`Here is the published message via Observer: ${data}`);
    }
}

class Observer2 {
    constructor(data) {
        console.log(`Here is the published message via Observer2: ${data}`);
    }
}

//you could extend or just have your class implement IObservable
class MyObj extends Observable {
    //I do whatever
    public publish(data) {
        super.publish(data);
        console.log("I can then do whatever in MyObj");
    }
}

const observable = new Observable();
observable.subscribe(Observer);
observable.subscribe(Observer2);
observable.publish("Broadcast!");
observable.unsubscribe(Observer);
observable.publish("Broadcast after Observer unsubscribed");

const myObj = new MyObj();
myObj.subscribe(Observer);
myObj.publish("Publishing from myObj");
