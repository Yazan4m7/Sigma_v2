/**
 * Auto-hide Sidebar with Pin Functionality
 * Features:
 * - Auto-collapse sidebar showing only icons
 * - Expand on hover
 * - Pin button to keep sidebar open
 * - Smooth transitions
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {

        const sidebar = document.getElementById('sidebar');
        const pinBtn = document.getElementById('pinSidebarBtn');

        if (!sidebar || !pinBtn) {
            console.warn('Sidebar or pin button not found');
            return;
        }

        // Check localStorage for pinned state
        const isPinned = localStorage.getItem('sidebarPinned') === 'true';

        // Initialize sidebar state
        if (isPinned) {
            sidebar.classList.add('pinned');
        }

        // Pin button click handler
        pinBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            sidebar.classList.toggle('pinned');

            // Save state to localStorage
            const pinned = sidebar.classList.contains('pinned');
            localStorage.setItem('sidebarPinned', pinned);

            // Update button title
            pinBtn.title = pinned ? 'Unpin sidebar' : 'Pin sidebar';
        });

        // Hover functionality
        let hoverTimeout;

        sidebar.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);

            // Only add hover class if not pinned
            if (!sidebar.classList.contains('pinned')) {
                sidebar.classList.add('hovering');
            }
        });

        sidebar.addEventListener('mouseleave', function() {
            // Small delay to prevent flicker
            hoverTimeout = setTimeout(function() {
                sidebar.classList.remove('hovering');
            }, 100);
        });

        // Add data-title attributes to nav links for tooltips
        const navLinks = sidebar.querySelectorAll('.nav li a');
        navLinks.forEach(function(link) {
            const textElement = link.querySelector('p') || link.querySelector('.nav-link-text');
            if (textElement) {
                const title = textElement.textContent.trim();
                link.setAttribute('data-title', title);
            }
        });

        // Handle collapse menu items
        const collapseLinks = sidebar.querySelectorAll('[data-toggle="collapse"]');
        collapseLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // Only allow collapse functionality when sidebar is expanded
                if (!sidebar.classList.contains('pinned') && !sidebar.classList.contains('hovering')) {
                    e.preventDefault();
                    // Auto-pin sidebar when trying to expand a menu
                    sidebar.classList.add('pinned');
                    localStorage.setItem('sidebarPinned', 'true');

                    // Then trigger the collapse after a short delay
                    setTimeout(function() {
                        const target = link.getAttribute('href');
                        const element = document.querySelector(target);
                        if (element) {
                            // Toggle collapse
                            if (element.classList.contains('show')) {
                                element.classList.remove('show');
                                link.setAttribute('aria-expanded', 'false');
                            } else {
                                element.classList.add('show');
                                link.setAttribute('aria-expanded', 'true');
                            }
                        }
                    }, 350);
                }
            });
        });

        // Update main panel margin if it exists
        const mainPanel = document.querySelector('.main-panel');
        if (mainPanel) {
            // Observer to update margin based on sidebar state
            const updateMargin = function() {
                if (sidebar.classList.contains('pinned')) {
                    mainPanel.style.marginLeft = '260px';
                } else {
                    mainPanel.style.marginLeft = '70px';
                }
            };

            // Initial update
            updateMargin();

            // Watch for class changes
            const observer = new MutationObserver(updateMargin);
            observer.observe(sidebar, {
                attributes: true,
                attributeFilter: ['class']
            });
        }

        // Keyboard accessibility
        pinBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                pinBtn.click();
            }
        });

        console.log('Auto-hide sidebar initialized successfully');
    });

})();
