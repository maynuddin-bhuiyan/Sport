const buttonClick = document.getElementById('button-addon2');
const inputFild = document.getElementById('input_fild');
const erroressage = document.getElementById('error_message');
const mainDiv = document.getElementById('main_div');
const delatisDiv = document.getElementById('delatis_div');


buttonClick.addEventListener('click', function(){
    const inputText = inputFild.value;

    if(inputText === ''){
      erroressage.innerHTML = `
      <div class="card m-auto text-dark bg-warning  mb-3 p-4 rounded"
      style="max-width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Warning </h5>
      <p class="card-text">The API and site will always remain free to access at its basic level. </p>
      </div>
      

      `
      mainDiv.textContent = '';
      delatisDiv.textContent = '';


    }

    else{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
   
      fetch(url)
      .then(rep => rep.json())
      .then(data => findDrinks(data.drinks))
      erroressage.textContent = '';
      inputFild.value = '';
      delatisDiv.textContent = '';
    }

    
    
});


const findDrinks = drinks => {

   
    mainDiv.textContent = '';

    for(const drink of drinks){
        const div = document.createElement('div');
        div.classList.add('col');
        
       
        div.innerHTML = `
        
        <div class="card" style="cursor: pointer; height: 470px;">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${drink.strCategory}</h5>
                      <p class="card-text">${drink.strGlass}</p>
                      <button onclick="dalitsPart('${drink.idDrink}')" type="button" class="btn btn-outline-primary">Dalits</button>
                    </div>
                  </div>
        `;

        mainDiv.appendChild(div);

       
    }
}


const dalitsPart = dalits => {
   window.scrollTo(0, 70);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${dalits}`
    fetch(url)
    .then(rep => rep.json())
    .then(data => drinkDetals(data.drinks[0]))
  

}

 const drinkDetals = dinker => {
  console.log(dinker)
  
  delatisDiv.textContent = '';
  const div = document.createElement('div');

  div.innerHTML = `
  <div class="card  m-auto" style="width: 18rem;">
  <h2 class="card-title">${dinker.strCategory}</h2>
            <img src="${dinker.strDrinkThumb}" class="card-img-top" alt="">
            <div class="card-body">
            <p class="card-text">${dinker.strInstructionsDE}</p>
              <a href="https://youtu.be/oEFEGcsjk1A" class="btn btn-primary" target="_blank">Go Somewhere</a>
            </div>
          </div>
  `;

  delatisDiv.appendChild(div);



 }
