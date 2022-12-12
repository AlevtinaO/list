let count=0
function addTask () {
  let title = document.getElementById ("title")  
  let ol = document.getElementById ("ol") 
  let input = document.getElementById ("input")
  let value = input.value
  let error = document.getElementById ("error") 

  count = count+1
  ol.innerHTML = ol.innerHTML + "<li>" + value + "</li>" 
  if (count>5) {
    error.innerHTML = "Можно ввести не больше 5 дел!" 
  }
}
  


let username = prompt ("Введите своё имя:")
let title = document.getElementById ("title")
if(username) {
  title.innerHTML = "Ваш список дел," +username + ":"
}
else {
  title.innerHTML = "Ваш список дел, анонимный пользователь!"
}



