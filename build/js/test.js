window.addEventListener('load', () =>{
    const form = document.querySelector('form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener("submit", e => {
        e.preventDefault();
        const task = input.value;

        if(!task) {
            alert("Please fill out the task.");
            return;
        }
        const task_Container = document.createElement('div'); //task_el = task_Container
        task_Container.classList.add("flex","justify-between","bg-darkest","p-4","rounded-2xl","mb-4")

        const task_Content = document.createElement('div'); //task_content_el = task_Content
        task_Content.classList.add("my-auto","flex-1");

        task_Container.appendChild(task_Content);

        const input_element = document.createElement('input');
        input_element.classList.add("text","text-light","bg-darkest","text-lg","w-full","block","border-none","outline-none");
        input_element.type = "text";
        input_element.value = task;
        input_element.setAttribute("readonly","readonly");

        task_Content.appendChild(input_element);

        const task_actions = document.createElement('div');
        task_actions.classList.add("flex","mx-2");

        const task_edit_btn = document.createElement('button');
        task_edit_btn.classList.add("m-2","font-bold","uppercase","hover:opacity-80","gradient-Btn");
        task_edit_btn.innerHTML = "Edit";

        const task_delete_btn = document.createElement('button');
        task_delete_btn.classList.add("m-2","font-bold","uppercase","hover:opacity-80","text-red-600");
        task_delete_btn.innerHTML = "Delete";

        task_actions.appendChild(task_edit_btn);
        task_actions.appendChild(task_delete_btn);

        task_Container.appendChild(task_actions);
        list_el.appendChild(task_Container);

        task_edit_btn.addEventListener("click", () => {
            if  (task_edit_btn.innerHTML.toLowerCase() == "edit"){
                input_element.removeAttribute("readonly");
                input_element.focus();
                task_edit_btn.innerHTML = "Save";
            } else{
                input_element.setAttribute("readonly");
                task_edit_btn.innerHTML = "Edit";
            }
        });
        task_delete_btn.addEventListener("click", () =>{
            list_el.removeChild(task_Container)
        })
    })
})