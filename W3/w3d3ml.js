// Week 3 Day 3 Morning Lab
/*
OOP - Classes: Model a vending machine
When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks
- a vending machine is an object
- it has an array of snacks (make 3 snacks)
- snacks are objects that have a name and a price
- a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
- Be able to call vendingMachine.vend() with a valid integer to return a snack*/

const vendingMachine = {
  snacks: {
      name: 'Snickers',
      price: 2
    },
    {
      name: 'Doritos',
      price: 1
    },
    {
      name: 'Honey Buns',
      price: 3
    }
  ],
  vend(input) {
    console.log('vending', vendingMachine.snacks[input]);
  }
};

vendingMachine.vend(0);
