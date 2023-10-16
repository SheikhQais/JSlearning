    /*
    Async Await =>
            koi bhi esa function jis ma aap async code likhein ga, kyun k async code ha tou aap Promises ka 
            use kr sakty han, jb uska answer aye ga aap ko then() lgana paray ga, us ko laganay se bachne k liye aap
            ko "await" ka istemal krna paray ga
    */

            async function abcd(){
                let raw = await fetch('https://randomuser.me/api/');
                let ans = await raw.json();
                console.log(ans);
            }
        
            abcd();