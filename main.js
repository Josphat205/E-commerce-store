fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((fdata)=>{
    // console.log(fdata[0]);
    let data1 ="";
    fdata.map((values)=>{
        data1+=`
        <div class="card">
        <h2>${values.title}</h2>
        <img src=${values.image} alt="" id="images">
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}Ksh</p>
      </div>
        `;
    })
    document.getElementById("cards").innerHTML=data1;
})