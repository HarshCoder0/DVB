// Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Simulate radio player status
        const nowPlaying = [
            "Dominion Devotion - Morning Glory",
            "Tech Talk Nigeria - AI & Kingdom Impact",
            "Voices of Influence with Pastor James",
            "Gospel Hour - Worship Experience",
            "Marketplace Mondays - Kingdom Entrepreneurship"
        ];
        
        let currentTrack = 0;
        setInterval(() => {
            currentTrack = (currentTrack + 1) % nowPlaying.length;
            document.getElementById('now-playing').textContent = nowPlaying[currentTrack];
        }, 10000);