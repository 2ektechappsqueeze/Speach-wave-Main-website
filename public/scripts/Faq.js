   // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const answer = item.querySelector('.faq-answer');
                const isOpen = item.classList.contains('active');
                
                // Close all other items
                document.querySelectorAll('.faq-item.active').forEach(openItem => {
                    if (openItem !== item) {
                        openItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });

        // FAQ tab filtering
        document.querySelectorAll('.faq-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                
                // Update active tab
                document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Filter items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Show pricing category by default
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item.dataset.category !== 'pricing') {
                item.style.display = 'none';
            }
        });