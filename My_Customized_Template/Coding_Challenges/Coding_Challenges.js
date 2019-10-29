
//*****************************************************************************************************
//*****************************************************************************************************
//                                BASIC MATH FUNCTIONALITY
//*****************************************************************************************************
//*****************************************************************************************************

function mathCalc() {

    //Declare Variables

    //Calculation Variables
    var min;
    var max;
    var sum;
    var product;
    var average;

    //Span styles stored as strings
    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 35px;'>";
    var spanEnd = "</span>";
    var brk = "<br /><br />";

    //Strings for Calculations
    var minStr = "The minimum value was ";
    var maxStr = "The maximum value was ";
    var sumStr = "The total sum was";
    var productStr = "The final product was";
    var averageStr = "The average of these values was";


    //Array
    var numArray = new Array();

    for (i = 0; i < 5; i++)
    {
        var str = "#bmNum" + i;

        if ($.isNumeric($(str).val())) {
            numArray.push(Number($(str).val()));
        }
    }

    //Clear Message Box for new message
    $('#bmMessage').empty();

    if (numArray.length > 1)
    {
        sum = numArray[0];
        product = numArray[0];
        min = numArray[0];
        max = numArray[0];

        for (i = 1; i < numArray.length; i++)
        {
            sum += numArray[i];
            product *= numArray[i];

            if (min > numArray[i]) {
                min = numArray[i];
            }
            else if (max < numArray[i]) {
                max = numArray[i];
            }
        }
        average = sum / numArray.length;

        if (!Number.isInteger(average))
        {
            average = average.toFixed(2);
        }
        numArray.sort(function (a, b) { return a - b });

        $('#bmMessage').append(whiteSpan + "You entered the numbers" + spanEnd);
        for (i = 0; i < numArray.length; i++)
        {
            if (i < numArray.length - 1 )
            {

                $('#bmMessage').append(redSpan + " " + numArray[i] + spanEnd + whiteSpan + ","+ spanEnd);

            }
            else
            {
                $('#bmMessage').append(redSpan + " " + numArray[i] +  spanEnd);
            }
        }

        $('#bmMessage').append(brk + whiteSpan + minStr + spanEnd + redSpan + "  " + min + spanEnd + brk);
        $('#bmMessage').append(whiteSpan + maxStr + spanEnd + redSpan + "  " + max + spanEnd + brk);
        $('#bmMessage').append(whiteSpan + sumStr + spanEnd + redSpan + "  " + sum + spanEnd + brk);
        $('#bmMessage').append(whiteSpan + productStr + spanEnd + redSpan + "  " + product + spanEnd + brk);
        $('#bmMessage').append(whiteSpan + averageStr + spanEnd + redSpan + "  " + average + spanEnd);
    }
    else if (numArray.length > 0)
    {
        $('#bmMessage').append(whiteSpan + "You only entered  " + spanEnd + redSpan + numArray[0] + spanEnd);
    }
    else
    {
        $('#bmMessage').append(whiteSpan + "You did not enter " + spanEnd + redSpan + "Any " + spanEnd + whiteSpan + " numbers " + spanEnd);
    }
}





//*****************************************************************************************************
//*****************************************************************************************************
//                                FACTORIAL
//*****************************************************************************************************
//*****************************************************************************************************

function factorial() {

    //Variables
    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 35px;'>";
    var spanEnd = "</span>";
    var value;
    var factorial;


    //Clear previous Message
    $('#factMessage').empty();

    //Verify that input is not empty and a number
    if ($.isNumeric($('#factNum').val()) && $('#factNum').val() !== "" && Number.isInteger(Number($('#factNum').val())))
    {
        //Store Value
        value = $('#factNum').val();

        //Negative Value
        if (value < 0)
        {
            $('#factMessage').append(whiteSpan + "Enter a  " + spanEnd + redSpan + "Positive" + spanEnd + whiteSpan + "  number" + spanEnd);
        }
        //Value too large
        else if (value > 170)
        {
            $('#factMessage').append(whiteSpan + "Enter a number  " + spanEnd + redSpan + "Smaller" + spanEnd + whiteSpan + "  than 171" + spanEnd);
        }
        //Value is perfect
        else
        {
            factorial = value;

            for (i = value - 1; i > 0; i--)
            {
                factorial *= i;
            }
            //If value is larger than 18 message will print off of modal
            if (value > 18)
            {
                factStr = "" + factorial;
                var eStr = "" + factStr.charAt(0) + ".";

                if (factStr.charAt(1) == ".") {

                    for (i = 2; i < 12; i++) {

                        eStr += factStr.charAt(i);
                    }
                }
                else {

                    for (i = 1; i < 11; i++) {

                            eStr += factStr.charAt(i);
                    }
                }

                eStr += "e+" + (factStr.length + 1) ;

                $('#factMessage').append(whiteSpan + " The factorial of  " + spanEnd + redSpan + value + spanEnd + whiteSpan + "  is :  " + spanEnd + redSpan + eStr + spanEnd);
            }
            else
            {
                $('#factMessage').append(whiteSpan + " The factorial of  " + spanEnd + redSpan + value + spanEnd + whiteSpan + "  is :  " + spanEnd + redSpan + factorial + spanEnd);
            }
        }
    }
    else
    {
        $('#factMessage').append(whiteSpan + "Enter an  " + spanEnd + redSpan + "Integer" + spanEnd);
    }
}



//*****************************************************************************************************
//*****************************************************************************************************
//                                FIZZBUZZ
//*****************************************************************************************************
//*****************************************************************************************************


//Main Driver for FIZZBUZZ, it will create necessary variables and call helper functions
function fizzBuzzDriver() {

    //Special span tags for coloring the fizz and buzz text separately and for including breaks
    var fizzSpan = "<span style = 'color: #0094ff; font-family:Times New Roman; font-size: 25px;'>";
    var buzzSpan = "<span style = 'color: #ffd800; font-family:Times New Roman; font-size: 25px;'>";
    var brk = "<br /><br />";

    //Fizzle and Buzzle store the string input
    var fizzle = $('#fbForm0').val();
    var buzzle = $('#fbForm1').val();

    //Fizzer and Buzzer will store the integer value of the input it it is valid
    var fizzer;
    var buzzer;

    //Validators will store the results of the input validation function
    var fizzValidator;
    var buzzValidator;

    //Messages will store the constructed messages to push to the modal in case of invalid input
    var fizzMessage;
    var buzzMessage;

    //Clear Modal Body on Submit
    $('#fbMessage').empty();


    //Validate Input

    fizzValidator = inputValidator(fizzle);
    buzzValidator = inputValidator(buzzle);

    if (buzzValidator == 1 && fizzValidator == 1) {

        fizzer = Number(fizzle);
        buzzer = Number(buzzle);

        fizzBuzzSolver(fizzer, buzzer);
    }
    else {

        fizzMessage = messageBuilder(fizzValidator, "FIZZ", fizzSpan);
        buzzMessage = messageBuilder(buzzValidator, "BUZZ", buzzSpan);

        $('#fbMessage').append(fizzMessage + brk + buzzMessage);

    }
}

//This function will produce an array containing numbers 1 to 100 where multiples of fizz buzz are replaced with stylized words
function fizzBuzzSolver(fizzer, buzzer) {

    //Initialize array
    fizzBuzzArray = new Array();

    //Create Span Tags that will format the strings
    var spanEnd = "</span>";
    var brk = "<br /><br />";
    var normSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 20px;'>";
    var fizzSpan = "<span style = 'color: #0094ff; font-family:Times New Roman; font-size: 25px;'>FIZZ</span>";
    var buzzSpan = "<span style = 'color: #ffd800; font-family:Times New Roman; font-size: 25px;'>BUZZ</span>";
    var comma = normSpan + ", " + spanEnd;

    //This For Loop will push to each array element a string with formatting span tags
    for (i = 1; i <= 100; i++) {

        // number i is a multiple of both fizz and buzz
        if (modulo(fizzer, i) && modulo(buzzer, i)) {

            fizzBuzzArray.push(fizzSpan + buzzSpan);
        }
        // i is a multiple of only fizz
        else if (modulo(fizzer, i)) {

            fizzBuzzArray.push(fizzSpan);
        }
        // i is a multiple of onlu buzz
        else if (modulo(buzzer, i)) {

            fizzBuzzArray.push(buzzSpan);
        }
        // i is not a multiple of either
        else {
            fizzBuzzArray.push(normSpan + i + spanEnd);
        }

        //This will ensure correct formatting, Line Break on the tenth element or a comma.
        if (modulo(10, i)) {
            fizzBuzzArray.push(brk);
        }
        else{
            fizzBuzzArray.push(comma);
        }
    }

    //This for loop will append the formatted elements from the array to the message box of the modal.
    for (i = 0; i < fizzBuzzArray.length; i++) {

        $('#fbMessage').append(fizzBuzzArray[i]);
    }
}


// This Function will check if the input is an integer between 1 and 100
// A valid input returns 1
// An invalid input will return a number < 1 depending on how it is invalid
function inputValidator(input) {

    //Return values for the input based on various validatin rules
    var returnEmpty = -3;
    var returnNotNumber = -2;
    var returnNotInteger = -1;
    var returnNotRange = 0;
    var returnValid = 1;

    // Is there any input
    if (inputNotEmpty(input))
    {
        //Is the input a Number
        if (inputIsNumber(input))
        {
            var numInput = Number(input);
            //Is the Input an Integer
            if (inputIsInteger(numInput))
            {
                //Is the Input between 1 and 100
                if (inputInRange(numInput))
                {
                    return returnValid;
                }
                else
                {
                    return returnNotRange;
                }
            }
            else
            {
                return returnNotInteger;
            }
        }
        else
        {
            return returnNotNumber;
        }
    }
    else
    {
        return returnEmpty;
    }
}

//This Function will create a message based off of the validator
//Fizzub is whether the distinguisher between the message being built for fizz or buzz
//FizzubSpan is the specific span tag for either fizz or buzz
function messageBuilder(validator, fizzub, fizzubSpan) {

    //Span tags for editing text color and size fo the message
    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 25px;'>";
    var spanEnd = "</span>";
    var brk = "<br />";
    var normSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 20px;'>";
    

    //Input is empty
    if (validator == -3) {

        return normSpan + "You did not enter  " + spanEnd + fizzubSpan + fizzub + spanEnd + brk + fizzubSpan + fizzub + spanEnd + normSpan + "  must be an" + spanEnd + redSpan + "  Integer  " + spanEnd + whiteSpan + "between  " + spanEnd + redSpan + "1" + spanEnd + normSpan + "  and  " + spanEnd + redSpan + "100";
    }
    //Input is not an Integer between 1 and 100
    else if (validator == 0 || validator == -1 || validator == -2) {

        return fizzubSpan + fizzub + spanEnd + normSpan + "  must be an" + spanEnd + redSpan + "  Integer  "+ spanEnd + whiteSpan + "between  " + spanEnd + redSpan + "1" + spanEnd + normSpan + "  and  " + spanEnd + redSpan + "100";
    }
    //Input is good
    else if (validator == 1) {

        return fizzubSpan + fizzub + spanEnd + normSpan + "  is a  " + spanEnd + redSpan + "valid  " + spanEnd + normSpan + " input" + spanEnd;
    }
}

//Returns true if the input is not empty
//Returns False if input is empty
function inputNotEmpty(input) {

    if (input == "") {

        return false;
    }
    else {

        return true;
    }
}

//Returns true if the input could be interpolated as a number
function inputIsNumber(input) {

    return $.isNumeric(input);
}

//Returns true if the input could be interpreted as an integer
function inputIsInteger(input){

    return Number.isInteger(input);
}

//Returns True if the number is within the ranges of 1 to 100
function inputInRange(input) {

    if (input <= 100 && input >= 1) {

        return true;
    }
    else {

        return false;
    }
}

//Performs the Modulo check to mark which numbers will be marked Fizz, Buzz, or FizzBuzz
function modulo(fizzub, num) {

    if (num % fizzub == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}



//*****************************************************************************************************
//*****************************************************************************************************
//                                PALINDROME
//*****************************************************************************************************
//*****************************************************************************************************


function palindrome() {

    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 35px;'>";
    var spanEnd = "</span>";
    var brk = "<br /><br />";

    $('#palMessage').empty();

    var candidate = $('#palForm').val();

    if (candidate !== "") {

        prepped = strPrep(candidate.toLowerCase());

        if (palHelper(prepped)) {

            $('#palMessage').append(whiteSpan + " That  " + spanEnd + redSpan + "is" + spanEnd + whiteSpan + "  a Palindrome" + spanEnd);
        }
        else {

            $('#palMessage').append(whiteSpan + " That is  " + spanEnd + redSpan + "not" + spanEnd + whiteSpan + "  a Palindrome" + spanEnd);
        }
    }
    else {

        $('#palMessage').append(whiteSpan + "You did not enter  " + spanEnd + redSpan + "Any" + spanEnd + whiteSpan + "  string"+spanEnd);
    }
}

function strPrep(str) {

    returnee = "";

    for (i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 || str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {

            returnee += str.charAt(i);
        }
    }

    return returnee;
}

function palHelper(str) {

    breaker = true;

    front = 0;

    back = str.length - 1;

    while (breaker)
    {
        if (front >= back)
        {
            return true;
        }
        else if (str.charAt(front) === str.charAt(back))
        {
            front++;
            back--;
        }
        else
        {
            return false
        }
    }
}

//*****************************************************************************************************
//*****************************************************************************************************
//                                TRIE STRUCTURE
//*****************************************************************************************************
//*****************************************************************************************************

/* ////////////////////////////////////////////////////
 * THIS SECTION CONTAINS THE OBJECT CREATION FUNCTIONS
 * ///////////////////////////////////////////////////
 *
 * rootNode will have a special, distinguishing value, a child array, and keep the total count of unique words in the trie
 *
 * 
 *
 */

function rootNode() {

    this.totalWordCount = 0;

    this.value = "root";

    this.children = new Array();

}

function node(value, parent) {

    this.count = 0;

    this.value = value;

    this.asciiVal = this.value.charCodeAt(0);

    this.parent = parent;

    this.children = new Array();
}

/* PRIMARY FUNCTIONALITY DRIVER, trieDriver STARTS AND ENDS THE PROGRAM
 * 
 * 
 * 
 */

// Reads in Input and calls necessary functions to read 
function trieDriver() {

    var mostCommonWord;
    var longestWord;
    var lastWord;


    var root = new rootNode();

    var wordArray = prepDriver($('#trieTextBox').val());

    createTrie(wordArray, root);

    alert(getWord(root.children[0].children[0]));
}


/* ////////////////////////////////////////////////////////////////////////////////////
 * THIS SECTION CONTAINS FUNCTIONS FOR ACCESSING INFORMATION ABOUT NODES
 * ///////////////////////////////////////////////////////////////////////////////////
 *
 * nth Word will return the word at the place the user inputs
 * The nth word search is a depth first search from the left-most branch
 *
 * hasWord returns true or false if the word exists in the trie, not a prefix but a word with a >=1 count
 *
 */

function hasChild(childVal, node) {

    for (k = 0; k < node.children.length; k++) {

        if (childVal == node.children[k].value) {

            return true;
        }
    }
    return false;
}

function hasChildren(node) {

    if (node.children.length >= 1) {

        return true;
    }
    else {

        return false;
    }
}

function getParent(node) {

    return node.parent;
}

function getChild(childVal, parent) {

    for (m = 0; m < parent.children.length; m++) {

        if (childVal == parent.children[m].value) {

            return parent.children[m];
        }
    }
}

function getChildIndex(childVal, parent) {

    for (p = 0; p < parent.children.length; p++) {

        if (childVal == parent.children[p].value) {

            return p;
        }
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////
 * THIS SECTION CONTAINS FUNCTIONS FOR MOVING THROUGH THE TRIE
 * ///////////////////////////////////////////////////////////////////////////////////
 *
 * nth Word will return the word at the place the user inputs
 * The nth word search is a depth first search from the left-most branch
 * 
 * hasWord returns true or false if the word exists in the trie, not a prefix but a word with a >=1 count
 *
 */
function nthWord(place, root) {

    currentNode = root;

    targetChildIndex = 0;

    while (place > 0) {

        if (hasChildren(currentNode)) {


        }
        else {


        }
    }
}

function hasWord(word, root) {

    currentNode = root;

    for (o = 0; o < word.length; o++) {

        if (hasChild(word.charAt(o), currentNode)) {

            currentNode = getChild(word.charAt(o), currentNode);
        }
        else {
            return false;
        }
    }

    if (currentNode.count > 0) {

        return true;
    }
    else {

        return false;
    }
}

function getWord(endLetter)
{
    var word = endLetter.value;

    var currentNode = endLetter.parent;

    while (currentNode.value != "root") {

        word = currentNode.value + word;

        currentNode = currentNode.parent;
    }

    return word;
}

/* ////////////////////////////////////////////////////////////////////////////////////
 * THIS SECTION IS CONCERNED WITH ADDING WORDS AND MAKING THE TRIE
 * ///////////////////////////////////////////////////////////////////////////////////
 * 
 * createTrie will iterate through the word array and call addWord to link them to the root
 * 
 * addWorrd will verify attempt to add the word at root and if a prefix exists it will not duplicate
 * 
 * addChild create
 * 
 */

function createTrie(wordArray, root) {

    for (i = 0; i < wordArray.length; i++) {

        addWord(wordArray[i], root);
    }
}

function addWord(word, root) {

    var currentNode = root;

    for (j = 0; j < word.length; j++) {

        if (currentNode.children.length > 0 && hasChild(word.charAt(j), currentNode)) {

            currentNode = getChild(word.charAt(j), currentNode);
        }
        else {

            currentNode = addChild(word.charAt(j), currentNode);
        }
    }

    if (currentNode.count == 0) {

        root.totalWordCount++;
    }
    
    currentNode.count++;
}

function addChild(charOfChild, parent) {

    var newChild = new node(charOfChild, parent);

    parent.children.push(newChild);

    if (parent.children.length > 1) {

        insertionSortChild(newChild, parent);
    }

    return newChild;
}

function insertionSortChild(child, parent) {

    if (parent.children.length == 2) {

        if (parent.children[1].asciiVal < parent.children[0].asciiVal) {

            swapNodes(parent.children[1], parent.children[0]);
        }
    }
    else {

        breaker = true;

        newChildIndex = getChildIndex(child.value, parent);

        currentChildIndex = parent.children.length - 2;

        while (breaker) {

            if (currentChildIndex >= 0 && parent.children[newChildIndex].asciiVal < parent.children[currentChildIndex].asciiVal) {

                swapNodes(parent.children[newChildIndex], parent.children[currentChildIndex]);

                newChildIndex = currentChildIndex;
                currentChildIndex--;
            }
            else {

                breaker = false;
            }
        }
    }
}

function swapNodes(newChild, oldChild) {

    newChildIndex = getChildIndex(newChild.value, newChild.parent);

    oldChildIndex = getChildIndex(oldChild.value, oldChild.parent);

    newChild.parent.children[oldChildIndex] = newChild;

    oldChild.parent.children[newChildIndex] = oldChild;
}
/* ////////////////////////////////////////////////////////////////////////////////////
 * THIS SECTION CONTAINS FUNCTIONS THAT SANITIZE AND FORMAT THE INPUT INTO AN ARRAY
 * ///////////////////////////////////////////////////////////////////////////////////
 *
 * Raw input is lowerCased to standardize it
 * 
 * Prep Driver iterates through the raw input and calls helper functions to check each character and returns any array of lowercase words
 * 
 * Char is Letter returns true if the character is a letter
 * 
 * Char is space returns true if the character is white space.
 */
function prepDriver(raw) {

    lowRaw = raw.toLowerCase();
    var prepStr = "";

    var lastCharAdded;

    for (i = 0; i < lowRaw.length; i++) {

        if (charIsLetter(lowRaw.charCodeAt(i))) {

            prepStr += lowRaw.charAt(i);
            lastCharAdded = lowRaw.charAt(i);
        }
        else if (charIsSpace(lowRaw.charCodeAt(i)) && lastCharAdded != '|') {

            prepStr += '|';
            lastCharAdded = '|';
        }
    }
    return prepStr.split("|");
}

function charIsLetter(charCode) {

    if (charCode >= 97 && charCode <= 122) {

        return true;
    }
    else {

        return false;
    }
}

function charIsSpace(charCode) {

    if (charCode == 32) {

        return true;
    }
    else {

        return false;
    }
}

//*****************************************************************************************************
//*****************************************************************************************************
//                                CLEARING FUNCTIONS
//*****************************************************************************************************
//*****************************************************************************************************

function clearlyUno(message, form) {

    $('#bmMessage').empty();
    $('#bmNum0').val("");
    $('#bmNum1').val("");
    $('#bmNum2').val("");
    $('#bmNum3').val("");
    $('#bmNum4').val("");
}

function clearlyDos() {

    $('#factNum').val("");
    $('#factMessage').empty();
}

function clearlyTres() {

    $('#fbMessage').empty();
    $('#fbForm0').val("");
    $('#fbForm1').val("");
}

function clearlyQuat() {

    $('#palMessage').empty();
    $('#palForm').val("");
}

function clearlyCinc() {

    $('#trieTextBox').val("");
}
