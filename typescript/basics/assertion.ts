// let data1 = 25;
// let numdata: number = <number>data1 + 20;
// //When TypeScript Can’t Infer the Type
// let someValue: any = "I am a string!";
// let strLength: number = (<string>someValue).length; // Assert that 'someValue' is a string

// //correct way to do
// let data: any = "25";
// let newdata: number = (data as number) + 40; // Works fine, but note that the string '25' is not automatically converted to a number.
// //recommend to use "as" syntax instead of <datatype> syntax due its compatibility issue when we implement ts with react where you have html tags

// will lead to error coz either assertion or typecasting is done


/*let data: any = "25";
 let newdata: number = data + 40; // Error: 'data' is a string, so adding 40 will cause issues
 console.log(newdata)
 */
let data1 =25
let numdata:number = (<number>data1) +20
//When TypeScript Can’t Infer the Type
let someValue: any = "I am a string!";
let strLength: number = (<string>someValue).length; // Assert that 'someValue' is a string






//correct way to do
let data2: any = "25";
let newdata2: number = (data2 as number) + 40; // Works fine, but note that the string '25' is not automatically converted to a number.
//recommend to use "as" syntax instead of <datatype> syntax due its compatibility issue when we implement ts with react where you have html tags


//w.r.t interface
interface Product {
  id: number;
  name: string;
  price: number;
}


const rawProductData1 = {
  id: 1,
  name: "Laptop",
  price: 25000,
};


// We know rawProductData conforms to the Product interface, but TypeScript can't infer that.
// So we assert it.
let product3 = rawProductData1 as Product;


console.log(product3.name); // "Laptop"
console.log(product3.price); // 1200


//real-life example:
const responses: unknown = {
  success: true,
  data: {
    name: "Pizza",
    price: 299,
  },
};


type ProductResponses = {
  success: boolean;
  data: {
    name: string;
    price: number;
  };
};


const productResponses = responses as ProductResponses;


console.log(productResponses.data.name);
console.log(productResponses.data.price);











