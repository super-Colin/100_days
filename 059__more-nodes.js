// 2/14/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/
// https://www.w3schools.com/jsref/met_node_comparedocumentposition.asp

function testComparePosition() {
    let testNode = document.getElementById('title');
    let parentNode = testNode.parentNode;

    document.getElementById('info-text').innerHTML = 'title node : ' + testNode;
    document.getElementById('output-text').innerHTML = 'Parent node is : ' + parentNode;
    document.getElementById('output-text2').innerHTML = 'comparePosition returns: ' + testNode.compareDocumentPosition(parentNode);


    console.log('---------');
    console.log('comparePosition returns : ');
    console.log(testNode.compareDocumentPosition(parentNode));
    document.getElementById('output-text3').innerHTML = '';
}
// THIS WILL RETURN 10: 8 meaning testNode is inside parentNode, and 2 meaning testNode is after parentNode in the DOM

// The compareDocumentPosition() method compares two nodes, and returns an integer describing where they are positioned in the document.

// var x = p1.compareDocumentPosition(p2);
// return values would specify:

// 1: No relationship, the two nodes do not belong to the same document.

// 2: The first node(p1) is positioned after the second node(p2).

// 4: The first node(p1) is positioned before the second node(p2).

// 8: The first node(p1) is positioned inside the second node(p2).

// 16: The second node(p2) is positioned inside the first node(p1).

// 32: No relationship, or the two nodes are two attributes on the same element.

// Note: The
// return value could also be a combination of values.I.e.the returnvalue 20 means that p2 is inside p1(16) AND p1 is positioned before p2(4).



function testCloneNode() {
    let inputNode = document.getElementById('input-text');
    let outputSpot = document.getElementById('blank-div');

    outputSpot.appendChild(inputNode.cloneNode());

}


