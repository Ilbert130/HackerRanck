


// function fizzBuzz(n) {

//     for(let i = 1; i<= n; i++){
//         // Write your code here
//         if(i%3===0 && i%5!==0){
//             console.log('Fizz');

//         }else if(i%5===0 && i%3!==0){
//             console.log('Buzz');

//         }else if(i%5===0 && i%3===0){
//             console.log('FizzBuzz');

//         }else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(3);

//---------------------------------------------- Project Euler -----------------------------------------------

//exercise 1: Find the sum of multiple of 5 and 3 less than 1000
// function sumNumber() {

//     let sum = 0;
//     for(let i = 1; i< 1000; i++){

//         // Write your code here
//         if(i%3===0 || i%5===0){
            
//             sum += i;

//         }
//     }

//     console.log(sum);
// }

// sumNumber();

//exercise 2: find the sum of the even number where the result of fibonacci sequence is less than 4000000

// const fibonacciSequence = (rNegat,rPosit) => {

//     let val1 = 0;
//     let val2 = 0;
//     let arrayPositve = [];
//     let arrayNegative = [];
//     let arrayTotal = [];
//     let sum;
//     rNegat = rNegat * -1;

//     do{
//         sum = val1 + val2;
//         val1 = val2;
//         val2 = sum;
//         arrayPositve.push(sum);
//         // console.log(sum);

//         if(val2 === 0) val2=1;

//         // sumEven += (sum%2===0) ? sum : 0;

//     }while(sum < rPosit);

//     val1 = 0;
//     val2 = 1;
//     sum = 0;

//     do{
//         sum = val1 + val2;
//         val1 = val2;
//         val2 = sum;
//         arrayNegative.unshift(sum * -1);
//         // console.log(sum);
//         // sumEven += (sum%2===0) ? sum : 0;

//     }while(sum < rNegat);

//     arrayTotal = arrayNegative.concat(arrayPositve);
//     console.log({arrayTotal});
// }

// fibonacciSequence(-100,100);

//exercise 3: What is the largest prime factor of the number 600851475143 ?

// const isPrime = () => {
//     let number = 600851475143;
//     let count = 0;
//     let arrayPrimos = [];

//     for(let j = 1; j< number; j++){

//         for(let i = 1; i<=j; i++){

//             count += (j%i === 0)? 1: 0;
    
//             if(count === 3){
//                 break;
//             }
//         }
    
//         if(count === 2) arrayPrimos.push(j);
//         count = 0;
//     }

//     console.log({arrayPrimos});
// }

// // isPrime();

// const prueba = () => {

//     for(let i = 1; i<600851475143; i++){
//         console.log(i);
//     }
// }

// prueba();

// const largestPrimeFactor = () => {

//     let largestNumber;

//     for(let i = 1; i<600851475143; i++){
         
//         if(isPrime(i) && 600851475143%i ===0){
//             largestNumber = i;
//         }
//     }

//     console.log(largestNumber);

// }

// largestPrimeFactor();




// console.log(isPrime(4));

//-------------------------------------------------------------------------- 

// const peakElement = (arr, n) => {
    
//     let val1 = Math.max(...arr);

//     for(let i = 1; i<=n; i++){

//         if(val1 === arr[i-1]){
//             return i-1;
//         }
//     }
    
//     return 0;
// }

// const arr = [1,2,3]

// console.log(peakElement(arr, 3 ));


//-------------------------------------------------
// function getMinMax(arr,n){
//     //code here
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     // return `min = ${min}, max = ${max}`;
//     return [min, max];
// }

// const vals = [3, 2, 1, 56, 1000, 167];
// console.log(getMinMax(vals, 6));

// const findTwoElement = (arr, n) => {

//     let missing;
//     let occurs;
//     let arrVal;

//     for(let i = 1; i<=n; i++){
        
//         if(arr[i-1]!==i){
//             occurs = arr[i-1];
//             missing = i;
//             return [occurs, missing];
//         }
//     }
// }


// console.log(findTwoElement([1,2,3,3],4));


///---------------------------------------

// const stockBuySell = (A, n) =>{

//     // let listBuySell = [];
//     // let buy = 0;
//     // let sell = 0;

//     // let gVal = A[0];

//     // for(let i = 0; i<n-1; i++){

        

//     //     if(gVal<A[i]){
//     //         sell = i;
//     //     }

//     //     gVal = A[i];
//     // }

//     let pairVal = new Array(4);
//     let buy = 0;
//     let sell = 0;



// }

// const arr = [1,2,3,4];

// let firstString = 'Ilbert castilLo caballo and gallo';
// let secondString = firstString.replace(/l/g,'m');
// console.log(secondString);




//Recursive function
// const countDown = (fromNumber) => {

//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if(nextNumber >0){ 
//         countDown(nextNumber);
//     }
// }

// countDown(3);

//HackerRank: Convert 12hour to 24hour
// const timeConversion = (s) => {

//     let militaryHour = '';
//     let traditionalH = s.substring(0, 8);
//     let arrTraditionalH = traditionalH.split(':');

//     if(s[s.length - 2] !== 'A' && arrTraditionalH[0] !== '12' ){
//         arrTraditionalH[0] = ((+arrTraditionalH[0]) + 12).toString();
//     }

//     if(arrTraditionalH[0] === '12' && s[s.length - 2] === 'A'){
//         arrTraditionalH[0] = '00';
//     }

//     for(let i = 0; i<3; i++){

//         militaryHour += arrTraditionalH[i];

//         if(i<2) militaryHour+=':';
//     }

//     return militaryHour;
// }

// timeConversion('12:45:54PM');

//HacerRank: Apple and Orange

// const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
//     // Write your code here
//     let oragenHouse = 0;
//     let appleHouse = 0;

//     for(let i = 0; i<apples.length; i++){

//         if((a+apples[i])>=s && (a+apples[i])<=t){
//             appleHouse++;
//         }

//     }

//     for(let i = 0; i<oranges.length; i++){

//         if((b+oranges[i])>=s && (b+oranges[i])<=t){
//             oragenHouse++;
//         }

//     }

//     // return [appleHouse, oragenHouse];
//     // console.log({appleHouse, oragenHouse});
//     console.log(appleHouse);
//     console.log(oragenHouse);

// }

// countApplesAndOranges(7, 10, 4, 12, [ 2, 3, -4], [3,-2,-4]);

//HackerRank: Number Line Jumps

// const kangaroo = (x1, v1, x2, v2) => {
//     // Write your code here

//     while(x2<=100000000){

//         if(x1===x2){
//             return 'YES';
//         }

//         x1+=v1;
//         x2+=v2;
//     }

//     return 'NO';
// }

// console.log(kangaroo(1571,4240,9023,4234));

//HackerRank: Between Two Sets
// const getTotalX = (a, b) => {
//     // Write your code here
//     let rightValues = [];
//     let count = 0;
//     const maxNumber = (Math.max(...a)>Math.max(...b)? Math.max(...a):Math.max(...b));

//     for(let i = 1; i<= maxNumber; i++){

//         for(let j = 0; j<a.length; j++){

//             if(i%a[j]===0){
//                 count++;
//             }
//         }

//         for(let k = 0; k<b.length; k++){
            
//             if(b[k]%i===0){
//                 count++;
//             }
//         }

//         if(count === (b.length + a.length)){
//             rightValues.push(i);
//         }

//         count = 0;
//     }

//     // console.log({rightValues});
//     return rightValues;
// }

// getTotalX([2,6], [24,36]);


//HackerRank: Breaking the Records
// const breakingRecords = (scores) => {
//     // Write your code here
//     let breakBest = 0;
//     let breakWorst = 0;
//     let bestValue = scores[0];
//     let worstValue = scores[0];

//     for(let i = 0; i< scores.length; i++){

//         if(scores[i] > bestValue){
//             breakBest++;
//             bestValue = scores[i];
//         }

//         if(scores[i]<worstValue){
//             breakWorst++;
//             worstValue = scores[i];
//         }

//     }

//     return [breakBest, breakWorst];

// }
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);


// const functionAsyncAwait = async (arr, callback) => {

//     return callback(arr);
// }


// const functionPromise = (valor) => {

//     const testPromise = new Promise((resolve, reject) => {
        
//         if(valor) resolve('Promise resolved');

//         reject('The promise was not resolved');

//     });

//     return testPromise;
// }


// functionPromise(false)
//     .then(msg => console.log(msg))
//     .catch(msg => console.log(msg));

// const testAsyncFunction = async() => {

//     const msg = await functionPromise(true);
//     console.log(msg);
// }

// testAsyncFunction();



// const arrayNubers = [1,24,4,5,6,56,7,6,44,33,56,75,98];
// let evenNumbers = [];

// evenNumbers = functionAsyncAwait(arrayNubers, (array) => {

//         const evenArray = array.filter(v => v%2 ===0);
//         return evenArray;
// });

// console.log(evenNumbers);

//HackerRan: Subarray Division

// const birthday = (s, d, m) => {
//     // Write your code here
//     let sum = 0;
//     let count = 0;
//     let execution = 0;
//     let j;

//     for(let i = 0; i<s.length; i++){

//         j = i;

//         while(execution<m){
//             sum += s[j];
//             j++;
//             execution++;
//         }

//         if(sum === d){
//             count++;
//         }

//         execution = 0;
//         sum = 0;
//     }

//     return count;
// }

// birthday([1,2,1,3,2],3,2);

//HackerRank:Divisible Sum Pairs
// const divisibleSumPairs = (n, k, ar) =>{
//     // Write your code here
//     let count = 0;

//     for(let i = 0; i<n; i++){

//         for(let j = 0; j<n; j++){
           
//             if(i!==j && (ar[i]+ar[j])% k === 0)
//             {
//                 count++;
//             }
//         }
//     }

//     return count / 2;
// }

// divisibleSumPairs(6,3,[1,3,2,6,1,2]);

//HackerRank: Migratory Birds
// const migratoryBirds = (arr) => {
//     // Write your code here
//     const elementCounts = {};
//     let countSame = [];
//     let indexs = [];
//     let mayorValue;
//     const nameProperties = []
//     let valueProperties;

//     arr.forEach(element => {
//         elementCounts[element] = (elementCounts[element] || 0) + 1;
//     });

//     Object.keys(elementCounts).forEach(element => nameProperties.push(+element));

//     valueProperties = Object.values(elementCounts);
//     mayorValue = Math.max(...valueProperties);

//     indexs = valueProperties.filter(v => v === mayorValue);

//     if(indexs.length>1){
        
//         return Math.min(...indexs.forEach((element, index) => nameProperties.filter(v => v === index))); 

//     }else{

//         return nameProperties[indexs[0]];
//     }
// } 

// migratoryBirds([1, 2, 3, 4, 5, 4, 2, 1, 3, 4]);




// const migratoryBirds = (arr) => {
//     // Write your code here

//     const elementCounts = {};
//     let namePropertiesNum = []
//     let countSame = [];
//     let indexs = [];
//     let mayorValue;
//     let minor;

//     arr.forEach(element => {
//         elementCounts[element] = (elementCounts[element] || 0) + 1;
//     });

//     const nameProperties = Object.getOwnPropertyNames(elementCounts);

//     for(let i = 0; i< nameProperties.length; i++){

//         namePropertiesNum.push(+nameProperties[i][nameProperties[i].length-1]);
//     }

//     const valueProperties = Object.values(elementCounts);
//     mayorValue = Math.max(...valueProperties);

//     for(let i = 0; i<valueProperties.length; i++){

//         if(valueProperties[i] === mayorValue){
//             indexs.push(i);
//         }
//     }

//     if(indexs.length>1){

//         for(let i = 0; i<indexs.length; i++){

//             countSame.push(namePropertiesNum[indexs[i]]);
//         }

//         minor = Math.min(...countSame);
//     }else{

//         minor = namePropertiesNum[indexs[0]];
//     }

//     return minor;
//     // console.log(minor);
// } 

// migratoryBirds([1, 2, 3, 4, 5, 4, 2, 1, 3, 4]);