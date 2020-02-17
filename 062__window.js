// 2/15/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

function displayWindowProps() {

    document.getElementById('info-text').innerHTML = 'window.frames returns : ' + window.frames;
    document.getElementById('output-text').innerHTML = 'window.length returns : ' + window.length;
    document.getElementById('output-text2').innerHTML = 'window.history returns : ' + window.history;
    document.getElementById('output-text3').innerHTML = 'window.location returns : ' + window.location;


    console.log('---------');
    console.log('window.frames returns : ');
    console.log(window.frames);
    console.log('---------');

    console.log('window.history returns : ');
    console.log(window.history);
    console.log('---------');

    console.log('window.location returns : ');
    console.log(window.location);
    console.log('---------');

    console.log('window.name returns : ');
    console.log(window.name);
    console.log('window.name returns after being set : ');
    window.name = 'iSetTheWindowName';
    console.log(window.name);
    console.log('---------');
    // window.navigator tomorrow!!
}


function testOpenClose() {

    toClose = window.open('', 'toBeClosed');
    setTimeout(() => {toClose.close()},600);
    document.getElementById('info-text').innerHTML = '';

    document.getElementById('output-text').innerHTML = ''
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    
    // console.log('after title has has its id attribute removed:')
    // console.log(testNode);

}
