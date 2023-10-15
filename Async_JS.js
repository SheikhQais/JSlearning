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