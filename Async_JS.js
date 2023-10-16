/*
Sync:
 sync ka matalb step by step kisi kaam ko krna mtlab jab 1 operation start kro ga wo khatam hoga
 phir dosra task kro ga phir next and so on...
 For Example: Ludo game, when a partipant have his turn and when it's turn completed then next participant have his turn
 e.g following codes
1)
 function canVote(age) {
  if (age >= 18) {
    return "You can vote!";
  } else {
    return "You cannot vote yet.";
  }
}
const personAge = 18; // Change this age to check eligibility
console.log(canVote(personAge));

2)
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
function printPrimesInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimesInRange(1, 100);

 Async: 
 Async ka mtlab k ek sath aap different tasks ko start krte han 
 jis ka result pehla aye ga aap us ka result print krwa deta ho.

 For Example: A MotoGP bike race all racers start the riding aur jo pehla ye ga wo first then second and so onn.
 e.g using 
            setTimeOut()
            setInterval()
            promises
            callback()
            fetch()
            axios()
            XMLHttpRequest  etc
 */ 

            // JavaScript is not Asynchronous  AND JavaScript is single threaded language not multi-thread
            console.log(5);
            console.log(4);
setTimeout(function(){
    console.log(8)    /* Event Loop , Main Stack and Side Stack*/
},0);
console.log(6);        console.log(7);

/* CallBack => function
    fetch
    axios
    promises
    settimeout
    setinterval

    then, 
        catch
        callbacks
        async await

callbck: is always a function, ye tb chalta ha jb Async code complete ho jata ha
    setTimeout(function(){},0) => function(){} This is a callback function
                fetch
                axios
                promises
                settimeout
                setinterval
                    Ye functions Async code ka operation ko complete krne k liye use hota han 
                    
                    Operation ki output ko chalanay k liye neechay diye gaye functions use hota han
                            catch
                            callbacks
                            async await
Promises: 
    Promises has two states:
        1) Resolve -> then(function(){
            console.log('Resolved')
        });
        2) Rejected -> catch(function(){
            console.log('Rejected')
        });

                            
*/

