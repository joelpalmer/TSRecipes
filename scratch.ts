interface IResource {
     name: string;
     id: number;
}


interface IDevice extends IResource {
    location: string;
}

class Device implements IDevice {
    public location: string;
    public name: string;
     public id: number;

    constructor(obj: IDevice){
        this.location = obj.location;
        this.id = obj.id;
        this.name = obj.name;
        
    }

    public toJSON(): any {
            return {
                id: this.id,
                name: this.name,
                location: this.location
            };
        }
}





const myDataObj = {id: 1234, name: "My Device", location: "Austin"};
const myResource = new Device(myDataObj);
console.log(myResource.toJSON());