// This is a JavaScript file

//メニュー用Java
document.querySelector('.hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})


//チェックボックスを取得する
const el = document.getElementsByClassName("text_center");
//カウントボタンを取得する
const btn = document.getElementById("btn");

//チェック済みのチェックボックスの数を返す
const getCheckedCount = () => {

    let count = 0;

    for (let i = 0; i < el.length; i++) {
        if (el[i].checked) {
            count++;
        }
    }
    document.querySelector("h2").innerText = count;
    console.log('カウントした',count);
    //値を渡す
    document.getElementById('ati').addEventListener('click', function() {
  const kazu = count;
  window.location.href = `index.html?value1=${kazu}`;
  console.log("渡した値",count);
});
};

//ボタンをクリックした時に「getCheckedCount()」を呼び出す
btn.addEventListener("click", getCheckedCount, false);



// 値を受け取る
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');
console.log('受け取った値:', value);
