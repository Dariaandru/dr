const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");

const t1 = document.getElementById("t1");
// const t2 = document.getElementById("t2");
// const t3 = document.getElementById("t3");
// const t4 = document.getElementById("t4");
// const t5 = document.getElementById("t5");
const container = document.querySelector(".container");



n1.addEventListener("click", () => {
    t1.textContent = "Хочу чтобы ты был счаслив с нами и чтобы у тебя все получалось в жизни и мечты твои всегда сбывались. Когда ты счаслив мне становится очень спокойно.";
    t1.style.display = "block";
    container.style.display = "none";
})

t1.addEventListener("click", () => {
    t1.style.display = "none";
    container.style.display = "block";
})




n2.addEventListener("click", () => {
    t1.innerHTML = "Хочу чтобы у тебе на работе везло и не было проблем с ней. Чтобы побольше денег заработалось и ты все успевал и поспать тоже";
    t1.style.display = "block";
    container.style.display = "none";
})


t1.addEventListener("click", () => {
    t1.style.display = "none";
    container.style.display = "block";
})


n3.addEventListener("click", () => {
    t1.innerHTML = "Хочу чтобы ты поменьше болел и не худел. Чтобы у тебя сахар наладился и ты хорошо себя чувствовал. Я всегда люблю тебя угощать тем что я приготовила.";
    t1.style.display = "block";
    container.style.display = "none";
})


t1.addEventListener("click", () => {
    t1.style.display = "none";
    container.style.display = "block";
})


n4.addEventListener("click", () => {
    t1.innerHTML = "Хочу чтобы у тебя всегда любовь к Любочке чтобы было больше возможности встретиться всем в месте. Очень хочется чтобы вы почаще обнимались, мне становится очень радостно.";
    t1.style.display = "block";
    container.style.display = "none";
})

t1.addEventListener("click", () => {
    t1.style.display = "none";
    container.style.display = "block";
})

n5.addEventListener("click", () => {
    t1.innerHTML = "Хочу чтобы ты побольше радовался жизни, видел везде как можно больше хорошего, переживал меньше и всегда надеялся на хорошее. Когда ты радуешься я перестаю без причины грустить и плакать.";
    t1.style.display = "block";
    container.style.display = "none";
})

t1.addEventListener("click", () => {
    t1.style.display = "none";
    container.style.display = "block";
})