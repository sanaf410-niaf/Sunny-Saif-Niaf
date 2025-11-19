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

// --- 2. LIBRARY CARD CHECKER (STRICT 14-DIGIT PATTERN) ---
function checkLibraryCard() {
    // 1. Get the elements
    const input = document.getElementById('card-id-input');
    const msg = document.getElementById('card-status-msg');
    
    // 2. Get the value and remove spaces
    const val = input.value.trim();

    // CHECK 1: Is it empty?
    if (val === "") {
        msg.style.color = "red";
        msg.innerText = "❌ Please enter an ID.";
        return;
    }

    // CHECK 2: Is it only numbers?
    if (isNaN(val)) {
        msg.style.color = "red";
        msg.innerText = "❌ Invalid: ID must be numbers only.";
        return;
    }

    // CHECK 3: Is it EXACTLY 14 digits?
    // The ID you gave (04325105101093) has 14 digits.
    if (val.length !== 14) {
        msg.style.color = "red";
        msg.innerText = `❌ Invalid: ID must be exactly 14 digits. (You typed ${val.length})`;
        return;
    }

    // --- SUCCESS ---
    msg.style.color = "green";
    msg.innerText = "✅ Card Active: You can borrow books.";
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

