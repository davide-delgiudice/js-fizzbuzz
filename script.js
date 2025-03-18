// creato ciclo for;
for (let i=1; i<=100; i=i+1){
    // primo if che stabilisce se i è divisibile per 3 e 5;
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    }
    // secondo if che stabilisce se i è divisibile per 3;
    else if(i % 3 == 0){
        console.log(`${i} Fizz`);
    }
    // terzo if che stabilisce se i è divisibile per 5;
    else if(i % 5 == 0){
        console.log(`${i} Buzz`);
    }
    // stampa del numero non divisibile per i valori sopracitati;
    else{
        console.log(i);
    }
}