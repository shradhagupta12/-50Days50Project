// Map

// Intial : nature 5 image load hogi 
// in api query get updated as per vaule given in search bar
// and on click of Show more update the page value by 1

let container = document.querySelector('.container');
let input = document.querySelector('#input');
let button = document.querySelector('#btn');

function userInput() {
    button.addEventListener('click' , (e) => {
        e.preventDefault();
       const newValue = input.value
       console.log(newValue);
    })
}


async function getImage() {
    let demoImage = `https://api.unsplash.com/search/photos?page=4&query=${newValue}&client_id=X05ehid1kCzFnph9VBwHB-geg-RrVO0vqduCJMFGGcQ`

    try {
        const response = await fetch(demoImage);
        const data = await response.json();
        let getImage = data.results;
        getImage.forEach(image => {
            const img = document.createElement('img');
            img.src = image.urls.small;
            container.append(img);
        });
    }
    catch (e) {
        console.log("Error", e);
    }
}
getImage();

userInput();


// demoImage = "https://api.unsplash.com/search/photos?page=1&query=nature&client_id=X05ehid1kCzFnph9VBwHB-geg-RrVO0vqduCJMFGGcQ"