




document.getElementById('review-btn').addEventListener('click', () =>{

    const textArea = document.getElementById('text-area').value;
    console.log(textArea);
    const reviewsArea = document.getElementById('reviews-area');
    const p = document.createElement('p');
    reviewsArea.appendChild(p);
    p.innerText = textArea;
    

    


})