console.log('wazzup')

const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Chocolate', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]

function orderItem(itemName) {
  let itemOrdered = null
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.name == itemName) {
      itemOrdered = item
    }
  }
  itemOrdered.quantity++
  console.log(itemOrdered)
  drawOrder()
}

function calcTotal() {
  let total = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i];
    total += item.price * item.quantity
  }
  console.log(total)
  return total

}

function drawOrder() {
  let grandTotal = calcTotal()
  document.getElementById('total').innerText = grandTotal.toFixed(2)
}
