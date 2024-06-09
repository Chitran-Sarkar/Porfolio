document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav a");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetContent = document.getElementById(targetId);

            document.querySelectorAll(".tabcontent").forEach(tabcontent => {
                tabcontent.classList.remove("active");
            });

            targetContent.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav a");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetContent = document.getElementById(targetId);

            document.querySelectorAll(".container").forEach(tabcontent => {
                tabcontent.classList.remove("active");
            });

            targetContent.classList.add("active");
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav a");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetContent = document.getElementById(targetId);

            // Remove 'active' class from all tabs
            document.querySelectorAll("nav a").forEach(tab => {
                tab.classList.remove("active");
            });

            // Add 'active' class to the clicked tab
            this.classList.add("active");

            // Hide all tab contents
            document.querySelectorAll(".tabcontent").forEach(tabcontent => {
                tabcontent.classList.remove("active");
            });

            // Display the target tab content
            targetContent.classList.add("active");
        });
    });
});
