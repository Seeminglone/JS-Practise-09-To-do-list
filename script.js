const addBtn = document.querySelector('.add-btn');
const deleteBtns = document.querySelector('.delete-btn');



addBtn.addEventListener('click', function(){
    const inp = document.getElementById('new-tasks').value;
    const paragraph = document.querySelector('.paragraph');
    const test = document.querySelector('#test');
    test.innerHTML += `<div class="task">
    <p class="paragraph">${inp}</p>
    <button class="delete-btn">
        <img src="icon.jpg" width="65" height="45">
    </button>
</div>>
</button>`;
    // paragraph.classList.toggle("open-to-do-task");
    // deleteBtns.classList.toggle("open-delete-btn");

});


