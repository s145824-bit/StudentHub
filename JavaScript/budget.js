form ="";
function AddItem() {
    form += `<p>
                Item Name: <input type="text" name="itemName" required>
            </p>




            <p>
                Item cost (OMR): <input type="number" name="itemCost" required>
            </p>





            <p>
                Item Quantity (units): <input type="number" name="itemQuantity" required>
            </p><hr>`
    document.getElementById("AddItem").innerHTML = form;
}

function RemoveAllItems() {
    if (form == "") {return;}
    form = "";
    document.getElementById("AddItem").innerHTML = form;}

function calculateBudget() {
    var dom = document.getElementById("budgetForm");
    var costs = [];
    var quantities = [];

    // Collect all itemCost and itemQuantity inputs from the form's elements array
    for (var i = 0; i < dom.elements.length; i++) {
        var el = dom.elements[i];
        if (el.name == "itemCost") {
            costs.push(parseFloat(el.value));
        } else if (el.name == "itemQuantity") {
            quantities.push(parseFloat(el.value));
        }
    }

    var total = 0;

    // Calculate sum while skipping any observation with negative cost or quantity
    for (var j = 0; j < costs.length; j++) {
        var cost = costs[j];
        var quantity = quantities[j];

        if (isNaN(cost) || isNaN(quantity) || cost < 0 || quantity < 0) {
            continue;
        }

        total += cost * quantity;
    }

    // Check if the student checkbox is checked
    var isStudent = false;
    if (dom.student) {
        if (dom.student.length) {
            // Implicit array if multiple inputs share the name "student"
            for (var k = 0; k < dom.student.length; k++) {
                if (dom.student[k].checked) {
                    isStudent = true;
                    break;
                }
            }
        } else {
            // Single checkbox element
            isStudent = dom.student.checked;
        }
    }

    // Apply 20% student discount
    if (isStudent) {
        total = total * 0.80;
    }

    // Update the HTML content
    document.getElementById("totalBudget").innerHTML = "Total Budget: " + total.toFixed(2) + " OMR";

    // Return false to keep the form active and prevent page reload
    return false;
}

function resetBudget() {
    document.getElementById("totalBudget").innerHTML = "Total Budget: 0.00 OMR";
}

