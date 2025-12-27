import {url} from '../js/metadata.js';
const nameInput = document.getElementById('name');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');


// creation
addBtn.onclick = function() {
    const name = (nameInput.value || '').trim();
    if(!name) return;
    fetch(`${url}.json`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: name})
    })
    .then(()=>{ nameInput.value = ''; })
    .then(()=>loadData())
    .catch(err=>console.error('Add contact failed', err));
};

function loadData(){
    fetch(`${url}.json`)
    .then(res=>res.json())
    .then(data=>{
        list.innerHTML='';
        if(!data) return;
        for(let key in data){
            list.innerHTML+=`<li>${data[key].name}</li>`;
        }
    });
}

loadData();
