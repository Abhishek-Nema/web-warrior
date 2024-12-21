//example 1

document.getElementById("changeTextButton").addEventListener("click", function(){
  let myPara = document.getElementById("myParagraph")
  myPara.textContent = "the text has been changed!"
})

//example 2

document.getElementById("highlightFirstCity").addEventListener("click", function(){
  let cityList = document.getElementById("citiesList")
  // console.log(cityList);
  console.log(cityList.firstElementChild.classList.add("highlight"))
})

//example 3

document.getElementById("changeOrder").addEventListener("click", function(){
 let coffeeType =  document.getElementById("coffeeType");
 coffeeType.textContent = "Espresso"
})

//example 4

document.getElementById("addNewItem").addEventListener("click", function(){

})

//example 5


// example 6



// example 7



//example 8



//example 9



//example 10

