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
    let inputs = document.getElementsByClassName("column");
    for(let i=0; i <inputs.length ; i++)
    inputs[i].addEventListener("mouseover", function() {
        inputs[i].style.backgroundColor = "black";
    })

}
createGrid(16,16);
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function() {
    let newRow=0;
    let newColumn=0;
    do{
    newRow= prompt("How many rows do you want? Max 100.");
    if(newRow > 100 || newRow < 0 )
        alert("Invalid value.");
    } while(newRow>100 || newRow<0);
    do{
    newColumn=prompt("How many columns do you want? Max 100"); 
    if(newColumn > 100 || newColumn < 0 )
        alert("Invalid value.");
    } while(newColumn> 100 || newColumn < 0 );
    container.replaceChildren();
    createGrid(newRow,newColumn);
});



