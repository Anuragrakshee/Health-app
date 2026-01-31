// frontend/js/admin.js
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('tbody');
    const history = JSON.parse(localStorage.getItem('moodHistory') || '[]');

    // In a real app, this pulls from a database. 
    // For the hackathon, we show the local entries.
    if (history.length > 0) {
        tableBody.innerHTML = history.map(entry => `
            <tr>
                <td style="padding: 1rem;">STU_USER</td>
                <td>${entry.mood}</td>
                <td><span style="color: ${entry.mood === 'anxious' ? 'red' : 'green'}; font-weight: bold;">
                    ${entry.mood === 'anxious' ? 'High Risk' : 'Low Risk'}
                </span></td>
                <td><button class="btn btn-primary" style="padding: 0.4rem;">Alert</button></td>
            </tr>
        `).join('');
    }
});