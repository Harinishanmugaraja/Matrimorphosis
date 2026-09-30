// Base class: General Driving License
class GeneralLicense {
  constructor(
    private holderName: string,
    private dateOfIssue: Date,
  ) {}

  displayInfo(): void {
    console.log(`Holder: ${this.holderName}`);
    console.log(`Issued on: ${this.dateOfIssue.toDateString()}`);
  }

  rulesOfTheRoad(): void {
    console.log("Follow traffic signals, speed limits");
  }

  renewLicense(): void {
    console.log("License renewed for 5 years.");
  }
}

// Derived class: Car License
class CarLicense extends GeneralLicense {
  constructor(holderName: string, dateOfIssue: Date) {
    super(holderName, dateOfIssue); //parent class constructor
  }
  gearCheckTest(): void {
    console.log("Passed gear check test for car.");
  }
}

// Derived class: Bike License
class BikeLicense extends GeneralLicense {
  constructor(holderName: string, dateOfIssue: Date) {
    super(holderName, dateOfIssue); //parent class constructor
  }
  twoWheelerHandlingTest(): void {
    console.log("Passed two-wheeler handling test.");
  }
}

// Derived class: Truck License
class TruckLicense extends GeneralLicense {
  maxLoadLimit: number;

  constructor(holderName: string, dateOfIssue: Date, maxLoadLimit: number) {
    super(holderName, dateOfIssue); //parent class constructor
    this.maxLoadLimit = maxLoadLimit;
  }

  maxLoad(): void {
    console.log(`Max load limit: ${this.maxLoadLimit} tons.`);
  }

  gearCheckTest(): void {
    console.log("Passed gear check test for truck.");
  }
}

// Usage
const johnCarLicense = new CarLicense("John Doe", new Date("2023-01-15"));
johnCarLicense.displayInfo(); //parent
johnCarLicense.rulesOfTheRoad(); //parent
johnCarLicense.gearCheckTest(); //child
johnCarLicense.renewLicense(); //parent

console.log("---");

const janeBikeLicense = new BikeLicense("Jane Smith", new Date("2022-08-10"));
janeBikeLicense.displayInfo();
janeBikeLicense.rulesOfTheRoad();
janeBikeLicense.twoWheelerHandlingTest();

console.log("---");

const mikeTruckLicense = new TruckLicense(
  "Mike Johnson",
  new Date("2021-05-05"),
  15,
);
mikeTruckLicense.displayInfo();
mikeTruckLicense.rulesOfTheRoad();
mikeTruckLicense.maxLoad();
mikeTruckLicense.gearCheckTest();
mikeTruckLicense.renewLicense();
