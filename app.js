console.log('wazzup')

const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Chocolate', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Birthday Cake', price: 2, quantity: 0, type: 'scoop' },
  { name: 'Moose Tracks', price: 2.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' },
  { name: 'Bowl', price: 0, quantity: 0, type: 'vessel' },
  { name: 'Sugar Cone', price: 0.25, quantity: 0, type: 'vessel' },
  { name: 'Waffle Cone', price: 0.50, quantity: 0, type: 'vessel' }
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
  let orderContent = ''
  let orderElement = ''
  orderElement = document.getElementById('cart')
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.quantity > 0) {
      orderContent +=
        `<tr>
          <td>${item.name}</td>
          <td>x${item.quantity}</td>
          <td>$${item.price}</td>
          <td>$${(item.quantity * item.price).toFixed(2)}</td>
        </tr>`
    }
  }
  orderElement.innerHTML = orderContent

  let grandTotal = calcTotal()
  document.getElementById('total').innerText = '$' + grandTotal.toFixed(2)
}

// function freeStuff() {
//   for (let i = 0; i < iceCream.length; i++) {
//     let item = iceCream[i]
//     let bowl = iceCream[9]
//     if (item.quantity <= 2) {
//       item.price = 0
//     }
//   }
// }
