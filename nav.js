let currUser = JSON.parse(localStorage.getItem("signin")); 

function handleUser() {  
    localStorage.removeItem('signin'); 
    window.location.href = 'signIn.html';
}
window.handleUser = handleUser;

function nav() {
    return `
     <div class="nav-container">
      <div class="logo">
        <h2>Your Logo</h2>
      </div>
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-links" id="nav-links">
        <li><a href="products.html">Quickmart</a></li>
        <li>
          <div>
            <input class='search-bar' type="text" placeholder="search" />
            <button class='btn'>search</button>
          </div>
        </li>
        <li>
          <button class='btn' id='btnLog'><a href="signIn.html">Log In</a></button>
        </li>
        <li><span><a href="cart.html">Cart</a></span></li> 
      </ul>
    </div>`;
}

export default nav;
