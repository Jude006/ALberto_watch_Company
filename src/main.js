const words = ['SMART WATCHES', 'LUXURY WATCHES', 'VINTAGE WATCHES', 'SPORTS WATCHES', 'CLASSIC WATCHES'];
let wordIndex = 0;
const wordElement = document.getElementById('changing-word');

function changeWord() {
  wordElement.classList.remove('fade-enter-active');
  setTimeout(() => {
    wordElement.textContent = words[wordIndex];
    wordElement.classList.add('fade-enter-active');
    wordIndex = (wordIndex + 1) % words.length;
  }, 500);
}

setInterval(changeWord, 3000); // Change word every 3 seconds
changeWord(); // Initialize with the first word


// store lacator functionality 
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const storeResults = document.getElementById('store-results');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    // const closeModal = document.getElementById('close-modal');
    const cartContainer = document.getElementById('cart-container');
    const closeCart = document.getElementById('close-cart');
    const viewCart = document.getElementById('view-cart');
    const cart = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    let cartItems = [];

    searchBar.addEventListener('input', () => {
      // Implement store search logic here and display results
      storeResults.classList.remove('hidden');
    });

    document.querySelectorAll('.view-details-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        const productPrice = e.target.getAttribute('data-price');
        const productDescription = e.target.getAttribute('data-description');
        const productImage = e.target.getAttribute('data-image');

        modalContent.innerHTML = `
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-bold">${productName}</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="${productImage}" alt="${productName}" class="w-full h-auto mb-4 object-cover">
            <div>
              <p class="text-lg font-semibold mb-2">$${productPrice}</p>
              <p class="text-gray-700">${productDescription}</p>
            </div>
          </div>
          <div class="flex justify-end mt-4">
            <button class="add-to-cart-from-modal-button bg-green-500 text-white px-4 py-2 rounded-md" data-product="${productName}" data-price="${productPrice}">Add to Cart</button>
          </div>
        `;
        modal.classList.add('active');
      });
    });

    document.body.addEventListener('click', (e) => {
      if (e.target.id === 'close-modal' || e.target.id === 'modal') {
        modal.classList.remove('active');
      }
    });

    document.querySelectorAll('.add-to-cart-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        const price = parseFloat(e.target.getAttribute('data-price'));
        cartItems.push({ product, price });
        renderCart();
      });
    });


   
    document.body.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-from-modal-button')) {
        const product = e.target.getAttribute('data-product');
        const price = parseFloat(e.target.getAttribute('data-price'));
        cartItems.push({ product, price });
        renderCart();
        modal.classList.remove('active');
      }

      if (e.target.classList.contains('remove-from-cart-button')) {
        const productName = e.target.getAttribute('data-product');
        cartItems = cartItems.filter(item => item.product !== productName);
        renderCart();
      }

      if (e.target.classList.contains('like-icon')) {
        e.target.classList.toggle('active');
      }
    });

    closeCart.addEventListener('click', () => {
      cartContainer.classList.add('hidden');
    });

    viewCart.addEventListener('click', () => {
      cartContainer.classList.remove('hidden');
    });

    function renderCart() {
      cart.innerHTML = '';
      if (cartItems.length > 0) {
        emptyCart.style.display = 'none';
        cartItems.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'flex justify-between items-center mb-4';
          cartItem.innerHTML = `
            <p>${item.product} - $${item.price}</p>
            <button class="remove-from-cart-button text-red-500" data-product="${item.product}">Remove</button>
          `;
          cart.appendChild(cartItem);
        });
      } else {
        emptyCart.style.display = 'block';
      }
    }
  });

//   gallery section 
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        icon.classList.toggle('active');
      });
    });
  });
//   contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      // Simulate form submission
      setTimeout(() => {
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('contactForm').reset();
      }, 500);
    } else {
      alert('Please fill in all fields.');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const productBoxes = document.querySelectorAll('.product-box');
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        productBoxes.forEach(box => {
          if (box.getAttribute('data-category') === category) {
            box.classList.remove('hidden');
            box.classList.add('fade-in');
          } else {
            box.classList.add('hidden');
          }
        });
      });
    });


   


  });


  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.add("hidden");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("bg-blue-500", "text-white");
        tablinks[i].classList.add("bg-gray-300", "text-black");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.remove("hidden");
    evt.currentTarget.classList.add("bg-blue-500", "text-white");
}

var modal = document.getElementById("myModal");

function openModal(title, img, price, description) {
    modal.style.display = "flex";
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-price").innerText = price;
    document.getElementById("modal-description").innerText = description;
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

 // Visitor count logic
 let visitorCount = 0;
 function updateVisitorCount() {
   visitorCount++;
   document.getElementById('visitorCount').innerText = 'Visitors: ' + visitorCount;
 }
 updateVisitorCount();

 // Geolocation and ticker logic
 function updateTicker() {
   const tickerText = document.getElementById('tickerText');
   const date = new Date();
   const dateString = date.toLocaleString();

   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
       const { latitude, longitude } = position.coords;
       tickerText.innerText = `Date: ${dateString} | Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
     });
   } else {
     tickerText.innerText = `Date: ${dateString} | Location: Not available`;
   }
 }
 updateTicker();

 // Menu option click logic
 const menuOptions = document.querySelectorAll('.menu-option');
 menuOptions.forEach(option => {
   option.addEventListener('click', () => {
     menuOptions.forEach(opt => opt.classList.remove('active'));
     option.classList.add('active');
   });
 });

 document.addEventListener('DOMContentLoaded', (e) => {
  const buttons = document.querySelectorAll('.view-details-btn');

  buttons.forEach(button => {
      button.onclick = function() {
          alert('Added to cart successfully');
      }
  });
});