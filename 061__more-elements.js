// 2/15/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

function testHasAttribute() {
    let testNode = document.getElementById('title');

    document.getElementById('info-text').innerHTML = 'title element, hasAttribute(id) : ' + testNode.hasAttribute('id');
    document.getElementById('output-text').innerHTML = '';
    document.getElementById('output-text2').innerHTML = ' ';
    document.getElementById('output-text3').innerHTML = '';


    console.log('---------');
    // console.log('title node, element id attribute : : ');
    // console.log(testNode.hasAttribute('id'));
    // console.log('title node, node id attribute : : ');
    // console.log(testNode.hasAttributeNode('id'));

}


function testRemoveAttribute() {
    let testNode = document.getElementById('title');
    testNode.removeAttribute('id');

    document.getElementById('info-text').innerHTML = 'title element, hasAttribute(id) : ' + testNode.hasAttribute('id');

    document.getElementById('output-text').innerHTML = ''
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    
    console.log('after title has has its id attribute removed:')
    console.log(testNode);

}
