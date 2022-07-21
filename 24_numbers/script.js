function solutions(){
    let l=0;
    let operators =['+','-','*','/'];
    let parentheses= ['', '(', ')']
    var solutions = new Array(10000)
    for (let i=0; i<10000; i++){
        solutions[i]=0;
    }

    for(let numbers1=1; numbers1<10; numbers1++){
        for(let numbers2=1; numbers2<10; numbers2++){
            for(let numbers3=1; numbers3<10; numbers3++){
                for(let numbers4=1; numbers4<10; numbers4++){
                    for(let operator1=0; operator1<4; operator1++){
                        for(let operator2=0; operator2<4; operator2++){
                            for(let operator3=0; operator3<4; operator3++){
                                let statement =numbers1 + operators[operator1] +  numbers2 + operators[operator2] + numbers3 + operators[operator3] + numbers4
                                let result = eval(statement)
                                if( result===24 ){
                                    let data =  [numbers1, numbers2, numbers3, numbers4];
                                    data = data.sort();
                                    let index = data[0]*1000 + data[1] *100 + data[2]*10 + data[3]*1
                                    solutions [index] =solutions [index] + 1;
                                }                        
                            }
                        }
                    }
                }
            }
        }
    }
    return(solutions)
}

var results = new Array(10000)
var difficulty = new Array(10000)

results = solutions();

for (let i=0; i<10000; i++){
    difficulty[i]=0;
    if( results[i]!=0){
        difficulty[i]=results[i];
    }
}
difficulty = difficulty.filter(difficulty => difficulty !=0);
console.log(difficulty)
let max=Math.max(...difficulty)
console.log(max)
for (let i=0; i<difficulty.length; i++){
    difficulty[i]= (1-(Math.round(difficulty[i]/max*10)/10))
}

for (let i=0; i<10000; i++){
    if( results[i]!=0){
        results[i]=i;
    }
}
results = results.filter(results => results != 0);

console.log(difficulty)

const fs = require('fs');
fs.writeFile("resultados.txt", "",  {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
    }, (err) => {
    if (err) throw err;
})
let toWrite="{ \n";
fs.writeFile("resultados.txt", toWrite,  {
    encoding: "utf8",
    flag: "a",
    mode: 0o666
    }, (err) => {
    if (err) throw err;
})
for (let i=0; i<results.length; i++){
    toWrite ="  options: "+ results[i] + " difficulty: " + difficulty[i] +'\n';
    fs.writeFile("resultados.txt", toWrite,  {
        encoding: "utf8",
        flag: "a",
        mode: 0o666
        }, (err) => {
        if (err) throw err;
    })
}
toWrite="} \n";
fs.writeFile("resultados.txt", toWrite,  {
    encoding: "utf8",
    flag: "a",
    mode: 0o666
    }, (err) => {
    if (err) throw err;
})