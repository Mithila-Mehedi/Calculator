function insertNumber(number){
    // alert(number)
    var existingNumbers=  $("#result").val();
    $("#result").val(existingNumbers+number);
}

function clearResult(){
    $("#result").val(" ");
}
function calculate(){
    var new_result = eval( $("#result").val());
    $("#result").val(new_result);
}
function deleteNumber(){
    var presentValue = $("#result").val();
    if(presentValue!=''){
        $("#result").val(presentValue.slice(0,-1));
    }
}