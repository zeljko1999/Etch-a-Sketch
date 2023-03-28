const container = document.querySelector(".flex-container");
function createGrid(x,y){
    for(let i=0;i < x; i++)
    {
        let newRow= document.createElement('div');
        newRow.classList.add("row");
        container.appendChild(newRow);

            for(let c=0;c<y;c++)
            {
            let newDiv = document.createElement('div');
            newDiv.classList.add('column');
            newRow.appendChild(newDiv);
            }
    }
}
createGrid(16,16);
let inputs = document.getElementsByClassName("column");
for(let i=0; i <inputs.length ; i++)
    inputs[i].addEventListener("mouseover", function() {
        inputs[i].classList.add("change-color");
    })




