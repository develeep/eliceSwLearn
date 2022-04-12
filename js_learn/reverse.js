function reverse(str){
  reverStr = "";
  for (var i = str.length - 1;i >= 0; i --){
    reverStr= reverStr + str.charAt(i);
  }
  return reverStr;

}