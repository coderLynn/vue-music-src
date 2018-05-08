export function addClass(el,className){
  if(hasClass(el,className)){
    return
  }
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}
export function hasClass(el,className){
  let reg = new RegExp('^')//使用正则验证

}
