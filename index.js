let text = document.querySelector(".txt");
/*
let message = prompt("Запишите сообщение:")

function mess() {
  text.textContent = message;
}
setTimeout(mess, 1000);

*/
let bt = document.querySelector("#ftp");
bt.classList.add("ftp");
let tnt = 0; 
bt.addEventListener('click', ()=>{
    tnt += 1;
    bt.innerHTML = tnt;
    });

//
text.style.backgroundColor = "#1E6C75";
text.style.color = "#fff";
text.classList.add("cnt")
text.classList.add("pdd")
//console.log(text.classList);

let bl = document.querySelector("#block");
bl.classList.add("block01");

bl.addEventListener('click', ()=> bl.classList.toggle("block02"));

/*
text.textContent = "";  //Заполнение контентом
text.style. = "";
text.classList.add(""); // Добавить класс
text.classList.remove(""); // Удалить класс
let newText = document.createElement("p"); //Создание элемента
document.body.append(newText); // Добавить элемент в конец body

text.addEventListener('click', (функция))  // Обработчик события click (mouseover - наведение мыши и др.)
text.removeEventListener  // Удаление обработчика

startBtn.parentNode.removeGhild(startBtn) //удалить кнопку startBtn (разметка не сохраняется)
*/

//text.classList.add(""); // Добавить класс
//text.innerHTML = "New Content";
