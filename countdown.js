/** Countdown **/
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        function updateCountdown() {
            const now = new Date().getTime();
            const diff = targetDate - now;

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = String(d).padStart(2, '0');
            document.getElementById("hours").innerText = String(h).padStart(2, '0');
            document.getElementById("minutes").innerText = String(m).padStart(2, '0');
            document.getElementById("seconds").innerText = String(s).padStart(2, '0');
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();