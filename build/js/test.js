let divElement = document.querySelector('div');
let scriptElement = document.querySelector('script');
divElement.classList.add('w-52','h-52','bg-blue-300','rounded-full','flex','justify-center','items-center')

let divElement1 = document.createElement('div');
divElement1.classList.add('w-32','h-32','bg-emerald-300','rounded-full','flex','justify-center','items-center');

let divElement2 = document.createElement('div');
divElement2.classList.add('w-16','h-16','bg-red-400','rounded-full')
divElement1.appendChild(divElement2)
divElement.appendChild(divElement1)

let listTheme = divElement.getAttribute('data-theme')

let divCollection = [
    divElement,
    divElement1,
    divElement2,
]

if (listTheme.toLowerCase() === 'multi'){
    divCollection.forEach(function(changeColor){
        changeColor.classList.replace('bg-red-400','bg-green-400')
        changeColor.classList.replace('bg-blue-300','bg-red-400')
        changeColor.classList.replace('bg-emerald-300','bg-blue-400')
    })
}