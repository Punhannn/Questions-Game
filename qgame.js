var questions = document.querySelector(".questions")
var score = document.querySelector(".score")
var wrong = document.querySelector(".wrong")
var dogru = 0
var yanlis = 0
var suallar = [[["Azerbaycanin paytaxti Bakidirmi?"], ["t"]],
[["Sen frontend oyrenirsen?"], ["t"]],
[["BMW Mers den daha gozeldi?"], ["f"]]]
index = 0
questions.innerText = suallar[index][0]
window.onkeypress = function (e) {
    if (index == suallar.length) {
        alert("Oyun bitdi tesekkurler!")
    }
    else {
        if (e.key == "t" || e.key == "f") {
            if (suallar[index][1] == e.key) {
                dogru++
                score.innerText = dogru
                index++
                questions.innerText = suallar[index][0]

            }
            else {
                yanlis++
                wrong.innerText = yanlis
                index++
                questions.innerText = suallar[index][0]
            }
        }
        else {
            alert("Zehmet olmasa t ya da f e basin")
        }
    }


}
