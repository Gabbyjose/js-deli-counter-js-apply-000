
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var current = katzDeliLine.unshift();
    return "Now serving " + current;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}