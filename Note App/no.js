const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note =>
    {
        addNewNote(note)
        })
}

const addBtnElem = document.getElementById('add')

addBtnElem.onclick = () =>
{
    addNewNote()
}


    
function addNewNote(note='') {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML =
        `
        <div class="notes">
<div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${note ? '': 'hidden'}"></div>
<textarea class=${note ? 'hidden':''}></textarea>

</div> 
        `
   document.body.appendChild(noteEl)

   
const editBtnElem = noteEl.querySelector(".edit");
const deleteBtnElem = noteEl.querySelector(".delete");
const mainElem = noteEl.querySelector(".main");
    const textareaElem = noteEl.querySelector("textarea");
    textareaElem.value = note;
   mainElem.innerHTML = marked(note);    

    deleteBtnElem.onclick = () =>
    {
        noteEl.remove()
        updateLS()
    }
    editBtnElem.addEventListener("click", () => {
        mainElem.classList.toggle("hidden");
        textareaElem.classList.toggle("hidden");
      });
      
      textareaElem.addEventListener("input", (e) => {
          const { value }  = e.target;
      
          mainElem.innerHTML = marked(value);
          
          updateLS()
      });

}


function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    
    const notes = []
    
    notesText.forEach(note =>
    {
        notes.push(note.value)
    })
    
    localStorage.setItem('notes', JSON.stringify(notes))
}