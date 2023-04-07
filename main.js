const subjects = ['You', 'Your', 'Reminder:'];
const verbs = ['are', 'will', 'can'];
const noun = ['hard work', 'dedication', 'resilience'];
const complementArr1 = ['great', 'capable', 'strong'];
const complementArr2= ['succeed','accomplish anything', 'see results', 'improve'];
const componentsArray = [subjects, verbs, noun, complementArr1, complementArr2];

const messageGen = arr =>{
    let motPhrase = [];
    let randArr = [];
    for(let i=0; i<arr.length; i++){
        let randI = Math.floor(Math.random() * arr[i].length);
        randArr.push(randI); 
     }

     if(arr[0][randArr[0]] === 'Your'){
        motPhrase.push(arr[0][randArr[0]],arr[2][randArr[2]],' will help you ', arr[4][randArr[4]]);
     }else{
        for(let i=0; i<randArr.length; i++){
            motPhrase.push(arr[i][randArr[i]]);
        }
     }
     return motPhrase.toString();

}
console.log(messageGen(componentsArray));