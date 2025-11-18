// --- 1. LIVE CLOCK LOGIC ---
function updateTimer() {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon...
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;
    
    // UITS Schedule: 8:00 AM (480 min) to 3:30 PM (930 min)
    const openTime = 480; 
    const closeTime = 930;
    const display = document.getElementById('timer-display');

    if (!display) return; 

    let isOpenDay = (day >= 0 && day <= 4); // Sun to Thu
    
    if (isOpenDay) {
        if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
            const diff = closeTime - currentTimeInMinutes;
            const hrs = Math.floor(diff / 60);
            const mins = diff % 60;
            display.innerHTML = `<span style="color:green">● Open</span> (${hrs}h ${mins}m left)`;
        } else {
            display.innerHTML = `<span style="color:red">● Closed</span> (Opens 8:00 AM)`;
        }
    } else {
        display.innerHTML = `<span style="color:red">● Closed</span> (Weekend)`;
    }
}

// Start the Clock
setInterval(updateTimer, 1000); 
updateTimer(); 

// --- 2. LIBRARY CARD CHECKER ---
function checkLibraryCard() {
    const input = document.getElementById('card-id-input').value;
    const msg = document.getElementById('card-status-msg');
    
    // Logic: If ID is longer than 5 digits, it's valid
    if(input.length > 5) {
        msg.style.color = "green";
        msg.innerText = "✅ Card Active: You can borrow books.";
    } else {
        msg.style.color = "red";
        msg.innerText = "❌ Invalid ID or Card not found.";
    }
}

// --- 3. SEARCH BAR LOGIC ---
function searchTable(inputElement) {
    // Get the text user is typing
    const filter = inputElement.value.toUpperCase();
    
    // Find the table section this input belongs to
    const section = inputElement.closest('section');
    const rows = section.querySelectorAll('tbody tr');

    // Loop through rows to hide or show them
    rows.forEach(row => {
        const text = row.innerText.toUpperCase();
        if (text.includes(filter)) {
            row.style.display = ""; // Show row
        } else {
            row.style.display = "none"; // Hide row
        }
    });
}
