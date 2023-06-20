const  addForm=document.querySelector('.add');
const  addListItem=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateTemplate=todoSelect=>{
    const html=` <li class="list-group-item d-flex justify-content-between align-content-center">
    <span>${todoSelect}</span>
    <i class="far fa-trash-alt delete"></i>        
</li>`;
addListItem.innerHTML+=html;
}


addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todoSelect=addForm.add.value.trim();
    // console.log(todoSelect);
    if(todoSelect.length)
    {
        generateTemplate(todoSelect);
        addForm.reset();
    }
    
});

addListItem.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos=term=>{
    // console.log(term);
    // console.log(Array.from(addListItem.children));
    Array.from(addListItem.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo=> todo.classList.add('filtered'));

    Array.from(addListItem.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo=> todo.classList.remove('filtered'));

}

search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
});
