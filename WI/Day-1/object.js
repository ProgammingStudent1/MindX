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

    function renderMember(member, key){
        let memberName = document.createElement("li");
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function (){
            remove(key);
        });
        memberName.innerHTML = member.name;
        classMemberList.appendChild(memberName);
        memberName.appendChild(deleteButton);
    }
    function refreshList(){
        classMemberList.innerHTML = '';
        for(let a in classList){
        renderMember(classList[a], a)
        }
    }
    function addMember(){
        let newMember = {};
        newMember.name = nameInputElement.value;
        classList.push(newMember)
        refreshList();
    }
    function remove(i){
        classList.splice([i],1);
        refreshList();
    }
    refreshList()
