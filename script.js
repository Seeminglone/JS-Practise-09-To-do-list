const addBtn = document.querySelector('.add-btn');
let deleteBtns;
let deleteAllBtn;
let editBtns;
let editOverBtns;


addBtn.addEventListener('click', function(){
 
    //Move frome input to paragraph    
    let inp = document.getElementById('new-tasks');
    let paragraph = document.querySelector('.paragraph');
    if (inp.value) {
            const test = document.querySelector('#test');
            test.innerHTML += `<div class="task">
            <b><p class="paragraph">${inp.value}</p></b>
            <button class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <button class="edit-over-btn">
            <i class="fas fa-check"></i>
            </button>
            <button class="delete-btn">
            <i class="fas fa-trash-alt"></i>
            </button>
                </div>`;

            let arr = [];
            let deleteArr = [];
            arr.push(inp.value);
            console.log(arr);
                
            

        editBtns = document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
                event = document.querySelector('#test').contentEditable = true;
            })
        });

        editOverBtns = document.querySelectorAll('.edit-over-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
                event  = document.querySelector('#test').contentEditable = false;
            })
        });

        

        deleteBtns = document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
            event.currentTarget.parentElement.remove();
                if (!test.innerHTML){
                    let closeAllBtn = document.querySelector('#close-all-button');
                    closeAllBtn.innerHTML = '';
                }
            })
        });

        
        deleteAllBtn = document.querySelector('#close-all-button');
        deleteAllBtn.addEventListener('click', () => {
            test.innerHTML = '';
            deleteAllBtn.innerHTML = '';
             
        })
        
        let closeAllBtn = document.querySelector('#close-all-button');
            closeAllBtn.innerHTML = `<div class ="close-all-btn-container">
            <button class="delete-all-btn"><i class="fas fa-times"></i></button>
            </div>`;
            
            inp.value = "";       
    } else {
        return;
    }
});

