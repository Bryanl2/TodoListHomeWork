let list=[
    {
        id:1,
        name:"Replicate what proffesor did",
        done:true
    },
    {
        id:2,
        name:"Study of related to JavaScript",
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
];

let listContent=document.querySelector("#list-content");

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

    lm.forEach(element=>{
        res+=renderList(element);
    });
    listContent.innerHTML=res;   
}

function renderList(item){
    let done=item.done ? "is-Done":"";
    let checked=item.done ? "checked":"";

    return `<li  class="list-group-item p-4 ${done}" >  <input type="checkbox" ${checked} class="form-check-input" onclick="changeStyle(${item.id})">
  
    ${item.id}. ${item.name}</li>`  
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
    console.log(id);
    console.log(elementClicked.done);
    elementClicked.done=!elementClicked.done
    list[id-1]=elementClicked;
    paintList(list);
}
