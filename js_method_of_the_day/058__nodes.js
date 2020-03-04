// 2/13/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/


function displayNodeProps() {
    let testNode = document.getElementById('title');
    let parentNode = testNode.parentNode;

    document.getElementById('info-text').innerHTML = '' ;
    document.getElementById('output-text').innerHTML = 'h1 Node is : ' + testNode;
    document.getElementById('output-text2').innerHTML = 'Parent node is : ' + parentNode;
    
    console.log('---------');
    console.log('title node properties : ');
    console.log(testNode.attributes);
    document.getElementById('output-text3').innerHTML = 'RESULT : ';
}



function testTextContent(){
    let string = document.getElementById('input-text').value;

    document.getElementById('output-text3').innerHTML = 'RESULT : ' + string;
    console.log(newDate);
}

function testAppendChild(){
    let string = document.getElementById('input-text').value;
    let node = document.createElement('p');
    node.textContent = string;
    document.getElementById('blank-div').appendChild(node);
}


