 const cartButton = document.getElementById('cart-btn');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartItemsContainer = document.getElementById('cart-items');
        const num = document.getElementById('number');

        let items = 0;

        function addToCart(productName, productImage) {
            items++;
            num.textContent = `(${items})`;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${productImage}" alt="${productName}">
                <p>${productName}</p>
            `;

            cartItemsContainer.appendChild(cartItem);
        }

        cartButton.addEventListener('click', () => {
            cartSidebar.classList.toggle('active');
        });
