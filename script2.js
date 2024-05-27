// Seller side functionality (seller.html)
const propertyForm = document.getElementById('property-form');

propertyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const propertyData = {
        type: document.getElementById('property-type').value,
        address: document.getElementById('address').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('image-url').value
    };

    // Replace with actual storage mechanism (e.g., database)
    // Here, we'll simulate storage in an array for demo purposes
    let properties = localStorage.getItem('properties') ? JSON.parse(localStorage.getItem('properties')) : [];
    properties.push(propertyData);
    localStorage.setItem('properties', JSON.stringify(properties));

    // Clear form after successful submission (optional)
    propertyForm.reset();
    alert('Property added successfully!');
});

// Buyer side functionality (buyer.html)
const propertyContainer = document.getElementById('properties');

function displayProperties() {
    propertyContainer.innerHTML = ''; // Clear previous content

    // Replace with actual data retrieval logic (e.g., fetch from server)
    // Here, we'll simulate retrieval from localStorage for demo purposes
    const properties = localStorage.getItem('properties') ? JSON.parse(localStorage.getItem('properties')) : [];

    if (properties.length === 0) {
        propertyContainer.innerHTML = '<p>No properties available yet.</p>';
        return;
    }

    properties.forEach(property => {
                const propertyElement = document.createElement('div');
                propertyElement.classList.add('property');

                const image = document.createElement('img');
                image.src = property.imageUrl;
                propertyElement.appendChild(image);

                const details = document.createElement('div');
                details.classList.add('details');

                const type = document.createElement('p');
                type.textContent = `Type: ${property.type}`;
                details.appendChild(type);

                const address = document.createElement('p');
                address.textContent = `Address: ${property.address}`;
                details.appendChild(address);