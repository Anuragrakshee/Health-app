// frontend/js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const email = document.getElementById('email').value;
            
            // ROLE-BASED REDIRECTION
            if (email === "admin@mindguard.com") {
                localStorage.setItem("userRole", "admin");
                window.location.href = "admin.html";
            } else {
                localStorage.setItem("userRole", "student");
                localStorage.setItem("studentEmail", email);
                window.location.href = "student.html";
            }
        });
    }
});