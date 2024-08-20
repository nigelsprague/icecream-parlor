console.log('wazzup')

const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Chocolate', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]
let orderTotal = 0

function orderItem(selectedItem) {
  console.log(selectedItem)
  for (let i = 0; i < iceCream.length; i++) {
    let itemElement = iceCream[i]
    if (itemElement.name == selectedItem) {
      console.log(i, selectedItem, itemElement)
    }

  }
}