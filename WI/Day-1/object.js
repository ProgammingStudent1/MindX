let classMemberList = document.querySelector('#member')
let addMemberButton = document.querySelector('#addButton')
let nameInputElement = document.querySelector('#nameInput')
let classList = [
    {
        "name": "Tuan Anh",
        "age": 26
    },
    {
        "name": "Loc",
        "age": 14
    },
    {
        "name": "Hieu",
        "age": 14
    }
]

    function renderMember(member){
        let memberName = document.createElement("li");
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete";
        memberName.innerHTML = member.name;
        classMemberList.appendChild(memberName);
        memberName.appendChild(deleteButton);
    }
    function refreshList(){
        classMemberList.innerHTML = ''
        for(let a in classList){
        renderMember(classList[a])
        console.log(classList[a])
        }
    }
    function addMember(){
        let newMember = {};
        newMember.name = nameInputElement.value;
        classList.push(newMember)
        refreshList();
    }
    refreshList()
