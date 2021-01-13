document.getElementById('submit').addEventListener("click", size);
function size() {
  let size = document.querySelector('input[name="size"]:checked').value
  let topping = document.querySelector('input[name="topping"]:checked').value
if ((size === 'large') && (topping === 'topping1')){
  alert('The price is $7.91,thank you!')
}
else if ((size === 'large') && (topping === 'topping2')){
  alert('The price is $8.76,thank you!')
}
else if ((size === 'large') && (topping === 'topping3')){
  alert('The price is $9.61,thank you!')
}
else if ((size === 'large') && (topping === 'topping4')){
  alert('The price is $10.57,thank you!')
}
if ((size === 'extraLarge') && (topping === 'topping1')){
  alert('The price is $12.43,thank you!')
}
else if ((size === 'extraLarge') && (topping === 'topping2')){
  alert('The price is $13.28,thank you!')
}
else if ((size === 'extraLarge') && (topping === 'topping3')){
  alert('The price is $14.13,thank you!')
}
else if ((size === 'extraLarge') && (topping === 'topping4')){
  alert('The price is $15.09,thank you!')
}
}