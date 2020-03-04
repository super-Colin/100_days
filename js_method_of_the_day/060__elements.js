// 2/14/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/
// https://www.w3schools.com/jsref/met_node_comparedocumentposition.asp

function testGetAttribute() {
    let testNode = document.getElementById('title');
    let parentNode = testNode.parentNode;

    document.getElementById('info-text').innerHTML = 'title node, element id attribute : ' + testNode.getAttribute('id');
    document.getElementById('output-text').innerHTML = 'title node, node id attribute : ' + testNode.getAttributeNode('id');
    document.getElementById('output-text2').innerHTML = ' ';
    document.getElementById('output-text3').innerHTML = '';


    console.log('---------');
    console.log('title node, element id attribute : : ');
    console.log(testNode.getAttribute('id'));
    console.log('title node, node id attribute : : ');
    console.log(testNode.getAttributeNode('id'));

}


function testGetElementsByTagName() {
let tagName = document.getElementById('input-text').value;
let collection = document.getElementsByTagName(tagName);
for(let item of collection){
    console.log(item);
    item.style.backgroundColor = 'red';
}


}
