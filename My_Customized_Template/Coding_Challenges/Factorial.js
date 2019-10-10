

function factorial() {

    alert("HERE 0 ");

    $('#bmMessage').empty();

    //Variables
    var whiteSpan = "<span style='color: #fff; font-family:Times New Roman; font-size: 25px;'>";
    var redSpan = "<span style='color: #ea1515; font-family:Times New Roman; font-size: 35px;'>";
    var spanEnd = "</span>";
    var brk = "<br /><br />";
    var value;
    var factorial;
    var counter;

    if ($.isNumeric($('#factNum').val()) && $('#factNum').val() !== "")
    {
        factorial = value;

        for (i = value; i > 0; i--) {
            factorial *= i;
        }

        $('#factMessage').append(whiteSpan + "Factorial is : " + factorial + spanEnd);
    }
    else
    {
        $('#factMessage').append("Enter a Number please");
    }

}