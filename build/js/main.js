    // //timing consuming way
    // let olElements = document.querySelector('ol');
    // let topics = [
    //     "Intro to DOM",
    //     "Getting Elements",
    //     "Querying Elemnts",
    //     "Creating Elements",
    //     "Removing Elements",
    //     "Modifying Element Classes",
    //     "Working with Attribute",
    //     "DOM Event Basics",
    //     "Common DOM Events"
    // ]


    // //
    // // topics.forEach(function(text){
    // //     let liElement = document.createElement('li');
    // //     let textNode = document.createTextNode(text);
    // //     liElement.appendChild(textNode)
    // //     olElements.appendChild(liElement)
    // // })

    // let themeChange = olElements.getAttribute('data-theme');
    // let currentTopicIndex = 6;
    // topics.forEach(function(text,index){    
    //     let liElement = document.createElement('li');
    //     liElement.innerHTML = text;
    //     liElement.setAttribute('data-index',index);
    //     if(themeChange.toLowerCase() === 'multi'){
    //         if(currentTopicIndex > index){
    //             liElement.classList.add('text-emerald-300');
    //         } else if (currentTopicIndex < index){
    //             liElement.classList.add('text-red-400');
    //         } 
    //         // else {
    //         //     liElement.classList.add('text-yellow-300','font-bold','underline');
    //         //     // same we can remove multiple classes using remove('class-one','class-two')
    //         // }
    //     }
    //     olElements.appendChild(liElement);
    // });

    // // let lastli = olElements.lastChild;
    // // lastli.remove();

    // //Another way
    // //let lastli = olElements.removeChild(olElements.lastChild)

    // let currentTopicElement = document.querySelector(`li[data-index="${currentTopicIndex}"]`);
    // currentTopicElement.classList.add('text-blue-400','font-bold','underline');

    // function toggleButton(){
    //     document.body.classList.toggle('dark');
    // }

    let grandparent = document.querySelector('.grandparent');
    let parent = document.querySelector('.parent');
    let child = document.querySelector('.child')

    grandparent.addEventListener("click", e => {
        console.log('grandparent 1.')
    })
    parent.addEventListener("click", e => {
        console.log('parent 1.')
    }, {once:true})
    child.addEventListener("click", e => {
        console.log('child 1.')
    })
    document.addEventListener("click", e => {
        console.log('document 1.')
    }, {capture: true})