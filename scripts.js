let tasks=['washing','walking','parking'];
const card=document.querySelector('.card');
const addBtn=document.querySelector('.add');
const deleteBtn=document.querySelector('.deleteBtn1');
const edit=document.querySelector('.edit');
const saveBtn=document.querySelector('.save');
const deleteBox=document.querySelector('.delete');
const taskBar=document.querySelector('.card .tasks');
const deleteBtn1=document.querySelector('#delete');
const number=document.querySelector('.delete input');
const IndexOfModification=document.querySelector('.modify .modifyNumber');
const area=document.querySelector('.modify .area');
const modify=document.querySelector('#modify');
const modify1=document.querySelector('.card .buttons .editTask');
const NumberDone=document.querySelector('.card p span');
const modifyBox=document.querySelector('.modify');
let count=0;
modify1.addEventListener('click',()=>{
    console.log('it happen');
    modifyBox.style.display="block";
    card.style.display="none";
    
})
modify.addEventListener('click',()=>{
    let number=Number(IndexOfModification.value)-1;
    let text=area.value;
    tasks[number]=text;
    taskBar.replaceChildren();
    tasks.forEach(el=>{
        addTasks(el);
    });
    modifyBox.style.display="none";
        card.style.display="block";
})
tasks.forEach(el=>{
    addTasks(el);
});
addBtn.addEventListener('click',()=>{
    edit.style.display='block';
});
saveBtn.addEventListener('click',()=>{
    const textArea=document.querySelector('.edit .textarea');
    edit.style.display='none';
    tasks.push(textArea.value);
    let container=document.createElement('div');
    let paragraph=document.createElement('p');
    paragraph.innerHTML=textArea.value;
    let check=document.createElement('a');
    check.addEventListener('click',()=>{
if(check.innerHTML===`<i class="fa-solid fa-check"></i>`){
    check.innerHTML="";
    count--;
    NumberDone.innerHTML=count;

}
else{
        check.innerHTML=`<i class="fa-solid fa-check"></i>`;
        count++;
        NumberDone.innerHTML=count;
    }
});

    container.appendChild(check);
    container.appendChild(paragraph);
    container.style.position="relative";
    container.style.position="width:100%";
    // check.style.position="absolute";
    // check.style.top="0%";
    // check.style.left="0%";
    // check.style.zIndex='1';
    taskBar.appendChild(container);
    console.log(taskBar.innerHTML);
    textArea.innerText="";
    console.log(tasks);
});
deleteBtn.addEventListener('click',()=>{
    card.style.display='none';
    deleteBox.style.display='block';
    
});
deleteBtn1.addEventListener('click',()=>{
    console.log(tasks);
    let index=Number(number.value)-1;
    if(index===0){
        tasks.shift();
        console.log(tasks);
    }
    else{
    tasks.splice(index,index);
    console.log(tasks);
    }
    deleteBox.style.display='none';
    card.style.display='block';
    taskBar.replaceChildren();
    tasks.forEach(el=>{
        addTasks(el);
    })
});
function addTasks(str){
    let container=document.createElement('div');
    let paragraph=document.createElement('p');
    let check=document.createElement('a');
    check.addEventListener('click',()=>{
        if(check.innerHTML===`<i class="fa-solid fa-check"></i>`){
            check.innerHTML="";
            count--;
            NumberDone.innerHTML=count;
        
        }
        else{
                check.innerHTML=`<i class="fa-solid fa-check"></i>`;
                count++;
                NumberDone.innerHTML=count;
            }
        });
    paragraph.innerHTML=str;
    container.appendChild(check);
    container.appendChild(paragraph);
    container.style.position="relative";
    container.style.position="width:100%";
    taskBar.appendChild(container);
}
