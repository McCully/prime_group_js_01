var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var bonus = [];
var bonusA;
var bonusB;
var bonusC;
var bonusD;

var bonusFinder = function(){
for(var i=0;i < employees.length; i++){
  if(employees[i][3] <= 2){
    var bonusA = "No bonus";
    bonus.push(bonusA);
  } else if (employees[i][3] == 3) {
    if(years()){
      bonus.push(bonusB);
    }
    }else if(employees[i][1].length == 4){
    var bonusB = (employees[i][2] * 1.04);
    bonus.push(bonusB);

  } else if (employees[i][3] == 4){
    var bonusC = (employees[i][2] * 1.06);
    bonus.push(bonusC);
  } else if (employees[i][3] == 5){
    var bonusD = (employees[i][2] * 1.10);
    bonus.push(bonusD);
  }



}

}
var years = function(){
  for(var i =0; i < employees.length; i++){
  if(employees[i][1].length ==4)
  bonusA = employees[i][2]* 1.09;
}
}
bonusFinder();
console.log(bonus);
