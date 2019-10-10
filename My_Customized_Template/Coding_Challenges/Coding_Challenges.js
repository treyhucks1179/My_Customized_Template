
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// BASIC MATH FUNCTION /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

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





///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// FACTORIAL FUNCTION //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function factorial() {

    //Variables
    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 35px;'>";
    var spanEnd = "</span>";
    var brk = "<br /><br />";
    var value;
    var factorial;
    var counter;


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



///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// FIZZBUZZ Function //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function fizzBuzzDriver() {

    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 25px;'>";
    var spanEnd = "</span>";
    var brk = "<br /><br />";

    var normSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 20px;'>";
    var fizzSpan = "<span style = 'color: #0094ff; font-family:Times New Roman; font-size: 25px;'>";
    var buzzSpan = "<span style = 'color: #ffd800; font-family:Times New Roman; font-size: 25px;'>";

    var fizzle = $('#fbForm0').val();
    var buzzle = $('#fbForm1').val();


    var fizzer;
    var buzzer;

    $('#fbMessage').empty();

    //If statements to cover variety of inputs
    if (fizzle !== "" && buzzle !== "") {

        if ($.isNumeric(fizzle) && $.isNumeric(buzzle)) {

            fizzer = Number(fizzle);
            buzzer = Number(buzzle);

            if (Number.isInteger(fizzer) && Number.isInteger(buzzer)) {

                if ((fizzer > 0 && fizzer <= 100) && (buzzer > 0 && buzzer <= 100)) {

                    fizzBizzSolver(fizzer, buzzer);

                }
                else if ((fizzer < 0 || fizzer > 100) && (buzzer > 0 && buzzer <= 100)) {

                    $('#fbMessage').append(fizzSpan + "FIZZ  " + spanEnd + normSpan + "must be a number between  " + spanEnd + redSpan + "1" + spanEnd + normSpan + "  and  " + spanEnd + redSpan + "  100");
                }
                else if ((fizzer > 0 && fizzer <= 100) && (buzzer < 0 || buzzer > 100)) {

                    $('#fbMessage').append(buzzSpan + "BUZZ  " + spanEnd + normSpan + "must be a number between  " + spanEnd + redSpan + "1" + spanEnd + normSpan + "  and  " + spanEnd + redSpan + "  100");
                }
                else {
                    $('#fbMessage').append(fizzSpan + "FIZZ  " + spanEnd + normSpan + "and" + spanEnd + buzzSpan + "  BUZZ  " + spanEnd + normSpan + "must be numbers between  " + spanEnd + redSpan + "1" + spanEnd + normSpan + "  and  " + spanEnd + redSpan + "  100");
                }
            }
            else if (!Number.isInteger(fizzer) && Number.isInteger(buzzer)) {

                $('#fbMessage').append(fizzSpan + "FIZZ  " + spanEnd + normSpan + "must be an  " + spanEnd + redSpan + "Integer" + spanEnd);
            }
            else if (Number.isInteger(fizzer) && !Number.isInteger(buzzer)) {

                $('#fbMessage').append(buzzSpan + "Buzz  " + spanEnd + normSpan + "must be an  " + spanEnd + redSpan + "Integer" + spanEnd);
            }
            else {

                $('#fbMessage').append(fizzSpan + "  FIZZ" + spanEnd + normSpan + "  and" + spanEnd + buzzSpan + "  BUZZ  " + spanEnd + normSpan + "must be  " + spanEnd + redSpan+" Integers" + spanEnd);
            }
        }
        else if (!$.isNumeric(fizzle) && $.isNumeric(buzzle)) {

            $('#fbMessage').append(fizzSpan + "FIZZ  " + spanEnd + normSpan + "must be a number" + spanEnd);
        }
        else if ($.isNumeric(fizzle) && !$.isNumeric(buzzle)) {

            $('#fbMessage').append(buzzSpan + "BUZZ  " + spanEnd + normSpan + "must be a number" + spanEnd);
        }
        else {

            $('#fbMessage').append(fizzSpan + "  FIZZ" + spanEnd + normSpan + "  and" + spanEnd + buzzSpan + "  BUZZ  " + spanEnd + normSpan + "must be numbers" + spanEnd);
        }
    }
    else if ( fizzle == "" && buzzle !== "") {

        $('#fbMessage').append(normSpan + "You did not enter a" + spanEnd + fizzSpan + "  FIZZ" + spanEnd);
    }
    else if ( buzzle == "" && fizzle !== "") {

        $('#fbMessage').append(normSpan + "You did not enter a" + spanEnd + buzzSpan + "  BUZZ" + spanEnd);
    }
    else {

        $('#fbMessage').append(normSpan + "You did not enter a" + spanEnd + fizzSpan + "  FIZZ" + spanEnd + normSpan + "  nor a" + spanEnd + buzzSpan + "  BUZZ" + spanEnd);
    }
}

function fizzBizzSolver(fizzer, buzzer) {

    fizzBuzzArray = new Array();
    var spanEnd = "</span>";
    var brk = "<br /><br />";
    var normSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 20px;'>";
    var fizzSpan = "<span style = 'color: #0094ff; font-family:Times New Roman; font-size: 25px;'>FIZZ</span>";
    var buzzSpan = "<span style = 'color: #ffd800; font-family:Times New Roman; font-size: 25px;'>BUZZ</span>";
    var comma = normSpan + ", " + spanEnd;

    if (fizz(fizzer, i) && buzz(buzzer, i)) {

        fizzBuzzArray.push(fizzSpan + buzzSpan + comm);
    }
    else if (fizz(fizzer, 1)) {

        fizzBuzzArray.push(fizzSpan + comma);
    }
    else if (buzz(buzzer, 1)) {

        fizzBuzzArray.push(buzzSpan + comma);
    }
    else {

        fizzBuzzArray.push(normSpan + 1 + spanEnd + comma);
    }

    for (i = 2; i < 101; i++) {
        

        if (fizz(fizzer, i) && buzz(buzzer, i)) {

            fizzBuzzArray.push(fizzSpan + buzzSpan);
        }
        else if (fizz(fizzer, i)) {

            fizzBuzzArray.push(fizzSpan);
        }
        else if (buzz(buzzer, i)) {

            fizzBuzzArray.push(buzzSpan);
        }
        else {
            fizzBuzzArray.push(normSpan + i + spanEnd);
        }

        if (i % 10 == 0) {
            fizzBuzzArray.push(brk);
        }
        else{
            fizzBuzzArray.push(comma);
        }
    }

    for (i = 0; i < fizzBuzzArray.length; i++) {

        $('#fbMessage').append(fizzBuzzArray[i]);
    }
}

function fizz( fizzer, num) {

    if (num % fizzer == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function buzz(buzzer, num) {

    if (num % buzzer == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// PALINDROME //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


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

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// CLEARING FUNCTIONS //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

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