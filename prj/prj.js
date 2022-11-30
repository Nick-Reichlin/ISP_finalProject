var myPage = "<script src='dragDropFunction.js'></script> <body> <form name='contactPHP' method='post' action='http://localhost/isp/prj/prj.php'>";
var newWindow = null;
function windowOpen()
{
    if(newWindow != null)
    {
        newWindow.close();
    }
        newWindow = window.open("", "Page Generator", "width=1000, height=800");
        myPage += "</form></body>";
        newWindow.document.write(myPage);
}

function addBackground()
{
    let userChoice = prompt("Enter color for background", "white");
    myPage += "<style> body{background-size: cover; background-color: " + userChoice + ";}</style>";
}

function addTextColor()
{
    let userChoice = prompt("Enter color for text", "black");
    myPage += "<style> body{color: " + userChoice + ";}</style>";
}

function addTitle()
{
    let title = "";
    while(title == "")
    {
        title = prompt("Enter a page title (must not be blank or you will be asked to enter again).", "My Title");
    }
    myPage += "<div style='height: auto; width:500px; position: absolute; top: 50px; left: 50px; word-wrap: break-word;' onmousedown = 'grabber(event);'><h1 style='text-align: center; color: black;'>" + title + "</h1></div>";
}

function addTextBox()
{
    let text = "";
    while(text == "")
    {
        text = prompt("Enter a text (must not be blank or you will be asked to enter again).", "My Text");
    }
    myPage += "<div style='height: auto; width:250; position: absolute; top: 50px; left: 50px; word-wrap: break-word;' onmousedown = 'grabber(event);'><p'>" + text + "</p></div>";
}

function addImage()
{
    url = prompt("Enter a image url.", "https://media.istockphoto.com/id/1197074302/photo/happy-puppy-dog-running-on-playground-green-yard.jpg?s=612x612&w=0&k=20&c=8iZ6gpBS7PEPqIUqWLqHUGes9kQ2S8JOvNJ0RQrr1Gw=");
    myPage += "<div style='height: 250; width:250; position: absolute; top: 50px; left: 50px; ' onmousedown = 'grabber(event);'><image style='height: 250; width:250;' src='" + url + "'></image></div>";
}

function addDatabaseInput()
{
    document.getElementById("databaseName").disabled = true;
    myPage += "<div style='width: 15%; margin-left:42.5%; margin-right:42.5%; margin-top: 250px;'><label>Input database name: </label><input type = 'text' id = 'database' value='isp' name = 'database'/></div>";
}

function addDisplayButton()
{
    document.getElementById("displayButton").disabled = true;
    myPage += "<div style='position: absolute; top: 50px; left: 50px;' onmousedown = 'grabber(event);'><input type = 'radio'  name = 'action' value = 'display' /> Display Table</div>";
}

function addNewItem()
{
    document.getElementById("addButton").disabled = true;
    myPage += "<div style='position: absolute; top: 50px; left: 50px;' onmousedown = 'grabber(event);'><input type = 'radio'  id= 'action' name = 'action' value = 'add' />Add New Item</div>";
}

function updateItem()
{
    document.getElementById("updateButton").disabled = true;
    myPage += "<div style='position: absolute; top: 50px; left: 50px;' onmousedown = 'grabber(event);'><input type = 'radio'  name = 'action' value = 'update' />Update Item</div>"; 
}

function deleteItem()
{
    document.getElementById("deleteButton").disabled = true;
    myPage += "<div style='position: absolute; top: 50px; left: 50px;' onmousedown = 'grabber(event);'><input type = 'radio'  name = 'action' value = 'delete' />Delete Item</div>"; 
}

function inputBoxes()
{
    document.getElementById("inputBoxes").disabled = true;
    myPage += "<table style='width: 20%; margin-left:40%; margin-right:40%; margin-top: 20px;'><tr> <th>Column 1</th> <th>Column 2</th> <th>Column 3</th> </tr> <tr> <td><input type = 'text' id = 'column1' name = 'column1'/> </td> <td><input type = 'text' id = 'column2' name = 'column2'/></td> <td><input type = 'text' id = 'column3' name = 'column3'/></td></tr></table>"
}

function submitButton()
{
    document.getElementById("submitButton").disabled = true;
    myPage += "<div id = 'submitButtonDiv' style='border: black solid 3px; border-radius: 3px; position: absolute; top: 50px; left: 50px;' onmousedown = 'grabber(event);'><input id = 'submitButton' type = 'submit' value = 'Submit'/></div>"; 
}

function resetButton()
{
    document.getElementById("resetButton").disabled = true;
    myPage += "<div style='position: absolute; top: 50px; left: 50px; border: black solid 3px; border-radius: 3px;' onmousedown = 'grabber(event);'><input type = 'reset' value = 'Reset'/></div>"; 
}

function resetWindow()
{
    document.getElementById("databaseName").disabled = false;
    document.getElementById("displayButton").disabled = false;
    document.getElementById("addButton").disabled = false;
    document.getElementById("updateButton").disabled = false;
    document.getElementById("deleteButton").disabled = false;
    document.getElementById("inputBoxes").disabled = false;
    document.getElementById("submitButton").disabled = false;
    document.getElementById("resetButton").disabled = false;
    myPage = "<script src='dragDropFunction.js'></script> <body> <form name='contactPHP' method='post' action='http://localhost/isp/prj/prj.php'>";
}

function closeWindow()
{
    newWindow.close();
}