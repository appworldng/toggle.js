window.addEventListener("load", function() {
    var toggleList = document.querySelectorAll('input[type=toggle]');
    for(var i=0; i<toggleList.length; i++) {
        //Remove input toggle
        toggleList[i].type = 'hidden';
        if(!parseInt(toggleList[i].value)) toggleList[i].value = 0;

        //Create new toggle
        var toggle = document.createElement("div");

        //Set toggle styling
        toggle.style.height = '20px'; 
        toggle.style.width =  '40px'; 
        toggle.style.borderRadius = '100px'; 
        toggle.style.marginTop = '5px'; 
        toggle.style.padding = '2px';
        toggle.style.position = 'relative';
        if(!parseInt(toggleList[i].value)) {
            toggle.style.backgroundColor = '#D1D1D1';
        } else {
            toggle.style.backgroundColor = '#FF0000';
        }

        //Create child toggle
        toggleChild = document.createElement("div");

        //Set toggle styling
        toggleChild.style.height = '16px'; 
        toggleChild.style.width =  '16px'; 
        toggleChild.style.borderRadius = '100%'; 
        toggleChild.style.backgroundColor = '#FFFFFF';
        toggleChild.style.position = 'absolute';
        toggleChild.style.top = '2px';
        toggleChild.style.transition = 'all 0.3s';
        if(!parseInt(toggleList[i].value)) {
            toggleChild.style.left = '2px';
        } else {  
            toggleChild.style.left = '22px';
        }

        //Append Child
        toggle.appendChild(toggleChild);

        //Append after input[type=toggle]
        toggleList[i].parentNode.insertBefore(toggle, toggleList[i].nextSibling);

        //Clicked Event Handler
        toggleList[i].nextSibling.addEventListener("click", function() {
            switch(this.previousSibling.value) {
                case '0':
                    this.childNodes[0].style.top = '2px';
                    this.childNodes[0].style.left = '22px';
                    this.style.backgroundColor = '#FF0000';
                    this.previousSibling.value = 1;
                    break;
                case '1':
                    this.childNodes[0].style.top = '2px';
                    this.childNodes[0].style.left = '2px';
                    this.style.backgroundColor = '#D1D1D1';
                    this.previousSibling.value = 0;
                    break;
            }
        });
    }
});