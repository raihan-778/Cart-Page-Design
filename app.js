// console.log('script connected')
//Caching the Dom element
//First book
qntBookOne = document.querySelector('#quantity-box-1');
incrementBookOne = document.querySelector('#increment1');
decrementBookOne = document.querySelector('#decrement1');
rmvBookOne = document.querySelector('#rmv-btn1');
bookOnePrice = document.querySelector('#price1');
bookOne = document.querySelector('#cart-item1')
alertOne = document.querySelector('#alert-message1')
closeOne = document.querySelector('#close1')

//second book price
qntBookTwo = document.querySelector('#quantity-box-2');
incrementBookTwo = document.querySelector('#increment2');
decrementBookTwo = document.querySelector('#decrement2');
rmvBookTwo = document.querySelector('#rmv-btn2');
bookTwoPrice = document.querySelector('#price2');
bookTwo = document.querySelector('#cart-item2')
alertTwo = document.querySelector('#alert-message2')
closeTwo = document.querySelector('#close2');
//rest of the elements are
undoOne = document.querySelector('#alert-link1');
undoTwo = document.querySelector('#alert-link2');
cartTotal = document.querySelector('#cart-total');
subtotal = document.querySelector('#subtotal')

//bookOne cart update

rmvBookOne.addEventListener('click', function(){
bookOne.style.display = 'none';
alertOne.style.display = 'block';
})
undoOne.addEventListener('click', function(){
    bookOne.style.display = 'block';
    alertOne.style.display = 'none';

})
closeOne.addEventListener('click', function(){
    alertOne.style.display = 'none';
})
//increment book one
incrementBookOne.addEventListener('click', function(){
   
    let itemPrice = 204; 
  qntBookOne.value = Number(qntBookOne.value) + 1;
  bookOnePrice.innerText = itemPrice * Number(qntBookOne.value)

})
//decrement book one
decrementBookOne.addEventListener('click', function(){
  if(Number(qntBookOne.value) >1 ){
    let itemPrice = 204;
  qntBookOne.value = Number(qntBookOne.value) - 1  ;
  bookOnePrice.innerText = itemPrice * Number(qntBookOne.value)
}else alert("You need to add atleast one item into the cart")
})

//bookTwo cart update

rmvBookTwo.addEventListener('click', function(){
    bookTwo.style.display = 'none';
    alertTwo.style.display = 'block';
    })
    undoTwo.addEventListener('click', function(){
        bookTwo.style.display = 'block';
        alertTwo.style.display = 'none';
    
    })
    closeTwo.addEventListener('click', function(){
        alertTwo.style.display = 'none';
    })
   
//increment book Two
incrementBookTwo.addEventListener('click', function(){
    let itemPrice = 128;
  qntBookTwo.value = Number(qntBookTwo.value) + 1;
  bookTwoPrice.innerText = itemPrice * Number(qntBookTwo.value)
})

//decrement book Two
decrementBookTwo.addEventListener('click', function(){
  if(Number(qntBookTwo.value) >1 ){
    let itemPrice = 128;
  qntBookTwo.value =  Number(qntBookTwo.value) - 1  ;
  bookTwoPrice.innerText = itemPrice * Number(qntBookTwo.value)
}else alert("You need to add atleast one item into the cart")
})