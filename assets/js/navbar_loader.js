const navbarHTML = `
<header
    class="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 font-display">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <!-- Logo Section -->
            <div class="flex-shrink-0 flex items-center">
                <img src="../components/ACM_NMIET_LOGO.png" alt="ACM NMIET Logo" class="h-12 w-auto">
            </div>
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center gap-8">
                <!-- Home -->
                <a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary nav-link"
                    href="../home/" data-page="home">
                    Home
                </a>
                <a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary nav-link"
                    href="../what-is-acm/" data-page="what-is-acm">
                    What is ACM
                </a>
                <!-- Dropdown Menu -->
                <div class="relative group h-full flex items-center">
                    <button id="dropdown-btn"
                        class="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary focus:outline-none py-8">
                        ACM NMIET
                        <span class="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                    </button>
                    <!-- Dropdown Panel -->
                    <div
                        class="absolute top-[80%] left-1/2 -translate-x-1/2 w-56 invisible opacity-0 group-hover:visible group-hover:opacity-100 pt-2">
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden ring-1 ring-black ring-opacity-5 p-1">
                            <a class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary rounded-lg"
                                href="../about/">
                                <span class="material-symbols-outlined text-lg text-slate-400">info</span>
                                About
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary rounded-lg"
                                href="../about/#vision">
                                <span class="material-symbols-outlined text-lg text-slate-400">visibility</span>
                                Vision
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary rounded-lg"
                                href="../about/#mission">
                                <span class="material-symbols-outlined text-lg text-slate-400">flag</span>
                                Mission
                            </a>
                            <div class="h-px bg-slate-100 dark:bg-slate-700 my-1 mx-2"></div>
                            <a class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary rounded-lg"
                                href="../about/#roadmap">
                                <span class="material-symbols-outlined text-lg text-slate-400">map</span>
                                Roadmap
                            </a>
                        </div>
                    </div>
                </div>
                <a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary nav-link"
                    href="../focus-areas/" data-page="focus-areas">
                    Focus Areas
                </a>
                <a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary nav-link"
                    href="../team/" data-page="team">
                    Our Team
                </a>
                <!-- ACM Events Dropdown -->
                <div class="relative group h-full flex items-center">
                    <button id="events-dropdown-btn"
                        class="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary focus:outline-none py-8">
                        ACM Events
                        <span class="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                    </button>
                    <!-- Dropdown Panel -->
                    <div
                        class="absolute top-[80%] left-1/2 -translate-x-1/2 w-56 invisible opacity-0 group-hover:visible group-hover:opacity-100 pt-2">
                        <div
                            class="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden ring-1 ring-black ring-opacity-5 p-1">
                            <a class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary rounded-lg"
                                href="../events/">
                                <span class="material-symbols-outlined text-lg text-slate-400">event_upcoming</span>
                                Upcoming Events
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary rounded-lg"
                                href="../past-events/">
                                <span class="material-symbols-outlined text-lg text-slate-400">history</span>
                                Past Events
                            </a>
                        </div>
                    </div>
                </div>
                <a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary nav-link"
                    href="../contact/" data-page="contact">
                    Contact Us
                </a>
            </nav>
            <!-- Right Side Actions -->
            <div class="flex items-center gap-4">
                <!-- CTA Button -->
                <a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-primary border border-transparent rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm"
                    href="../join/">
                    Join ACM
                </a>
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn"
                    class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                    type="button">
                    <span class="sr-only">Open main menu</span>
                    <span class="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu"
        class="hidden lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark absolute w-full left-0 shadow-lg">
        <div class="px-4 pt-2 pb-6 space-y-1">
            <a class="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 nav-link-mobile"
                href="../home/" data-page="home">Home</a>
            <a class="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 nav-link-mobile"
                href="../what-is-acm/" data-page="what-is-acm">What is ACM</a>
            <!-- Mobile Submenu -->
            <div class="pl-4 border-l-2 border-slate-100 dark:border-slate-700 ml-3 my-2 space-y-1">
                <p class="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">ACM NMIET</p>
                <a class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                    href="../about/">About</a>
                <a class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                    href="../about/#vision">Vision</a>
                <a class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                    href="../about/#mission">Mission</a>
                <a class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                    href="../about/#roadmap">Roadmap</a>
            </div>
            <a class="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 nav-link-mobile"
                href="../focus-areas/" data-page="focus-areas">Focus Areas</a>
            <a class="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 nav-link-mobile"
                href="../team/" data-page="team">Our Team</a>
            <!-- Mobile ACM Events Submenu -->
            <div class="pl-4 border-l-2 border-slate-100 dark:border-slate-700 ml-3 my-2 space-y-1">
                <p class="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">ACM Events</p>
                <a class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                    href="../events/">Upcoming Events</a>
                <a class="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                    href="../past-events/">Past Events</a>
            </div>
            <a class="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 nav-link-mobile"
                href="../contact/" data-page="contact">Contact Us</a>
            <div class="pt-4">
                <a class="flex w-full items-center justify-center px-4 py-3 rounded-lg text-base font-bold text-white bg-primary hover:bg-primary/90"
                    href="../join/">
                    Join ACM Now
                </a>
            </div>
        </div>
    </div>
</header>
`;

function loadNavbar() {
    const navbarPlaceholder = document.getElementById('acm-navbar');
    if (!navbarPlaceholder) {
        console.error('Navbar placeholder not found');
        return;
    }

    // Replace the outerHTML of the placeholder with the navbarHTML
    // This allows the <header> to be the direct child, preserving 'sticky' behavior if configured that way
    navbarPlaceholder.outerHTML = navbarHTML;

    // Initialize Mobile Menu
    initMobileMenu();

    // Highlight Active Page
    highlightActivePage();
}

function initMobileMenu() {
    // console.log("Initializing mobile menu..."); // Debug log
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
        // console.log("Mobile menu elements found."); // Debug log
        btn.onclick = (e) => {
            e.stopPropagation();
            menu.classList.toggle("hidden");
            // console.log("Menu toggled, hidden:", menu.classList.contains("hidden")); // Debug log
        };

        // Close menu when clicking links
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !btn.contains(event.target) && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        });
    } else {
        console.warn("Mobile menu elements (btn or menu) not found!");
    }
}

function highlightActivePage() {
    // Get current path folder name (e.g. 'home')
    const pathSegments = window.location.pathname.split('/');
    // Check various segments to handle different local/production structures
    const currentFolder = pathSegments[pathSegments.length - 2] || '';

    // Find link matching the specific data-page attribute
    const activeLink = document.querySelector(`.nav-link[data-page="${currentFolder}"]`);
    const activeMobileLink = document.querySelector(`.nav-link-mobile[data-page="${currentFolder}"]`);

    if (activeLink) {
        // Remove default inactive classes AND transition-colors to prevent flickering
        activeLink.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:text-primary', 'dark:hover:text-primary', 'transition-colors');
        // Add active classes
        activeLink.classList.add('text-primary', 'relative', 'after:absolute', 'after:bottom-[-2px]', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-primary', 'after:rounded-full');
    }

    // Highlight mobile menu active link
    if (activeMobileLink) {
        activeMobileLink.classList.remove('text-slate-600', 'dark:text-slate-300', 'transition-colors');
        activeMobileLink.classList.add('text-primary', 'bg-primary/5');
    }
}

// Execute immediately
// Execute safely
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}
