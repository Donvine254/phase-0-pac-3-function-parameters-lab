//I am writing my code here
function introduction(name){return`Hi, my name is ${name}.`;}
function introductionWithLanguage(name, language){return`Hi, my name is ${name} and I am learning to program in ${language}.`};
function introductionWithLanguageOptional(name, langauge="JavaScript"){return`Hi, my name is ${name} and I am learning to program in ${langauge}.`;}

//Call function here

console.log(introduction("Aki"));
console.log(introductionWithLanguage("Aki", "Ember.js"));
console.log(introductionWithLanguageOptional("Gracie"));
console.log(introductionWithLanguageOptional("Gracie","Python"));