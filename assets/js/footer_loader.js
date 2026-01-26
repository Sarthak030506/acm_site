document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="bg-[#003a5c] text-white pt-16 pb-8 border-t border-white/5 relative mt-auto">
        <!-- Decorative top highlight -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-20"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main 4-Column Layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Column 1: Identity & Social -->
                <div class="flex flex-col gap-6">
                    <!-- Branding -->
                    <div class="flex items-center gap-3 group cursor-pointer">
                        <div class="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50 overflow-hidden" data-alt="ACM Logo Symbol">
                            <span class="material-symbols-outlined text-primary text-2xl">diamond</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-lg font-bold leading-none tracking-tight">ACM NMIET</span>
                            <span class="text-[10px] text-blue-200 uppercase tracking-widest font-medium">Student Chapter</span>
                        </div>
                    </div>
                    <!-- Description -->
                    <p class="text-blue-100/80 text-sm leading-relaxed pr-4">
                        Empowering students through computing education, professional development, and technical innovation.
                    </p>
                    <!-- Social Icons Row -->
                    <div class="flex flex-wrap gap-3 mt-2">
                        <a aria-label="LinkedIn" class="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" href="#">
                            <span class="material-symbols-outlined text-[20px]">work</span>
                        </a>
                        <a aria-label="Instagram" class="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" href="#">
                            <span class="material-symbols-outlined text-[20px]">photo_camera</span>
                        </a>
                        <a aria-label="Facebook" class="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" href="#">
                            <span class="material-symbols-outlined text-[20px]">groups</span>
                        </a>
                        <a aria-label="Twitter" class="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" href="#">
                            <span class="material-symbols-outlined text-[20px]">chat_bubble</span>
                        </a>
                        <a aria-label="GitHub" class="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group" href="#">
                            <span class="material-symbols-outlined text-[20px]">code</span>
                        </a>
                    </div>
                </div>
                <!-- Column 2: Quick Links -->
                <div>
                    <h3 class="text-white text-base font-bold uppercase tracking-wider mb-6 border-l-2 border-blue-400 pl-3">Quick Links</h3>
                    <ul class="flex flex-col gap-3">
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2" href="../home_page/code.html">
                                <span class="material-symbols-outlined text-[16px] opacity-0 -ml-6 transition-all duration-200 hover-target:opacity-100 hover-target:ml-0">chevron_right</span>
                                Home
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm" href="../what_is_acm_page/code.html">What is ACM</a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm" href="../our_team_page/code.html">Our Team</a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm" href="../join_acm_page/code.html">Join ACM</a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm" href="../contact_page/code.html">Contact Us</a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm" href="../admin_panel_login_screen/code.html">Admin Dashboard</a>
                        </li>
                    </ul>
                </div>
                <!-- Column 3: Focus Areas -->
                <div>
                    <h3 class="text-white text-base font-bold uppercase tracking-wider mb-6 border-l-2 border-blue-400 pl-3">Focus Areas</h3>
                    <ul class="flex flex-col gap-3">
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm group flex items-center gap-2" href="../focus_areas_page/code.html">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-50 group-hover:opacity-100"></span>
                                AI / ML
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm group flex items-center gap-2" href="../focus_areas_page/code.html">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-50 group-hover:opacity-100"></span>
                                Web Development
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm group flex items-center gap-2" href="../focus_areas_page/code.html">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-50 group-hover:opacity-100"></span>
                                Cyber Security
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm group flex items-center gap-2" href="../focus_areas_page/code.html">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-50 group-hover:opacity-100"></span>
                                Cloud Computing
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Column 4: Official ACM Resources -->
                <div>
                    <h3 class="text-white text-base font-bold uppercase tracking-wider mb-6 border-l-2 border-blue-400 pl-3">ACM Resources</h3>
                    <ul class="flex flex-col gap-4">
                        <li>
                            <a class="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20 group" href="https://www.acm.org" target="_blank">
                                <span class="material-symbols-outlined text-blue-300 group-hover:text-white mt-0.5">language</span>
                                <div>
                                    <span class="block text-sm font-semibold text-white">ACM.org</span>
                                    <span class="block text-xs text-blue-200/60 mt-0.5">Official Website</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white transition-colors text-sm flex items-center justify-between group" href="https://www.acm.org/membership" target="_blank">
                                Student Membership
                                <span class="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white transition-colors text-sm flex items-center justify-between group" href="https://dl.acm.org/" target="_blank">
                                ACM Digital Library
                                <span class="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                        </li>
                        <li>
                            <a class="text-blue-100/70 hover:text-white transition-colors text-sm flex items-center justify-between group" href="https://www.acm.org/code-of-ethics" target="_blank">
                                ACM Code of Ethics
                                <span class="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">policy</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Divider -->
            <div class="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-8"></div>
            <!-- Bottom Bar -->
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p class="text-blue-200/60 text-xs font-light tracking-wide">
                    © 2025 ACM NMIET Student Chapter. All rights reserved.
                </p>
                <div class="flex flex-wrap justify-center items-center gap-4">
                    <span class="text-blue-200/60 text-xs hidden md:block">|</span>
                    <span class="text-blue-200/80 text-xs font-medium">Official ACM Student Chapter at NMIET</span>
                    <div class="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-900/50 border border-blue-500/30">
                        <div class="h-4 w-4 rounded-full bg-blue-400 flex items-center justify-center" data-alt="Small ACM Badge">
                            <span class="material-symbols-outlined text-[10px] text-primary font-bold">diamond</span>
                        </div>
                        <span class="text-[10px] font-bold tracking-widest text-blue-200">ACM</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;

    const footerElement = document.getElementById('acm-footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});
