// 2/18/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

function displayMoreWindowProps() {

    document.getElementById('info-text').innerHTML = 'window.navigator returns : ' + window.navigator;
    document.getElementById('output-text').innerHTML = 'window.parent returns : ' + window.parent;
    document.getElementById('output-text2').innerHTML = 'window.screen returns : ' + window.screen;
    document.getElementById('output-text3').innerHTML = 'window.self returns : ' + window.self;


    console.log('---------');
    console.log('window.navigator returns : ');
    console.log(window.navigator);
    console.log('---------');

    console.log('window.parent returns : ');
    console.log(window.parent);
    console.log('---------');

    console.log('window.screen returns : ');
    console.log(window.screen);
    console.log('---------');

    console.log('window.self  returns : ');
    console.log(window.self);
    console.log('---------');


    console.log('window.status  returns : ');
    console.log(window.status);
    console.log('---------');
}



function testMoveBy() {
    let num = document.getElementById('input-number').value;
    let newWindow = window.open('', 'newWindow', 'width=200,height=200');

    if(num === 0 || num === ''){
        num = 100;
    }

    setTimeout(()=>{
        console.log('trying to move new window by ' + num + 'px');
        newWindow.moveBy(+num, +num)
    },800);

    setTimeout(() => {
        newWindow.close()
    }, 2000);

    document.getElementById('info-text').innerHTML = '';

    document.getElementById('output-text').innerHTML = ''
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    
    // console.log('after title has has its id attribute removed:')
    // console.log(testNode);

}
