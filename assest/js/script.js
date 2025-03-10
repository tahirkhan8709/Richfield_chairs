document.getElementById("header").innerHTML = `
         
<div class="top-nav">
  <div class="top-nav-container">
      <p class="top-navtext">10% discount for registered users</p>
  </div>
  <div class="top-nav-container">
      <div class="currency">
          <select name="" id="">
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
          </select>
      </div>
      <div class="lang">
          <select name="" id="">
              <option value="ENG">ENG</option>
              <option value="URDU">URDU</option>
          </select>
      </div>
  </div>
</div>
<nav>

  <div class="nav-links" onclick="myNavLink()" id="toogle">
      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 -0.5 25 25" fill="none">
          <path d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z" fill="#000000"/>
          </svg>
  </div>

  <div class="nav-links logo">
      <p>RICH</p>
      <p>FEILD</p>
  </div>
  
  <div class="nav-links links" id="myNavLink">
      <div id="nav-closed" onclick="myNavLink()">
          <div class="nav-links logo">
              <p>RICH</p>
              <p>FEILD</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 64 64" fill="none" stroke="#000000">
              <line x1="16" y1="16" x2="48" y2="48"/>
              <line x1="48" y1="16" x2="16" y2="48"/>
          </svg>
      </div>
     <div class="link">
    <a href="index.html" class="nv-lnks">HOME</a>
    <a href="./aboutus.html" class="nv-lnks">ABOUT</a>
    <a href="./contact .html" class="nv-lnks">CONTACT</a>
    <a href="./myaccount.html" class="nv-lnks">LOGIN</a>
    
    <!-- Dropdown Menu for SHOP -->
    <div class="dropdown">
        <a href="shop.html" class="nv-lnks">SHOP</a>
        <div class="dropdown-content">
            <a href="wish.html">Wishlist</a>
            <a href="checkout.html">Checkout</a>
            <a href="cart.html">Cart</a>
        </div>
    </div>

   
</div>
      
      </div>



  </div>
  
  
  <div class="nav-links shoping">
                <div class="cart" onclick="showmycarts()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <span>0</span>
                </div>

    
    

      <a href="wish.html">
      <div class="wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-heart" viewBox="0 0 16 16">
              <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
          <span>0</span>
      </div>
      </a>
  </div>

</nav>
`;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function minusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "block";

}


// JavaScript for changing the main image based on thumbnail click
function changeImage(src) {
  document.getElementById("mainImage").src = src;
}



// chairs descriptions functionality
// Function to open the corresponding tab
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Remove the "active" class from all tab buttons
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab and add an "active" class to the button
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Open the default tab (home) on page load
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-button").click();
});



document.getElementById('reviewButton').addEventListener('click', function () {
  // Toggle the display of the review form
  const form = document.getElementById('reviewForm');
  if (form.style.display === 'none' || form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});




// Optionally, handle form submission here:
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  // Collect form data and handle submission (e.g., send it to a server)
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('reviewText').value;

  console.log(`Review submitted by ${name} with rating ${rating}: ${reviewText}`);

  // Optionally clear the form after submission
  document.getElementById('form').reset();
  document.getElementById('reviewForm').style.display = 'none'; // Hide the form after submission
});






function myNavLink() {
  let myNav = document.getElementById("myNavLink");

  myNav.classList.toggle("myActive");

}


function showmycarts() {
  let mycarts = document.getElementById("procarts");
  mycarts.classList.toggle("myActiveCarts");
}



//  footer subscribe

function subscribeUser() {
  const email = document.getElementById("email").value;

  if (email) {

    localStorage.setItem('subscribeEmail', email);

    alert('THANKS FOR SUBSCRIBTING')



    document.getElementById('email').value = '';
  }

  else {
    alert('please enter a valid email adress')
  }
}




// popup add cart btn
// Get elements
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

// Show popup when the button is clicked
addToCartBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup if clicked outside the popup content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


function changeImage(src) {
  document.getElementById("mainImage").src = src;
}








// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).send("Error updating product");
//   }
// });
// fetch('https://your-api-endpoint/products')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // You can update your UI to display the updated product list
//     displayProducts(data.products);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

// function displayProducts(products) {
//   const productContainer = document.getElementById('product-container');
//   productContainer.innerHTML = '';

//   products.forEach(product => {
//     const productElement = document.createElement('div');
//     productElement.classList.add('product');
//     productElement.innerHTML = `
//       <h2>${product.name}</h2>
//       <p>${product.description}</p>
//       <p>Price: $${product.price}</p>
//       <img src="${product.image}" alt="${product.name}">
//     `;
//     productContainer.appendChild(productElement);
//   });
// }







