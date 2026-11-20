
ProfessorList = [["Dr. Ahmed Soleimani", "Computer Science",  "5 / 5"],["Dr. Abduallah Alhajri","Computer Science","5 / 5"],["Dr. Fatma","Mathematics","1.7 / 5"]];
function addProfessor() {
    var name = prompt("Enter professor's name:");
    var rating = prompt("Enter professor's rating (out of 5):");
    var department = prompt("Enter professor's department:");
    if (name === null || name==="" || rating === null || department === null || department==="" ) {return;} // User cancelled the prompt
    while (parseFloat(rating) < 0 || parseFloat(rating) > 5) {
        rating = prompt("Invalid rating. Please enter a number between 0 and 5:");
    }

    professor = new Array("Dr." + name, department, rating + " / 5");
    this.ProfessorList.push(professor);
}


function displayProfessors(professorList) {
    let tableHTML = "<table class='table table-striped background-white'><tr><th>Professor Name</th><th>Department</th><th>Rating</th></tr>";
    for (let i = 0; i < professorList.length; i++) {
        tableHTML += "<tr><td>" + professorList[i][0] + "</td><td>" + professorList[i][1] + "</td><td>" + professorList[i][2] + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("professorsTable").innerHTML = tableHTML;
}

function searchProfessors(professorList) {
    var searchTerm = prompt("Enter professor's name to search:");
    if (searchTerm === null || searchTerm === "") {return;}
    searched = new Array();
    for (let i = 0; i < professorList.length; i++) {
        if (professorList[i][0].includes(searchTerm)) {
            searched.push(professorList[i]);
        }
    }
    if (searched.length > 0) {
        displayProfessors(searched);
    } else {
        alert("Professor not found.");
    }
}
