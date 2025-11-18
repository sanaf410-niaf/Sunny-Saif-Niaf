// --- 1. BOOK DATA ---
const booksData = [
    // === CSE & IT BOOKS ===
    { sl: 1, title: "Compilers: Principles, Techniques and Tools", author: "Alfred V. Aho", edition: "-", dept: "CSE/IT" },
    { sl: 2, title: "Principles of Compiler Design", author: "Alfred V. Aho", edition: "-", dept: "CSE/IT" },
    { sl: 3, title: "Introduction to Computers", author: "Peter Norton", edition: "6e", dept: "CSE/IT" },
    { sl: 8, title: "Computer System Architecture", author: "M. Morris Mano", edition: "3e", dept: "CSE/IT" },
    { sl: 9, title: "Fundamentals of Computer Algorithms", author: "Ellis Horowitz", edition: "-", dept: "CSE/IT" },
    { sl: 12, title: "Computer Organization and Design", author: "David A. Patterson", edition: "4e", dept: "CSE/IT" },
    { sl: 16, title: "The Intel Microprocessors", author: "Barry B. Brey", edition: "8e", dept: "CSE/IT" },
    { sl: 21, title: "Data & Computer Communications", author: "William Stallings", edition: "7e", dept: "CSE/IT" },
    { sl: 24, title: "Computer Networks", author: "Tanenbaum", edition: "4e", dept: "CSE/IT" },
    { sl: 35, title: "Software Engineering: A Practitioner's Approach", author: "Roger S. Pressman", edition: "6e", dept: "CSE/IT" },
    { sl: 38, title: "Introduction to Automata Theory", author: "John E. Hopcroft", edition: "3e", dept: "CSE/IT" },
    { sl: 40, title: "Teach Yourself C++", author: "Herbert Schildt", edition: "3e", dept: "CSE/IT" },

    // === PHARMACY BOOKS ===
    { sl: 21, title: "Cell and Molecular Biology", author: "E.D.P. De Robertis", edition: "4e", dept: "Pharmacy" },
    { sl: 22, title: "Clinical Pharmacy & Therapeutics", author: "Roger Walker", edition: "11e", dept: "Pharmacy" },
    { sl: 23, title: "Goodman & Gilmans The Pharma Basis of Therapeutics", author: "Alfred G. Goodman", edition: "13e", dept: "Pharmacy" },
    { sl: 29, title: "Organic Chemistry", author: "Robert Morrison", edition: "9e", dept: "Pharmacy" },
    { sl: 30, title: "Ansels Pharmaceutical Dosage Forms", author: "Loyd V. Allen", edition: "3e", dept: "Pharmacy" },
    { sl: 34, title: "Basic and Clinical Pharmacology", author: "Bertram G. Katzung", edition: "5e", dept: "Pharmacy" },
    { sl: 36, title: "Robbins & Cotran Pathological Basis of Disease", author: "Vinoy Kumar", edition: "-", dept: "Pharmacy" },
    { sl: 1, title: "Comprehensive Pharmacy Review", author: "Leon Shargel", edition: "8e", dept: "Pharmacy" },
    { sl: 7, title: "Microbiology", author: "Michael Pelczar", edition: "9e", dept: "Pharmacy" },
    { sl: 13, title: "Physical Pharmacy", author: "Alfred Martin", edition: "2e", dept: "Pharmacy" },

    // === CIVIL ENGINEERING BOOKS ===
    { sl: 1, title: "Structural Analysis", author: "R.C. Hibbeler", edition: "8e", dept: "Civil" },
    { sl: 2, title: "Fluid Mechanics and Hydraulic Machines", author: "R.K. Bansal", edition: "9e", dept: "Civil" },
    { sl: 3, title: "Surveying Vol. 1", author: "B.C. Punmia", edition: "16e", dept: "Civil" },
    { sl: 4, title: "Principles of Geotechnical Engineering", author: "Braja M. Das", edition: "7e", dept: "Civil" },
    { sl: 5, title: "Design of Concrete Structures", author: "Nilson & Darwin", edition: "14e", dept: "Civil" },
    { sl: 6, title: "Engineering Mechanics: Statics", author: "Meriam & Kraige", edition: "7e", dept: "Civil" },
    { sl: 7, title: "Highway Engineering", author: "S.K. Khanna", edition: "10e", dept: "Civil" },

    // === EEE BOOKS ===
    { sl: 1, title: "Fundamentals of Electric Circuits", author: "Alexander & Sadiku", edition: "5e", dept: "EEE" },
    { sl: 2, title: "Electronic Devices and Circuit Theory", author: "Robert L. Boylestad", edition: "11e", dept: "EEE" },
    { sl: 3, title: "Power System Analysis", author: "John J. Grainger", edition: "-", dept: "EEE" },
    { sl: 4, title: "Microelectronic Circuits", author: "Adel S. Sedra", edition: "6e", dept: "EEE" },
    { sl: 5, title: "Modern Control Engineering", author: "Katsuhiko Ogata", edition: "5e", dept: "EEE" },
    { sl: 6, title: "Principles of Electronics", author: "V.K. Mehta", edition: "11e", dept: "EEE" },
    { sl: 7, title: "Electromagnetic Field Theory", author: "Sadiku", edition: "4e", dept: "EEE" },

    // === BBA BOOKS ===
    { sl: 1, title: "Principles of Marketing", author: "Philip Kotler", edition: "15e", dept: "BBA" },
    { sl: 2, title: "Management", author: "Stephen P. Robbins", edition: "11e", dept: "BBA" },
    { sl: 3, title: "Financial Accounting", author: "Jerry J. Weygandt", edition: "9e", dept: "BBA" },
    { sl: 4, title: "Fundamentals of Corporate Finance", author: "Ross, Westerfield", edition: "10e", dept: "BBA" },
    { sl: 5, title: "Human Resource Management", author: "Gary Dessler", edition: "13e", dept: "BBA" },
    { sl: 6, title: "Operations Management", author: "William J. Stevenson", edition: "12e", dept: "BBA" },
    { sl: 7, title: "Business Communication", author: "Kitty O. Locker", edition: "5e", dept: "BBA" },

    // === ENGLISH BOOKS ===
    { sl: 1, title: "A History of English Literature", author: "Edward Albert", edition: "5e", dept: "English" },
    { sl: 2, title: "The Study of Language", author: "George Yule", edition: "4e", dept: "English" },
    { sl: 3, title: "An Introduction to Literary Studies", author: "Mario Klarer", edition: "2e", dept: "English" },
    { sl: 4, title: "Hamlet", author: "William Shakespeare", edition: "-", dept: "English" },
    { sl: 5, title: "Glossary of Literary Terms", author: "M.H. Abrams", edition: "11e", dept: "English" },
    { sl: 6, title: "Pride and Prejudice", author: "Jane Austen", edition: "-", dept: "English" },
    { sl: 7, title: "Pygmalion", author: "George Bernard Shaw", edition: "-", dept: "English" },

    // === LAW BOOKS ===
    { sl: 1, title: "The Code of Civil Procedure", author: "Mahmudul Islam", edition: "4e", dept: "Law" },
    { sl: 2, title: "Constitutional Law of Bangladesh", author: "Mahmudul Islam", edition: "3e", dept: "Law" },
    { sl: 3, title: "Jurisprudence: The Theory of Law", author: "Salmond", edition: "12e", dept: "Law" },
    { sl: 4, title: "The Penal Code, 1860", author: "L. Kabir", edition: "-", dept: "Law" },
    { sl: 5, title: "Law of Contract", author: "Avtar Singh", edition: "11e", dept: "Law" },
    { sl: 6, title: "Muslim Law", author: "Syed Amir Ali", edition: "-", dept: "Law" },
    { sl: 7, title: "Law of Evidence", author: "Best", edition: "10e", dept: "Law" },

    // === SOCIAL WORK BOOKS ===
    { sl: 1, title: "Introduction to Social Work and Social Welfare", author: "Charles Zastrow", edition: "11e", dept: "Social Work" },
    { sl: 2, title: "Social Work Practice", author: "Mark Doel", edition: "-", dept: "Social Work" },
    { sl: 3, title: "Research Methods for Social Work", author: "Rubin & Babbie", edition: "8e", dept: "Social Work" },
    { sl: 4, title: "Human Behavior in the Social Environment", author: "Jose B. Ashford", edition: "5e", dept: "Social Work" },
    { sl: 5, title: "Community Organization and Social Action", author: "H.B. Trecker", edition: "-", dept: "Social Work" },
    { sl: 6, title: "Social Welfare in Bangladesh", author: "M.A. Momen", edition: "-", dept: "Social Work" }
];

// --- 2. TIMER LOGIC ---
function updateTimer() {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon, ..., 4=Thu, 5=Fri, 6=Sat
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;
    
    // UITS Schedule: Sun(0) to Thu(4), 8:00 AM (480min) to 3:30 PM (930min)
    const openTime = 8 * 60; 
    const closeTime = 15 * 60 + 30; // 15:30
    const display = document.getElementById('timer-display');

    let isOpenDay = (day >= 0 && day <= 4);
    
    if (isOpenDay) {
        if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
            // Library is OPEN
            const diff = closeTime - currentTimeInMinutes;
            const hrsLeft = Math.floor(diff / 60);
            const minsLeft = diff % 60;
            display.innerHTML = `<span style="color:green">● Open</span> (Closes in ${hrsLeft}h ${minsLeft}m)`;
        } else {
            // Library is CLOSED (Wrong time)
            display.innerHTML = `<span style="color:red">● Closed</span> (Opens 8:00 AM)`;
        }
    } else {
        // Library is CLOSED (Weekend Fri/Sat)
        display.innerHTML = `<span style="color:red">● Closed</span> (Weekend)`;
    }
}
setInterval(updateTimer, 1000); // Update every second
updateTimer(); // Run immediately on load

// --- 3. THEME TOGGLE ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});

// --- 4. NAVIGATION & BOOK DISPLAY ---
let currentDept = "";

function loadBooks(dept) {
    currentDept = dept;
    
    // UI Switching
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('book-section').classList.remove('hidden');
    document.getElementById('book-section').style.display = 'block';
    document.getElementById('dept-title').innerText = dept + " Department Book List";

    const tableBody = document.getElementById('book-table-body');
    const table = document.getElementById('book-table');
    const msg = document.getElementById('coming-soon-msg');
    const searchContainer = document.querySelector('.search-bar-container');

    // Clear previous data
    tableBody.innerHTML = "";

    // Check if we have data for this department
    const filteredBooks = booksData.filter(b => b.dept === dept);

    if (filteredBooks.length > 0) {
        // Show table, hide "coming soon"
        table.style.display = 'table';
        searchContainer.style.display = 'flex';
        msg.classList.add('hidden');

        filteredBooks.forEach(book => {
            const row = `<tr>
                <td>${book.sl}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.edition}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    } else {
        // Hide table, show "coming soon"
        table.style.display = 'none';
        searchContainer.style.display = 'none';
        msg.classList.remove('hidden');
        msg.style.display = 'block';
    }
}

function showHome() {
    document.getElementById('book-section').style.display = 'none';
    document.getElementById('home-section').style.display = 'block';
}

// --- 5. SEARCH & FILTER LOGIC ---
function filterBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const editionFilter = document.getElementById('edition-filter').value;
    const tableBody = document.getElementById('book-table-body');
    
    tableBody.innerHTML = ""; // Clear table

    const deptBooks = booksData.filter(b => b.dept === currentDept);

    const finalFiltered = deptBooks.filter(book => {
        // Text Search
        const matchText = book.title.toLowerCase().includes(searchInput) || 
                          book.author.toLowerCase().includes(searchInput);
        
        // Edition Filter Logic (Simple check)
        let matchEdition = true;
        if (editionFilter !== 'all') {
            const ed = parseInt(book.edition); // "4e" becomes 4
            if (isNaN(ed)) {
                matchEdition = false; // Keep if filtering isn't strict
            } else {
                if (editionFilter === '1st' && ed <= 3) matchEdition = true;
                else if (editionFilter === '4th' && (ed >= 4 && ed <= 8)) matchEdition = true;
                else if (editionFilter === '9th' && ed >= 9) matchEdition = true;
                else matchEdition = false;
            }
        }

        return matchText && matchEdition;
    });

    if(finalFiltered.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4' style='text-align:center'>No books found</td></tr>";
    } else {
        finalFiltered.forEach(book => {
            const row = `<tr>
                <td>${book.sl}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.edition}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
}

// --- 6. LIBRARY CARD CHECK ---
function checkLibraryCard() {
    const input = document.getElementById('card-id-input').value;
    const msg = document.getElementById('card-status-msg');

    if(input.length > 5) {
        msg.style.color = "green";
        msg.innerText = "Card Active: You can borrow books.";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid ID or Card not found.";
    }
}