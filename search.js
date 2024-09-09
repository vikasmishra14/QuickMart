// Fetch the search query from localStorage
const searchQuery = localStorage.getItem('searchQuery');
var description=[];
// Check if the query exists and fetch the data
if (searchQuery) {
  fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      // Display the results on the page
      const resultsContainer = document.getElementById('results');
      if (data.products && data.products.length > 0) {
        data.products.forEach(product => {
          const productItem = document.createElement('div'); 
        //   productItem.innerHTML = `
        //     <h3>${product.title}</h3>
        //     <p>Price: $${product.price}</p>
        //     <img src="${product.thumbnail}" alt="${product.title}" />
        //   `;
        let name=document.createElement('h3')
        name.innerText=product.title;
        let Price=document.createElement('p')
        Price.innerText=`Price: ${product.price}$`
        let img=document.createElement('img')
        img.src=product.thumbnail; 
        img.addEventListener('click',function(){
            description.push(product);
            localStorage.setItem('description',JSON.stringify(description))
            window.location.href="description.html"
          })
        let addToCart=document.createElement('button')
        addToCart.innerText='Cart'
        productItem.append(img,name,Price,addToCart)
          resultsContainer.appendChild(productItem);
        });
      } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
} else {
  document.getElementById('results').innerHTML = '<p>No search query provided.</p>';
}
