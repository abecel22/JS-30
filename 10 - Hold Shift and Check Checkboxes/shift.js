const checkboxes = document.querySelectorAll('input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
    //check if they have the shift key down
    // and check if they are unchecking it
    console.log(e);
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        //go ahead and run.....
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked =true;
            }
        });
    } 

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));