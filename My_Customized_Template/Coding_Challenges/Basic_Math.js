

function mathCalc() {

    $('#bmMessage').empty();

    $('#bmSubmt').focusout()

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

        numArray.sort();

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
        $('#bmMessage').append(whiteSpan + "You only entered " + spanEnd + redSpan + "One " + spanEnd + whiteSpan + " number " + spanEnd);

    }
    else
    {
        $('#bmMessage').append(whiteSpan + "You did not enter " + spanEnd + redSpan + "Any " + spanEnd + whiteSpan + " numbers " + spanEnd);
    }
}
