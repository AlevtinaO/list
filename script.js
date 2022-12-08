let count=0
function addTask () {
  let title = document.getElementById ("title")  
  let ol = document.getElementById ("ol") 
  let input = document.getElementById ("input")
  let value = input.value

  count = count+1
  ol.innerHTML = ol.innerHTML + "<li>" + value + "</li>" 
}
 


