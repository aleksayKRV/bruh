let str = '<a href="" class="eee" id="zzz">';
let arr = str.match(/["][a-z]{3}["]/g);
document.write(arr);
//я так и не выкупил как это должно было быть сделано