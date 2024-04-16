let form = document.querySelector("form");
let EmployeeName = document.getElementById("name");
let EmpId = document.getElementById("employeeID");
let department = document.getElementById("department");
let experience = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let container = document.querySelector("#table-container>table>tbody");

let data = [];


function saveData(){
   
    localStorage.setItem("data", JSON.stringify(data));
}

function loadData(){
    let storedValue = JSON.parse(localStorage.getItem("data"));
    if(storedValue){
        let data = storedValue;
        showData(data);
    }
}

function getRole(experience) {
    if (experience > 5) {
        return 'Senior';
    } else if (experience >= 2 && experience <= 5) {
        return 'Junior';
    } else {
        return 'Fresher';
    }
}

function HandleSubmit(e){
    e.preventDefault();
    let Name = e.target[0].value;
    let id = e.target[1].value;
    let department = e.target[2].value;
    let experience = e.target[3].value;
    let Email = e.target[4].value;
    let Mobile = e.target[5].value;
    let role = getRole(experience);
    
    let obj = {
        name:Name,
        Id:id,
        Department:department,
        Experience:experience,
        email:Email,
        mobile:Mobile,
        Role:role
    }

    data.push(obj);

    saveData();
    showData(data);
}
form.addEventListener("submit", function(event){
    HandleSubmit(event);
});

function showData(arr){
    container.innerHTML = "";
    arr.forEach(function(ele, i){

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.name;

        let td2 = document.createElement("td");
        td2.innerHTML = ele.Id;

        let td3 = document.createElement("td");
        td3.innerHTML = ele.Department;

        let td4 = document.createElement("td");
        td4.innerHTML = ele.Experience;

        let td5 = document.createElement("td");
        td5.innerHTML = ele.email;

        let td6 = document.createElement("td");
        td6.innerHTML = ele.mobile;

        let td7 = document.createElement("td");
        td7.innerHTML = ele.Role;

        let td8 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener("click" ,function(){
            handleDelete(i)
           })
        td8.append(btn);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

        container.append(tr);

    })
    
}
function handleDelete(index){
    
    data = data.filter(function (ele,i){
          return index!==i
    });

    saveData();
    showData(data);   

}; 

loadData();
