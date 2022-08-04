const Id  = (e) => document.getElementById(e);
const addClass = (e,clas) => document.querySelector(e).classList.add(clas)
const removeClass = (e,clas) => document.querySelector(e).classList.remove(clas)
const html = function(e,html) {
return Id(e).innerHTML = html();
}
