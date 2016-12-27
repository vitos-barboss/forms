document.addEventListener("DOMContentLoaded", function () {

    var bar = document.getElementsByClassName("bar")[0];
    var menuShow = document.getElementsByClassName("menuShow")[0];
    var addBlock = document.getElementsByClassName("addBlock")[0];
    var checkPosition = 1;
    var message = document.getElementsByClassName("message")[0];
    bar.addEventListener("click", function () {
        var form = document.getElementsByTagName("form")[0];
        if (checkPosition % 2 == 0) {
            menuShow.style = "transform: rotate(0deg);";
            form.style = "display: none;";
            addBlock.style = "height: 0px;";

        } else {
            menuShow.style = "transform: rotate(90deg);";
            form.style = "display: block;";
            addBlock.style = "height: 230px;";



        }
        checkPosition++;
    });

    var counter = 0;

    var addBtn = document.getElementsByClassName("btnAdd")[0];
    var bodyTable = document.getElementsByClassName("bodyTable")[0];
    addBtn.addEventListener("mousedown", addPerson);
    function addPerson() {

        var idPerson = Math.round(Math.random() * 10000);
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var salary = document.getElementById("salary").value;

        var row = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdFirstName = document.createElement("td");
        var tdLastName = document.createElement("td");
        var tdSalary = document.createElement("td");
        var btnEdit = document.createElement("button");
        var btnDelete = document.createElement("button");
        var btnSave = document.createElement("button");


        if (!idPerson || !firstName || !lastName || !salary) {
            message.style = "display: block";
            console.log("You should fill all forms!");
            return;
        } else {
            message.style = "display: none";
        }


        var rowClass = "row row"+counter;
        counter++;

        tdId.innerHTML = idPerson;
        tdFirstName.innerHTML = firstName;
        tdLastName.innerHTML = lastName;
        tdSalary.innerHTML = salary;
        btnEdit.innerHTML = "Edit";
        btnDelete.innerHTML = "Delete";
        btnSave.innerHTML = "Save";

        row.appendChild(tdId);
        row.appendChild(tdFirstName);
        row.appendChild(tdLastName);
        row.appendChild(tdSalary);
        row.appendChild(btnEdit);
        row.appendChild(btnDelete);
        row.appendChild(btnSave);

        var inputs = document.getElementsByClassName("inputAdd");
        for(var i = 0; i < 3; i++) {
            inputs[i].value = "";
        }


        row.className = rowClass;
        btnEdit.className = "editBtn";
        btnDelete.className = "delBtn";
        btnSave.className = "saveBtn";

        bodyTable.appendChild(row);

        btnDelete.addEventListener("click", function (event) {
            var parentRow = event.target.parentNode;
            bodyTable.removeChild(parentRow);

        });

        btnEdit.addEventListener("click", function (event) {
            var parentRow = event.target.parentNode;
            for(var i = 1; i < 4; i++) {
                var tmpTd = parentRow.getElementsByTagName("td")[i];
                var input = document.createElement("input");
                input.className = "inputEdit";
                input.value = tmpTd.innerHTML;
                tmpTd.innerHTML = "";
                tmpTd.appendChild(input);
            }

            btnSave.addEventListener("click", function () {
                var tdChart = parentRow.getElementsByTagName("td");
                var inputToSave = parentRow.getElementsByTagName("input");
                var arrInputToSave = [];
                var arrTdChart = [];

                for(var i = 0; i < 4; i++) {

                    arrInputToSave.push(inputToSave[i]);
                }

                for(var key in tdChart) {
                    arrTdChart.push(tdChart[key]);
                }
                arrTdChart.shift();
                for(var j = 0; j < 3; j++){
                    arrTdChart[j].innerHTML = arrInputToSave[j].value;
                }

            })

        });

    }


});
