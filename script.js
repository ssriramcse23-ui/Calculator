function display(val){

    document.getElementById("display").value =document.getElementById("display").value+val;

    }

    function Clear(){

    document.getElementById("display").value = " ";

    }

    function Ans(){

    var UserInput = document.getElementById("display").value;
    var result = eval(UserInput);
    document.getElementById("display").value=result;


    }

