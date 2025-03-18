Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?

Creare un ciclo for con contatore uguale a 1;
La condizione di fine ciclo dovrà essere quando verrà stampato il 100;
L'incremento della variabile contatore sarà di 1;
Creare tre if interni;
Il primo if dovrà stabilire i multipli sia di 3 che di 5 e stampare FizzBuzz;
Il secondo if dovrà stabilire i multipli di 3 e stampare Fizz;
Il terzo if dovrà stabilire i multipli di 5 e stampare Buzz;
Per stabilire il multiplo dovremo usare la funzione resto all'interno degli if;
Se nessuno di questi if sarà vero, nell'else stamperemo il numero;