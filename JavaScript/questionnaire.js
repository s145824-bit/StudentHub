// Check three fields
function validateFeedback() {
    var name = document.getElementById("feedbackName");
    var email = document.getElementById("feedbackEmail");
    var code = document.getElementById("feedbackCode");







    // Name: first name and last name
    if (!/^[A-Za-z]{2,}( [A-Za-z]{2,})+$/.test(name.value)) {
        alert("Enter your first and last name.");
        name.className = "form-control is-invalid";
        return false;
    }





    name.className = "form-control is-valid";



    // Email: use the SQU student email
    if (!/^[A-Za-z0-9._%+-]+@student\.squ\.edu\.om$/.test(email.value)) {
        alert("Enter a valid SQU student email.");
        email.className = "form-control is-invalid";
        return false;
    }


    email.className = "form-control is-valid";







    // Course Code: 3 to 5 letters followed by 4 numbers
    if (!/^[A-Za-z]{3,5}[0-9]{4}$/.test(code.value)) {
        alert("Enter a course code like COMP3700.");
        code.className = "form-control is-invalid";
        return false;
    }


    
    code.className = "form-control is-valid";




    // Show a thanks message
    document.getElementById("feedbackSuccess").className = "alert alert-success mt-3";
    return false;
}
