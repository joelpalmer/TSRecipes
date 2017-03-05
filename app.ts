//client code
class TaxApp {
    public rate: PlantTaxRate;
    public rateFactory: PlantTaxRateFactory;
    public configureApp(options: IOptions) {
        this.rate = PlantTaxRateFactory.GetPlantTaxRate(options.fuelType);
        
        //... use location for something
    }
}



//service code
class PlantTaxRateFactory {
    public static GetPlantTaxRate(fuelType: string): PlantTaxRate {
        let plantRate: PlantTaxRate;

        if (fuelType === "Coal") {
            plantRate = new CoalPowerPlantTaxRate();
        } else if (fuelType === "Nuclear") {
            plantRate = new NuclearPowerPlantTaxRate();
        } else if (fuelType === "Solar") {
            plantRate = new SolarPowerPlantTaxRate();
        }

        return plantRate;
    }
}

abstract class PlantTaxRate {
    //
}

class CoalPowerPlantTaxRate extends PlantTaxRate {
    constructor() {
        super();
        console.log("Here is your coal tax rate");
    }
}

class NuclearPowerPlantTaxRate extends PlantTaxRate {
    constructor() {
        super();
        console.log("Here is your Nuclear tax rate");
    }
}

class SolarPowerPlantTaxRate extends PlantTaxRate {

}

interface IOptions {
    fuelType: string,
    location: string
}

//entry point 
const taxApp = new TaxApp();
const options = {fuelType: "Nuclear", location: "NY"}
taxApp.configureApp(options);


