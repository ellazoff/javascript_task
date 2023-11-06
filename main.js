// task 1

function automateCustomerRegistration() {
    const lastName = prompt("Enter your last name:"); // Prompt for last name
    const firstName = prompt("Enter your first name:"); // Prompt for first name
    let email;
  
    do {
      email = prompt("Enter your email address:");
  
      if (!isValidEmail(email)) {
        alert("Invalid email address. Please enter a valid email address.");
      }
    } while (!isValidEmail(email));
  
    const formattedString = `${email} - ${lastName} ${firstName}`;
  
    return formattedString;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  

  const registrationInfo = automateCustomerRegistration();
  console.log(registrationInfo);
  
// -------------------------------------------------------------------------------------------------------------------------


//   task 2

// function calculateDeliveryCost() {
//     const fixedRate = 5; // Fixed rate in AZN
//     const ratePerKilometer = 0.25; // Rate per kilometer in AZN
  
//     const distanceInKilometers = parseFloat(prompt("Enter the distance in kilometers:"));
  
//     if (isNaN(distanceInKilometers) || distanceInKilometers < 0) {
//       alert("Invalid input. Please enter a valid positive number for the distance.");
//       return;
//     }
  
//     const deliveryCost = fixedRate + ratePerKilometer * distanceInKilometers;
//     return deliveryCost;
//   }
  
//   const cost = calculateDeliveryCost();
  
//   if (cost !== undefined) {
//     console.log(`The cost of delivery is ${cost} AZN.`);
//   }


  // -------------------------------------------------------------------------------------------------------------------------




// task 3
// function calculateReceiptAmount() {
//     const name = prompt('Enter the product name:');
//     const unitPrice = parseFloat(prompt('Enter the unit price:'));
//     const quantity = parseInt(prompt('Enter the quantity:'), 10);
//     const participatesInPromotion = prompt('Does the product participate in the promotion ?(yes/no)');
  
//     let cost = unitPrice * quantity;
  
//     if (quantity >= 5) {
//       cost *= 0.9; // Apply a 10% discount for quantity >= 5
//     }
  
//     if (participatesInPromotion === 'yes') {
//       cost *= 0.85; // Apply a 15% discount if the product participates in the promotion
//     }
  
//     return cost;
//   }
  
//   // Example usage:
//   const product1 = calculateReceiptAmount();
//   const product2 = calculateReceiptAmount();
//   const totalAmount = product1 + product2;
  
//   console.log('Total Receipt Amount: $' + totalAmount);
  


// -------------------------------------------------------------------------------------------------------------------------



//   task4
// function suggestTable(numGuests) {
//     if (numGuests <= 2) {
//       return 'You should sit at a Small table.';
//     } else if (numGuests <= 4) {
//       return 'You should sit at a Medium table.';
//     } else if (numGuests <= 8) {
//       return 'You should sit at a Large table.';
//     } else {
//       return 'Sorry, we cannot accommodate a group of more than 8 people at one table.';
//     }
//   }
  
//   // Example usage:
//   const numGuests = parseInt(prompt('Enter the number of guests:'));
//   const suggestion = suggestTable(numGuests);
//   console.log(suggestion);
  


// -------------------------------------------------------------------------------------------------------------------------




// task5
// function printDescendingOrder() {
//     const numbers = [];
//     for (let i = 1; i <= 3; i++) {
//       numbers.push(parseFloat(prompt(`Enter temperature in country ${i}:`)));
//     }
//     numbers.sort((a, b) => b - a);
//     console.log('Temperatures in descending order:');
//     console.log(numbers.join('\n'));
//   }
  
//   printDescendingOrder();



// -------------------------------------------------------------------------------------------------------------------------




// task6
  
// function checkDiscountEligibility() {
//     const name = prompt('Enter customer name:');
//     const age = parseInt(prompt('Enter customer age:'), 10);
//     const numOrders = parseInt(prompt('Enter the number of orders:'), 10);
//     const orderAmounts = [];
  
//     for (let i = 1; i <= numOrders; i++) {
//       orderAmounts.push(parseFloat(prompt(`Enter order amount for order ${i}:`)));
//     }
  
//     const totalOrderAmount = orderAmounts.reduce((a, b) => a + b, 0);
  
//     if (age > 60 || (numOrders >= 4 && totalOrderAmount >= 100)) {
//       return `${name} qualifies for a discount`;
//     } else {
//       return `${name} does not qualify for a discount`;
//     }
//   }
  
//   const eligibility = checkDiscountEligibility();
//   console.log(eligibility);
  



// -------------------------------------------------------------------------------------------------------------------------




// task7
// function isSmallShipment() {
//     const length = parseFloat(prompt('Enter the length (in cm):'));
//     const width = parseFloat(prompt('Enter the width (in cm):'));
//     const height = parseFloat(prompt('Enter the height (in cm):'));
//     const weight = parseFloat(prompt('Enter the weight (in kg):'));
//     const distance = parseFloat(prompt('Enter the delivery distance (in km):'));
  
//     if (
//       length + width + height <= 150 &&
//       length <= 100 &&
//       width <= 100 &&
//       height <= 100 &&
//       weight <= 10 &&
//       distance >= 3 && distance <= 10
//     ) {
//       return 'This is a small shipment.';
//     } else {
//       return 'This is not a small shipment.';
//     }
//   }
  
//   const result = isSmallShipment();
//   console.log(result);
  
  



// -------------------------------------------------------------------------------------------------------------------------





//   task8

// function numberToText() {
//     const number = parseInt(prompt('Enter a two-digit number:'), 10);
//     const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
//     if (number < 10) {
//       console.log(ones[number]);
//     } else if (number < 20) {
//       console.log(teens[number - 10]);
//     } else {
//       const tensDigit = Math.floor(number / 10);
//       const onesDigit = number % 10;
//       console.log(tens[tensDigit] + (onesDigit === 0 ? '' : ' ' + ones[onesDigit].toLowerCase()));
//     }
//   }
  
//   numberToText();
  



// -------------------------------------------------------------------------------------------------------------------------





// task9

// function printDivisibleNumbers() {
//     const userNumber = parseInt(prompt('Enter a number:'), 10);
  
//     console.log(`Numbers between 1 and 1000 divisible by ${userNumber}:`);
//     for (let i = 1; i <= 1000; i++) {
//       if (i % userNumber === 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   printDivisibleNumbers();






// -------------------------------------------------------------------------------------------------------------------------





// task10
// function calculateSavings() {
//     const initialAmount = parseFloat(prompt('Enter the initial amount:'));
//     const durationInYears = parseInt(prompt('Enter the duration in years:'), 10);
//     const annualInterestRate = parseFloat(prompt('Enter the annual interest rate in %:')) / 100;
  
//     let finalAmount = initialAmount * Math.pow(1 + annualInterestRate, durationInYears);
  
//     return finalAmount;
//   }
  
//   const result = calculateSavings();
//   console.log('The amount of savings after the deposit expires: ' + result.toFixed(2));



// -------------------------------------------------------------------------------------------------------------------------




//   task11

// function calculateLoyaltyPoints(orderNumber) {
//     if (orderNumber <= 0) {
//       return 0;
//     } else if (orderNumber <= 2) {
//       return 1;
//     }
  
//     let prev1 = 1;
//     let prev2 = 1;
//     let currentPoints = 0;
  
//     for (let i = 3; i <= orderNumber; i++) {
//       currentPoints = prev1 + prev2;
//       prev2 = prev1;
//       prev1 = currentPoints;
//     }
  
//     return currentPoints;
//   }
  
//   const orderNumber = parseInt(prompt('Enter the order number:'), 10);
//   const loyaltyPoints = calculateLoyaltyPoints(orderNumber);
//   console.log(`Loyalty Points for order ${orderNumber}: ${loyaltyPoints}`);
  


// -------------------------------------------------------------------------------------------------------------------------




// task12
// function sumDigitsOfCode() {
//     const code = prompt('Enter your individual code:');
//     const digits = code.split('').map(Number);
//     const sum = digits.reduce((acc, digit) => acc + digit, 0);
//     return sum;
//   }
  
//   const codeSum = sumDigitsOfCode();
//   console.log('Sum of the digits of your individual code: ' + codeSum);




// -------------------------------------------------------------------------------------------------------------------------




// task13
// function calculateOptimalBanknotes() {
//     let amountRequested = parseInt(prompt('Enter the amount requested (in AZN):'), 10);
//     const banknoteDenominations = [100, 50, 20, 10, 5, 1];
//     const banknotes = {};
  
//     for (const denomination of banknoteDenominations) {
//       if (amountRequested >= denomination) {
//         banknotes[denomination] = Math.floor(amountRequested / denomination);
//         amountRequested %= denomination;
//       }
//     }
  
//     return banknotes;
//   }
  
//   const optimalBanknotes = calculateOptimalBanknotes();
//   console.log('Optimal banknotes for the requested amount:', optimalBanknotes);
  
  
  
  
  
  
  