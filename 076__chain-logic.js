// 3/2/2020
// another method of the day!

// having to make these up myself at this point

let logicChainP = document.getElementById('logicChainP');

function testChainLogic(){
    if(true && 1 || true && 0 || !true && !0){
        // logicChainP.innerHTML = 'true';
        if(true && 1){
            logicChainP.innerHTML = 'true && 1 === true';
        }else {
            logicChainP.innerHTML = 'true && 0 === true';
        }
    } else{
        logicChainP.innerHTML = 'false';
    }
}

// This one was pretty lazy :/... but I've done plenty of other coding today





