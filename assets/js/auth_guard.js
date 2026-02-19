
import { auth } from './firebase_config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

function checkAuth() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // User is signed out, redirect to login page
            // Adjust path based on current location to find root/login
            // For now, let's assume simple relative path logic or absolute path usage if we were on a server.
            // Since this is local file system, we'll try to go to the known login location.

            console.log("User not logged in. Redirecting...");
            // Simple heuristic to find the login page relative to admin pages
            // Most admin pages are 1 level deep from root.
            window.location.href = "../admin-login/";
        } else {
            // User is signed in
            console.log("User is logged in:", user.email);
            // Optionally, we could show the user's avatar/name here
        }
    });
}

// Run check
checkAuth();
