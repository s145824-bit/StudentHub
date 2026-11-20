Eventlist = [
    ["Programming Workshop", "College of Science", "10 November 2026", "Computer Science Lab"],
    ["Career Day", "All Colleges ", "15 November 2026", "University Exhibition Hall"],
    ["Student Club Meeting", "College of Engineering", "20 November 2026", "Lecture Hall 1"]
];

AddEvent = function() {
    var name = prompt("Enter event name:");
    var college = prompt("Enter college name:");
    var date = prompt("Enter event date (e.g., 10 November 2026):");
    var location = prompt("Enter event location:");
    if(name === null || name==="" || college === null || college==="" || date === null || date==="" || location === null || location==="") {return;} // User cancelled the prompt
    Event = new Array(name, college, date, location);
    this.Eventlist.push(Event);
}

function displayEvents(EventList) {
    let tableHTML = "<table class='table background-white'><tr><th>Event Name</th><th>College</th><th>Date</th><th>Location</th></tr>";
    for (let i = 0; i < EventList.length; i++) {
        tableHTML += "<tr><td>" + EventList[i][0] + "</td><td>" + EventList[i][1] + "</td><td>" + EventList[i][2] + "</td><td>" + EventList[i][3] + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("eventsTable").innerHTML = tableHTML;
}

function searchEvents(EventList) {
    var searchTerm = prompt("Enter event name to search:");
    if (searchTerm === null || searchTerm === "") {return;}
    searched = new Array();
    for (let i = 0; i < EventList.length; i++) {
        if (EventList[i][0].toLowerCase().includes(searchTerm.toLowerCase())) {
            searched.push(EventList[i]);
        }
    }
    if (searched.length > 0) {
        displayEvents(searched);
    } else {
        alert("Event not found.");
    }
}
