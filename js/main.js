let list=[
    {
        id:1,
        name:"Replicate what proffesor did",
        done:true
    },
    {
        id:2,
        name:"Study JavaScript",
        done:false
    },
    {
        id:3,
        name:"Study Java",
        done:false
    },
    {
        id:4,
        name:"Study Python",
        done:true
    },
    {
        id:5,
        name:"Study JavaScript's Frameworks",
        done:false
    },
    {
        id:6,
        name:"Study Python's Frameworks",
        done:false
    },
];

let listToDo=document.querySelector("#list-todo");
let listNoToDo=document.querySelector("#list-notodo");

paintList(list);

function createTask(){
    let inputTask=document.getElementById("inputTask");
    list.push({
        id:(list.length+1),
        name:inputTask.value,
        done:false, 
    });
    inputTask.value="";
    paintList(list);
}

function paintList(lm){
    res="";
    tes="";

    lm.forEach(element=>{
        if(!element.done){
            res+=renderList(element);
        }else{
            tes+=renderList(element);
        }
        
    });
    listToDo.innerHTML=res; 
    listNoToDo.innerHTML=tes;
    
}

function renderList(item){
    const done=item.done ? "is-Done":"";
    const checked=item.done ? "checked":"";
    const colorAlert=item.done ? "success" :"danger";
    const alertName=item.done ? "Missing": "OK";

    return ` 
    
    <div class="alert alert-${colorAlert} d-flex justify-content-between ${done}" style="flex-wrap: wrap;" role="alert">
    <div >
    <input type="checkbox" ${checked} class="form-check-input" onclick="changeStyle(${item.id})">
        <div class="mb-2 ml-2" >
        ${item.name}
        </div>
        <div>
        <button class="btn btn-success ml-2" onclick="changeStyle(${item.id})">${alertName}</button>
        <button class="btn btn-danger" onclick="deleteElement(${item.id})">X</button>
        </div>
    </div>
     </div>`
}

function testKey(event){
    if(event.key==="Enter"){
        createTask();
    }
}

function changeStyle(id){
    const elementClicked=list.find(item=>{
        return item.id===id;
    });
    elementClicked.done=!elementClicked.done
    list[id-1]=elementClicked;
    paintList(list);
}

function deleteElement(id){
    list=list.filter(element=>{
        return element.id!==id;
    });
    paintList(list); 
}