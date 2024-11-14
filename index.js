

/*document.getElementById("count-el").innerText = 1;

let myAge = 50;
console.log(myAge);

let firstBatch = 0;
let secondBatch = 1;
let count = firstBatch + secondBatch;

console.log(count);

document.getElementById("increment-btn").addEventListener("click", function() {
    count++;
    document.getElementById("count-el").innerText = count;
});
*/
let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count= count + 1;
    countEl.innerText = count;
}
function save() {
    let countstr = count + "-";
    saveEl.innerHTML = logmsg;

    count = 0;
}