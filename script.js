let textRating = document.querySelector('.rating__value')
const stars = document.querySelectorAll('.rating__star')



stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        
        stars.forEach((element) => {
            element.classList.remove("rating__star--on")
        })

        const order = index + 1;

        textRating.textContent = order;

        for (let i = 0; i < order; i++){
            stars[i].classList.add("rating__star--on");
        }
        
    });
});




// 1. depending on the index, i write the text content of the HTML
// 2. for each of the stars in the event listener i remove the rating__start--on
// 3. for loop to add the rating__star--on




