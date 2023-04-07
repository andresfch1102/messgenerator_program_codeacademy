const subjects = ['You','Your'];
const verbs = ['are', 'will', 'can'];
const noun = ['hard work','dedication','resilience'];
const complementArr1 = ['great', 'capable', 'strong'];
const complementArr2= ['succeed','accomplish anything','see results', 'improve'];
const componentsArray = [subjects, verbs, noun, complementArr1, complementArr2];

const messageGen = arr =>{
    let motPhrase = [];
    let randArr = [];
    for(let i=0; i<arr.length; i++){
        let randI = Math.floor(Math.random() * arr[i].length);
        randArr.push(randI); 
     }

     if(arr[0][randArr[0]] === 'Your'){
        motPhrase.push(arr[0][randArr[0]],arr[2][randArr[2]],'will help you', arr[4][randArr[4]]);
     }else{
      if(arr[1][randArr[1]] === 'can' || arr[1][randArr[1]] === 'will'){
         motPhrase.push(arr[0][randArr[0]], arr[1][randArr[1]], arr[4][randArr[4]]);
      }else{
         motPhrase.push(arr[0][randArr[0]], arr[1][randArr[1]], arr[3][randArr[3]]);
      }
     }
     return motPhrase.join(' ');

}
console.log(messageGen(componentsArray));