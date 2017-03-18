class Url {
    private _host: string;
    private _protocal: string;
    private _path: string;

    set host(hostValue: string) {
        this._host = hostValue;
    }

    set protocal(protocalValue: string) {
        this._protocal = protocalValue;
    }

    set path(pathValue: string) {
        this._path = pathValue;
    }

     get href(): string {
        return `${this._protocal}://${this._host}/${this._path}`;
    }
}

let serviceUrl = new Url();
serviceUrl.protocal = "https";
serviceUrl.host = "localhost";
serviceUrl.path = "patients";
//console.log(serviceUrl.protocal);
console.log(serviceUrl.href);
//const x = serviceUrl._protocal;
//console.log(x);
