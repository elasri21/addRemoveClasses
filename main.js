const addClasses = document.querySelector(".add-classes");
const removeClasses = document.querySelector(".remove-classes");
const container = document.querySelector(".assign div div");
const currentEl = document.querySelector(".current");
function addClass() {
    // this array will hold all classes that current element has.
    let classes = [];
    // all classes that are already added to current elemnt
    let oldClasses = currentEl.classList;
    // loop through them and if they do not in classes push them in it.
    oldClasses.forEach(c => {
        if(classes.indexOf(c) == -1) {
            classes.push(c);
        }
    });
    // get the value that the user entered in the first field and convert it to array
    let str = addClasses.value.split(" ");
    // check if the user wrote something and if so
    if(addClasses.value) {
        // loop through wath the user wrote check if it is already in classes
        // if not add it as class to current and push it into classes
        str.forEach(el => {
            if(classes.indexOf(el) == -1) {
                classes.push(el);
                currentEl.classList.add(el)
            }
        });
    }
    // ckeck if there is a span element in the page and if so, select all spans and remove them
    if(document.querySelector("span")) {
        Array.from(document.querySelectorAll("span")).forEach(sp => {
            sp.remove();
        });
    }
    // sort the classes array
    classes.sort();
    // loop through classes array and do the following
    for(let i = 0; i < classes.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode(classes[i]);
        span.appendChild(txt);
        container.appendChild(span);
    }
    // empty the field
    addClasses.value = "";
}

function removeClass() {
    // get the value of the second field
    let classesToRemove = removeClasses.value;
    // convert it to array useinh space as seperator
    classesToRemove = classesToRemove.split(" ");
    // loop through classesToRemove elements
    classesToRemove.forEach(cl => {
        // if current has one of them as class remove it
        if(currentEl.classList.contains(cl)) {
            currentEl.classList.remove(cl);
        }
        // check if there is a span inthe page and if so get them all and
        if(document.querySelector("span")) {
            // Loop through them, then check one of these spans has cl as text content then remove it
            Array.from(document.querySelectorAll("span")).forEach(sp => {
                if(sp.textContent.toLocaleLowerCase() == cl) {
                    sp.remove();
                }
            });
        }
    });
    // empty the field
    removeClasses.value = "";
}
addClasses.addEventListener("blur", addClass);
removeClasses.addEventListener("blur", removeClass);