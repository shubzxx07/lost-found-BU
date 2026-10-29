// --- 1. UNIVERSITY BRANDING & 4-MEMBER TEAM DEFAULT STATE ---
const BRANDING_KEY = 'unifind_bennett_branding_v4'; // Updated to v4 to apply VS Code logo.png and updated team

// Crisp built-in SVG University Crest Data URI as automatic fallback if logo.png is not placed in folder yet
const BUILTIN_UNI_SVG_LOGO = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231e1b4b"/><stop offset="50%" stop-color="%23312e81"/><stop offset="100%" stop-color="%234338ca"/></linearGradient></defs><rect width="120" height="120" rx="26" fill="url(%23g)"/><path d="M60 16 L96 30 V58 C96 83 79 100 60 106 C41 100 24 83 24 58 V30 Z" fill="none" stroke="%23fbbf24" stroke-width="5"/><path d="M60 24 L88 35 V57 C88 77 74 91 60 97 C46 91 32 77 32 57 V35 Z" fill="%231e1b4b" opacity="0.6"/><text x="60" y="67" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="%23ffffff" text-anchor="middle">BU</text><text x="60" y="42" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="%23fbbf24" text-anchor="middle" letter-spacing="2">UNIVERSITY</text><circle cx="60" cy="82" r="4" fill="%23fbbf24"/></svg>`;

const DEFAULT_BRANDING = {
    uniName: 'Bennett University',
    uniSubtitle: 'Greater Noida • Campus Lost & Found Hub',
    logoDataUrl: 'logo.png', // Loads logo.png directly from your VS Code folder!
    members: [
        {
            badge: 'Member 1 • Team Lead',
            name: 'Shubham Kumar',
            roll: 'S26CSEU1160',
            role: 'UI/UX Architecture, University Branding System, Semantic HTML5 Layout & Responsive Navigation.',
            color: 'indigo'
        },
        {
            badge: 'Member 2 • Frontend Styling',
            name: 'Anshika Choudhary',
            roll: 'S26CSEU1252',
            role: 'CSS3 Animations, Dark/Light Theme System, Item Card Visuals & Mobile Responsiveness.',
            color: 'emerald'
        },
        {
            badge: 'Member 3 • JS Logic & Search',
            name: 'Atharv Sharma',
            roll: 'S26CSEU1156',
            role: 'Multi-Criteria Search & Filtering Engine, Live Statistics Counter & Campus Hotspot Analytics.',
            color: 'amber'
        },
        {
            badge: 'Member 4 • Forms & Storage',
            name: 'Shubham Awashthi',
            roll: 'S26CSEU1143',
            role: 'Form Validation, localStorage Persistence, Verification Modal & Printable Notice Poster.',
            color: 'rose'
        }
    ]
};

// Automatic fallback if logo.png is missing from the VS Code project directory
function handleLogoLoadError(imgEl) {
    if (imgEl.src && !imgEl.src.startsWith('data:image/svg+xml')) {
        imgEl.src = BUILTIN_UNI_SVG_LOGO;
    } else {
        imgEl.classList.add('hidden');
        const defaultCrest = document.getElementById('nav-default-crest');
        if (defaultCrest) defaultCrest.classList.remove('hidden');
    }
}

// --- 2. PRE-POPULATED PRESENTATION DATASET (12 REALISTIC CAMPUS ITEMS) ---
const DEFAULT_ITEMS = [
    {
        id: 'item-101',
        title: 'Casio Scientific Calculator fx-991EX',
        type: 'Lost',
        category: 'Electronics',
        location: 'A-Block (Academic)',
        date: '2026-10-28',
        description: 'Black ClassWiz scientific calculator misplaced after the Engineering Calculus lecture in A-Block Room LH-202. Has a small "SK" initials sticker on the slide cover.',
        reporter: 'Shubham Kumar (S26CSEU1160)',
        contact: 's26cseu1160@bennett.edu.in',
        verification: 'What color is the sticker on the back cover?',
        icon: 'fa-calculator'
    },
    {
        id: 'item-102',
        title: 'Bennett University Student ID Card & Lanyard',
        type: 'Found',
        category: 'ID & Documents',
        location: 'Central Library (LRC)',
        date: '2026-10-28',
        description: 'Found a blue Bennett University lanyard with a B.Tech CSE 1st Year ID card near the 2nd-floor reading cubicles in LRC. Handed over to the library circulation desk.',
        reporter: 'Anshika Choudhary (S26CSEU1252)',
        contact: 's26cseu1252@bennett.edu.in',
        verification: 'Confirm the full Enrollment Number printed on the card.',
        icon: 'fa-id-card'
    },
    {
        id: 'item-103',
        title: 'Ambrane Type-C Wired Earphones (Black)',
        type: 'Lost',
        category: 'Electronics',
        location: 'N-Block CSE Labs',
        date: '2026-10-27',
        description: 'Left my black Type-C wired earphones plugged into Workstation #08 in N-Block Lab 204 after the Digital Design Verilog simulation lab.',
        reporter: 'Shubham Kumar (S26CSEU1160)',
        contact: 's26cseu1160@bennett.edu.in',
        verification: 'Which ear-tip size or color is attached?',
        icon: 'fa-headphones'
    },
    {
        id: 'item-104',
        title: 'Data Structures & Algorithms Textbook (Cormen)',
        type: 'Found',
        category: 'Books & Stationery',
        location: 'N-Block CSE Labs',
        date: '2026-10-26',
        description: 'Found a hardcover CLRS textbook on workstation #14 in N-Block Programming Lab 302. Contains yellow sticky notes inside Chapter 4.',
        reporter: 'Shubham Awashthi (S26CSEU1143)',
        contact: 's26cseu1143@bennett.edu.in',
        verification: 'Whose name is written on the inside front cover?',
        icon: 'fa-book'
    },
    {
        id: 'item-105',
        title: 'Hostel Room Keys with Football Keychain',
        type: 'Claimed',
        category: 'Accessories',
        location: 'Sports Complex',
        date: '2026-10-24',
        description: 'Set of two silver keys on a metallic football keychain found near the indoor badminton court bleachers. Successfully verified and returned to owner!',
        reporter: 'Kabir Singh (S26CSEU1188)',
        contact: 's26cseu1188@bennett.edu.in',
        verification: 'Verified hostel room number stamped on the tag.',
        icon: 'fa-key'
    },
    {
        id: 'item-106',
        title: 'MacBook 65W Type-C Power Adapter',
        type: 'Found',
        category: 'Electronics',
        location: 'Hostel Block C & D',
        date: '2026-10-28',
        description: 'Found a white Apple Type-C charging brick plugged into the socket in the Hostel Block C common study lounge.',
        reporter: 'Ananya Roy (S26CSEU1142)',
        contact: 's26cseu1142@bennett.edu.in',
        verification: 'What color cable protector is wrapped on the cord?',
        icon: 'fa-laptop'
    },
    {
        id: 'item-107',
        title: 'Digital Logic & Breadboard Kit Box',
        type: 'Found',
        category: 'Electronics',
        location: 'A-Block (Academic)',
        date: '2026-10-27',
        description: 'Transparent plastic component box containing a solderless breadboard, IC 7408, IC 7432, and jumper wires found in Electronics Lab 104.',
        reporter: 'Atharv Sharma (S26CSEU1156)',
        contact: 's26cseu1156@bennett.edu.in',
        verification: 'What roll number is written with marker on the lid?',
        icon: 'fa-microchip'
    },
    {
        id: 'item-108',
        title: 'Black Leather Wallet (Contains Metro Card)',
        type: 'Lost',
        category: 'ID & Documents',
        location: 'Mess & Maggi Hotspot',
        date: '2026-10-28',
        description: 'Misplaced a bi-fold brown/black wallet near the Maggi Hotspot seating area during evening snacks. Contains Delhi Metro card and college library pass.',
        reporter: 'Vikramaditya Rao (S26CSEU1195)',
        contact: 's26cseu1195@bennett.edu.in',
        verification: 'What bank debit card is inside the front slot?',
        icon: 'fa-id-card'
    },
    {
        id: 'item-109',
        title: 'HP 65W Round-Pin Laptop Charger',
        type: 'Claimed',
        category: 'Electronics',
        location: 'Central Library (LRC)',
        date: '2026-10-23',
        description: 'Found an HP blue-tip laptop charger on the ground floor group discussion table in LRC. Claimed by owner after verifying serial tag.',
        reporter: 'Meera Joshi (S26CSEU1109)',
        contact: 's26cseu1109@bennett.edu.in',
        verification: 'Verified Velcro strap color.',
        icon: 'fa-laptop'
    },
    {
        id: 'item-110',
        title: 'Yonex Astrox Badminton Racquet with Cover',
        type: 'Found',
        category: 'Others',
        location: 'Sports Complex',
        date: '2026-10-26',
        description: 'Black and neon green Yonex racquet left beside Court #2 in the Indoor Sports Complex. Kept safely with the sports equipment coordinator.',
        reporter: 'Devansh Sharma (S26CSEU1204)',
        contact: 's26cseu1204@bennett.edu.in',
        verification: 'What color is the overgrip on the handle?',
        icon: 'fa-briefcase'
    },
    {
        id: 'item-111',
        title: 'SanDisk 64GB Metal USB Flash Drive',
        type: 'Lost',
        category: 'Electronics',
        location: 'N-Block CSE Labs',
        date: '2026-10-28',
        description: 'Silver metallic pendrive containing project presentation slides and HTML/JS source files. Lost near N-Block lift lobby.',
        reporter: 'Anshika Choudhary (S26CSEU1252)',
        contact: 's26cseu1252@bennett.edu.in',
        verification: 'What is the folder name on the root directory?',
        icon: 'fa-laptop'
    },
    {
        id: 'item-112',
        title: 'Engineering Physics Lab Record Notebook',
        type: 'Claimed',
        category: 'Books & Stationery',
        location: 'Hostel Block C & D',
        date: '2026-10-21',
        description: 'Hardbound practical file with 6 signed experiments found on the Hostel C reception sofa. Returned to the student before viva!',
        reporter: 'Shubham Awashthi (S26CSEU1143)',
        contact: 's26cseu1143@bennett.edu.in',
        verification: 'Verified name and batch on index page.',
        icon: 'fa-book'
    }
];

const STORAGE_KEY = 'unifind_bennett_items_v4';
let itemsData = [];
let brandingData = JSON.parse(JSON.stringify(DEFAULT_BRANDING));
let activeStatusFilter = 'All';
let activeModalItemId = null;
let uploadedLogoTempDataUrl = null;

// --- 3. INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadBrandingFromStorage();
    loadItemsFromStorage();
    setDefaultDateInput();
    setupEventListeners();
    renderBrandingAndTeam();
    renderAll();
});

function loadBrandingFromStorage() {
    try {
        const saved = localStorage.getItem(BRANDING_KEY);
        if (saved) {
            brandingData = JSON.parse(saved);
        } else {
            brandingData = JSON.parse(JSON.stringify(DEFAULT_BRANDING));
            saveBrandingToStorage();
        }
    } catch (e) {
        brandingData = JSON.parse(JSON.stringify(DEFAULT_BRANDING));
    }
}

function saveBrandingToStorage() {
    try {
        localStorage.setItem(BRANDING_KEY, JSON.stringify(brandingData));
    } catch (e) {
        console.error('Branding storage error:', e);
    }
}

function renderBrandingAndTeam() {
    const uniName = brandingData.uniName || 'Bennett University';
    const uniSub = brandingData.uniSubtitle || 'Greater Noida • Campus Lost & Found Hub';

    document.getElementById('ribbon-uni-name').textContent = uniName;
    document.getElementById('nav-uni-name').textContent = uniName;
    document.getElementById('nav-uni-subtitle').textContent = uniSub;
    document.getElementById('hero-uni-badge').textContent = `${uniName} • Official Campus Community Portal`;
    document.getElementById('hero-uni-highlight').textContent = uniName;
    document.getElementById('team-uni-tag').textContent = `${uniName} • Web Development Mini-Project`;
    document.getElementById('footer-uni-name').textContent = `${uniName} • Campus Lost & Found Hub`;

    // Update dynamic initials on fallback crest
    const initials = uniName.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() || 'BU';
    const crestInitialsEl = document.getElementById('nav-crest-initials');
    if (crestInitialsEl) crestInitialsEl.textContent = initials;

    const customImg = document.getElementById('nav-custom-logo');
    const defaultCrest = document.getElementById('nav-default-crest');
    const footerCustomImg = document.getElementById('footer-custom-logo');
    const footerDefaultCrest = document.getElementById('footer-default-crest');

    if (brandingData.logoDataUrl && brandingData.logoDataUrl.trim() !== '') {
        customImg.src = brandingData.logoDataUrl;
        customImg.classList.remove('hidden');
        defaultCrest.classList.add('hidden');
        if (footerCustomImg && footerDefaultCrest) {
            footerCustomImg.src = brandingData.logoDataUrl;
            footerCustomImg.classList.remove('hidden');
            footerDefaultCrest.classList.add('hidden');
        }
    } else {
        customImg.classList.add('hidden');
        defaultCrest.classList.remove('hidden');
        if (footerCustomImg && footerDefaultCrest) {
            footerCustomImg.classList.add('hidden');
            footerDefaultCrest.classList.remove('hidden');
        }
    }

    const teamGrid = document.getElementById('team-grid');
    const colorClasses = {
        indigo: { avatar: 'bg-indigo-600 shadow-indigo-500/20', pill: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
        emerald: { avatar: 'bg-emerald-600 shadow-emerald-500/20', pill: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
        amber: { avatar: 'bg-amber-600 shadow-amber-500/20', pill: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
        rose: { avatar: 'bg-rose-600 shadow-rose-500/20', pill: 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300' }
    };

    teamGrid.innerHTML = brandingData.members.map((m, idx) => {
        const c = colorClasses[m.color] || colorClasses.indigo;
        const mInitials = m.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || `M${idx + 1}`;
        return `
            <div onclick="openBrandingModal()" title="Click to edit member details" class="cursor-pointer bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center hover:shadow-md hover:border-indigo-400 transition group relative">
                <span class="absolute top-3 right-3 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition"><i class="fa-solid fa-pen"></i></span>
                <div class="w-20 h-20 rounded-2xl ${c.avatar} text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition">
                    ${escapeHTML(mInitials)}
                </div>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${c.pill}">${escapeHTML(m.badge)}</span>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-3">${escapeHTML(m.name)}</h3>
                <p class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">Enrollment ID: ${escapeHTML(m.roll)}</p>
                <p class="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    <strong>Role:</strong> ${escapeHTML(m.role)}
                </p>
            </div>
        `;
    }).join('');
}

function openBrandingModal() {
    document.getElementById('brand-uni-name').value = brandingData.uniName;
    document.getElementById('brand-uni-sub').value = brandingData.uniSubtitle;
    document.getElementById('brand-logo-url').value = (brandingData.logoDataUrl && !brandingData.logoDataUrl.startsWith('data:')) ? brandingData.logoDataUrl : '';
    document.getElementById('brand-logo-file').value = '';
    uploadedLogoTempDataUrl = null;

    brandingData.members.forEach((m, i) => {
        const idx = i + 1;
        document.getElementById(`m${idx}-name`).value = m.name;
        document.getElementById(`m${idx}-roll`).value = m.roll;
    });

    document.getElementById('branding-modal').classList.remove('hidden');
}

function closeBrandingModal() {
    document.getElementById('branding-modal').classList.add('hidden');
}

function useVsCodeFolderLogo() {
    brandingData.logoDataUrl = 'logo.png';
    uploadedLogoTempDataUrl = 'logo.png';
    document.getElementById('brand-logo-url').value = 'logo.png';
    saveBrandingToStorage();
    renderBrandingAndTeam();
    showToast('Set logo to load "logo.png" from VS Code folder!', 'emerald');
}

function useBuiltInSvgLogo() {
    brandingData.logoDataUrl = BUILTIN_UNI_SVG_LOGO;
    uploadedLogoTempDataUrl = BUILTIN_UNI_SVG_LOGO;
    document.getElementById('brand-logo-url').value = '';
    saveBrandingToStorage();
    renderBrandingAndTeam();
    showToast('Applied Built-in SVG University Shield Logo!', 'indigo');
}

function clearCustomLogo() {
    brandingData.logoDataUrl = '';
    uploadedLogoTempDataUrl = '';
    document.getElementById('brand-logo-url').value = '';
    document.getElementById('brand-logo-file').value = '';
    saveBrandingToStorage();
    renderBrandingAndTeam();
    showToast('Switched to Dynamic Initials Badge!', 'indigo');
}

function loadItemsFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            itemsData = JSON.parse(saved);
        } else {
            itemsData = [...DEFAULT_ITEMS];
            saveItemsToStorage();
        }
    } catch (e) {
        itemsData = [...DEFAULT_ITEMS];
    }
}

function saveItemsToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsData));
    } catch (e) {
        console.error('Storage error:', e);
    }
}

function resetDemoData() {
    itemsData = [...DEFAULT_ITEMS];
    saveItemsToStorage();
    resetFilters();
    renderAll();
    showToast('All 12 presentation sample items restored!', 'indigo');
}

function setDefaultDateInput() {
    const dateInput = document.getElementById('item-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
}

// Quick Fill Demo Item for live Viva / Presentation
function fillDemoReportForm() {
    prefillReportType('Found');
    document.getElementById('item-title').value = 'Apple Pencil (2nd Gen) with Magnetic Sleeve';
    document.getElementById('item-category').value = 'Electronics';
    document.getElementById('item-location').value = 'N-Block CSE Labs';
    setDefaultDateInput();
    document.getElementById('item-desc').value = 'Found a white Apple Pencil 2nd Generation with a navy blue silicone grip near the projector podium in N-Block Seminar Hall.';
    document.getElementById('reporter-name').value = 'Shubham Kumar (S26CSEU1160)';
    document.getElementById('reporter-contact').value = 's26cseu1160@bennett.edu.in';
    document.getElementById('verification-hint').value = 'What custom engraving is printed near the top cap?';
    showToast('Demo item pre-filled! Click "Publish Campus Alert" to test.', 'indigo');
}

// --- 4. RENDER PIPELINE ---
function renderAll() {
    renderStats();
    renderItemsGrid();
    renderAnalytics();
}

function renderStats() {
    const total = itemsData.length;
    const lostCount = itemsData.filter(i => i.type === 'Lost').length;
    const foundCount = itemsData.filter(i => i.type === 'Found').length;
    const claimedCount = itemsData.filter(i => i.type === 'Claimed').length;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-lost').textContent = lostCount;
    document.getElementById('stat-found').textContent = foundCount;
    document.getElementById('stat-claimed').textContent = claimedCount;
}

function getBadgeHTML(type) {
    if (type === 'Lost') {
        return `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-950/90 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Lost
        </span>`;
    }
    if (type === 'Found') {
        return `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/90 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Found
        </span>`;
    }
    return `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
        <i class="fa-solid fa-circle-check text-emerald-500"></i> Claimed
    </span>`;
}

function renderItemsGrid() {
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
    const categoryVal = document.getElementById('category-filter').value;
    const locationVal = document.getElementById('location-filter').value;

    const filtered = itemsData.filter(item => {
        const matchesStatus = activeStatusFilter === 'All' || item.type === activeStatusFilter;
        const matchesCategory = categoryVal === 'All' || item.category === categoryVal;
        const matchesLocation = locationVal === 'All' || item.location === locationVal;
        const matchesKeyword = !searchQuery || 
            item.title.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery) ||
            item.location.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery) ||
            item.reporter.toLowerCase().includes(searchQuery);

        return matchesStatus && matchesCategory && matchesLocation && matchesKeyword;
    });

    const grid = document.getElementById('items-grid');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');

    resultsCount.textContent = `Showing ${filtered.length} of ${itemsData.length} campus listings`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(item => `
        <article class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between animate-fade-in">
            <div>
                <div class="flex items-center justify-between gap-2 mb-4">
                    <div class="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-slate-700/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                        <i class="fa-solid ${escapeHTML(item.icon || 'fa-box')}"></i>
                    </div>
                    ${getBadgeHTML(item.type)}
                </div>

                <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">${escapeHTML(item.category)}</span>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-0.5 line-clamp-1">${escapeHTML(item.title)}</h3>

                <p class="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    ${escapeHTML(item.description)}
                </p>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/70">
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span class="flex items-center gap-1.5 font-medium">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> ${escapeHTML(item.location)}
                    </span>
                    <span class="flex items-center gap-1">
                        <i class="fa-regular fa-calendar"></i> ${escapeHTML(item.date)}
                    </span>
                </div>

                <div class="flex items-center gap-2">
                    <button onclick="openItemModal('${item.id}')" class="flex-grow py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                        item.type === 'Claimed' 
                        ? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200' 
                        : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white'
                    }">
                        <i class="fa-solid ${item.type === 'Claimed' ? 'fa-eye' : 'fa-handshake-angle'}"></i>
                        <span>${item.type === 'Claimed' ? 'View Resolved' : 'Contact / Claim'}</span>
                    </button>
                    <button onclick="openPosterModal('${item.id}')" title="Generate Printable Campus Flyer" class="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-amber-100 hover:text-amber-700 text-xs font-bold transition">
                        <i class="fa-solid fa-print"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function renderAnalytics() {
    const total = itemsData.length || 1;
    const categories = ['Electronics', 'ID & Documents', 'Books & Stationery', 'Accessories', 'Others'];
    const locations = ['Central Library (LRC)', 'A-Block (Academic)', 'N-Block CSE Labs', 'Mess & Maggi Hotspot', 'Sports Complex', 'Hostel Block C & D'];

    const catContainer = document.getElementById('category-bars');
    catContainer.innerHTML = categories.map(cat => {
        const count = itemsData.filter(i => i.category === cat).length;
        const pct = Math.round((count / total) * 100);
        return `
            <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-700 dark:text-slate-300">${cat}</span>
                    <span class="text-slate-500 dark:text-slate-400">${count} items (${pct}%)</span>
                </div>
                <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }).join('');

    const locContainer = document.getElementById('location-bars');
    locContainer.innerHTML = locations.map(loc => {
        const count = itemsData.filter(i => i.location === loc).length;
        const pct = Math.round((count / total) * 100);
        return `
            <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                    <span class="text-slate-700 dark:text-slate-300">${loc}</span>
                    <span class="text-slate-500 dark:text-slate-400">${count} reports (${pct}%)</span>
                </div>
                <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full bg-rose-500 dark:bg-rose-400 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// --- 5. EVENT LISTENERS & FILTERS ---
function setupEventListeners() {
    document.getElementById('search-input').addEventListener('input', renderItemsGrid);
    document.getElementById('category-filter').addEventListener('change', renderItemsGrid);
    document.getElementById('location-filter').addEventListener('change', renderItemsGrid);

    document.getElementById('hero-search-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') triggerHeroSearch();
    });

    const statusButtons = document.querySelectorAll('.status-tab');
    statusButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            activeStatusFilter = btn.getAttribute('data-status');
            statusButtons.forEach(b => {
                b.className = 'status-tab px-4 py-1.5 rounded-xl text-xs font-bold transition bg-slate-100 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300';
            });
            btn.className = 'status-tab active-tab px-4 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-600 text-white shadow-sm';
            renderItemsGrid();
        });
    });

    const iconButtons = document.querySelectorAll('.icon-option');
    iconButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            iconButtons.forEach(b => {
                b.className = 'icon-option p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex flex-col items-center gap-1 text-xs';
            });
            btn.className = 'icon-option selected-icon p-3 rounded-xl border-2 border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex flex-col items-center gap-1 text-xs';
            document.getElementById('selected-icon-input').value = btn.getAttribute('data-icon');
        });
    });

    document.getElementById('report-form').addEventListener('submit', handleReportSubmit);

    document.getElementById('brand-logo-file').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            uploadedLogoTempDataUrl = ev.target.result;
        };
        reader.readAsDataURL(file);
    });

    document.getElementById('branding-form').addEventListener('submit', (e) => {
        e.preventDefault();
        brandingData.uniName = document.getElementById('brand-uni-name').value.trim() || 'Bennett University';
        brandingData.uniSubtitle = document.getElementById('brand-uni-sub').value.trim() || 'Greater Noida • Campus Lost & Found Hub';

        const urlInput = document.getElementById('brand-logo-url').value.trim();
        if (uploadedLogoTempDataUrl !== null) {
            brandingData.logoDataUrl = uploadedLogoTempDataUrl;
        } else if (urlInput) {
            brandingData.logoDataUrl = urlInput;
        }

        [1, 2, 3, 4].forEach((idx, i) => {
            const nameVal = document.getElementById(`m${idx}-name`).value.trim();
            const rollVal = document.getElementById(`m${idx}-roll`).value.trim();
            if (nameVal) brandingData.members[i].name = nameVal;
            if (rollVal) brandingData.members[i].roll = rollVal;
        });

        saveBrandingToStorage();
        renderBrandingAndTeam();
        closeBrandingModal();
        showToast('University logo, name & team details updated!', 'emerald');
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

function triggerHeroSearch() {
    const heroVal = document.getElementById('hero-search-input').value.trim();
    const browseSearch = document.getElementById('search-input');
    browseSearch.value = heroVal;
    renderItemsGrid();
    document.getElementById('browse').scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('hero-search-input').value = '';
    document.getElementById('category-filter').value = 'All';
    document.getElementById('location-filter').value = 'All';
    activeStatusFilter = 'All';

    const statusButtons = document.querySelectorAll('.status-tab');
    statusButtons.forEach((b, idx) => {
        if (idx === 0) {
            b.className = 'status-tab active-tab px-4 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-600 text-white shadow-sm';
        } else {
            b.className = 'status-tab px-4 py-1.5 rounded-xl text-xs font-bold transition bg-slate-100 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300';
        }
    });

    renderItemsGrid();
}

function prefillReportType(type) {
    const radios = document.querySelectorAll('input[name="itemType"]');
    radios.forEach(r => {
        r.checked = (r.value === type);
    });
}

// --- 6. FORM SUBMISSION ---
function handleReportSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('item-title').value.trim();
    const category = document.getElementById('item-category').value;
    const location = document.getElementById('item-location').value;
    const date = document.getElementById('item-date').value;
    const description = document.getElementById('item-desc').value.trim();
    const reporter = document.getElementById('reporter-name').value.trim();
    const contact = document.getElementById('reporter-contact').value.trim();
    const verification = document.getElementById('verification-hint').value.trim();
    const icon = document.getElementById('selected-icon-input').value;
    const typeRadio = document.querySelector('input[name="itemType"]:checked');
    const type = typeRadio ? typeRadio.value : 'Lost';

    const errorBox = document.getElementById('form-error');

    if (!title || !date || !description || !reporter || !contact) {
        errorBox.classList.remove('hidden');
        return;
    }
    errorBox.classList.add('hidden');

    const newItem = {
        id: 'item-' + Date.now(),
        title,
        type,
        category,
        location,
        date,
        description,
        reporter,
        contact,
        verification: verification || 'Please specify an identifying mark or roll number to claim.',
        icon
    };

    itemsData.unshift(newItem);
    saveItemsToStorage();
    renderAll();

    e.target.reset();
    setDefaultDateInput();
    showToast(`Your ${type.toLowerCase()} item "${title}" has been published!`, 'emerald');
    document.getElementById('browse').scrollIntoView({ behavior: 'smooth' });
}

// --- 7. MODAL & CLAIM ACTIONS ---
function openItemModal(itemId) {
    const item = itemsData.find(i => i.id === itemId);
    if (!item) return;

    activeModalItemId = itemId;
    document.getElementById('modal-badge-container').innerHTML = getBadgeHTML(item.type);
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-meta').textContent = `${item.category} • ${item.location} • Reported on ${item.date}`;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-reporter').textContent = item.reporter;
    document.getElementById('modal-contact').textContent = item.contact;
    document.getElementById('modal-verification-text').textContent = item.verification || 'Provide your student ID to verify ownership.';
    document.getElementById('claim-answer-input').value = '';

    const claimBtn = document.getElementById('mark-claimed-btn');
    const verBox = document.getElementById('modal-verification-box');

    if (item.type === 'Claimed') {
        claimBtn.classList.add('hidden');
        verBox.classList.add('hidden');
    } else {
        claimBtn.classList.remove('hidden');
        verBox.classList.remove('hidden');
    }

    document.getElementById('item-modal').classList.remove('hidden');
}

function closeItemModal() {
    document.getElementById('item-modal').classList.add('hidden');
    activeModalItemId = null;
}

function handleClaimAction() {
    if (!activeModalItemId) return;
    const answer = document.getElementById('claim-answer-input').value.trim();
    if (!answer) {
        showToast('Please enter a verification response or roll number first.', 'rose');
        return;
    }

    const idx = itemsData.findIndex(i => i.id === activeModalItemId);
    if (idx !== -1) {
        itemsData[idx].type = 'Claimed';
        saveItemsToStorage();
        renderAll();
        closeItemModal();
        showToast('Item marked as Claimed & Resolved! Thank you for helping the campus.', 'emerald');
    }
}

function copyContactInfo() {
    const contactText = document.getElementById('modal-contact').textContent;
    navigator.clipboard?.writeText(contactText);
    showToast(`Copied "${contactText}" to clipboard!`, 'indigo');
}

function openPosterModal(itemId) {
    const item = itemsData.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('poster-uni-name').textContent = (brandingData.uniName || 'BENNETT UNIVERSITY').toUpperCase() + ' • CAMPUS NOTICE';
    const banner = document.getElementById('poster-Banner');
    banner.textContent = item.type === 'Found' ? 'FOUND ITEM NOTICE' : 'LOST ITEM ALERT';
    banner.className = `text-2xl font-black tracking-tight mt-1 ${item.type === 'Found' ? 'text-emerald-600' : 'text-rose-600'}`;

    document.getElementById('poster-icon').className = `fa-solid ${item.icon || 'fa-box'}`;
    document.getElementById('poster-title').textContent = item.title;
    document.getElementById('poster-location').textContent = `${item.location} • ${item.date}`;
    document.getElementById('poster-desc').textContent = item.description;
    document.getElementById('poster-reporter').textContent = item.reporter;
    document.getElementById('poster-contact').textContent = item.contact;

    document.getElementById('poster-modal').classList.remove('hidden');
}

function openPosterFromItemModal() {
    if (!activeModalItemId) return;
    const id = activeModalItemId;
    closeItemModal();
    openPosterModal(id);
}

function closePosterModal() {
    document.getElementById('poster-modal').classList.add('hidden');
}

// --- 8. THEME & UTILITIES ---
function initTheme() {
    const savedTheme = localStorage.getItem('unifind_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('mobile-theme-toggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('unifind_theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    const iconClass = isDark ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon';
    document.getElementById('theme-icon').className = iconClass;
    document.getElementById('mobile-theme-icon').className = iconClass;
}

function showToast(message, color = 'indigo') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const bgMap = {
        indigo: 'bg-indigo-600',
        emerald: 'bg-emerald-600',
        rose: 'bg-rose-600'
    };
    toast.className = `${bgMap[color] || 'bg-indigo-600'} text-white px-4 py-3 rounded-2xl shadow-lg text-xs font-semibold flex items-center justify-between gap-3 pointer-events-auto animate-fade-in`;
    toast.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i>
            <span>${escapeHTML(message)}</span>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3500);
}

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}