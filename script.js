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

const hover = document.querySelectorAll("div.row","div.column");




createGrid(16,16);