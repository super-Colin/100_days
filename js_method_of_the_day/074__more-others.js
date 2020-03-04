// 2/29/2020
// another method of the day!

let otherScrollDivTimes = 0;
document.getElementById('otherScrollDiv').addEventListener('scroll', testScrollDiv);

function testScrollDiv(){
    document.getElementById('otherScrollDivP').innerHTML = 'scroll event listener triggered ' + otherScrollDivTimes;
    otherScrollDivTimes ++;
}


