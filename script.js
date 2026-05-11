// Funzione per creare elementi fluttuanti (fiori e cuori)
function createFloatingElements() {
    const symbols = ['✿', '♥', '🌸', '✨'];
    const container = document.body;

    setInterval(() => {
        const el = document.createElement('div');
        el.className = 'floating';
        el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.fontSize = (Math.random() * 20 + 10) + 'px';
        el.style.duration = (Math.random() * 5 + 5) + 's';
        
        container.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 10000);
    }, 600);
}

document.getElementById('magicBtn').addEventListener('click', function() {
    document.getElementById('secretMessage').classList.remove('hidden');
    this.style.display = 'none';
});

// Avvia i fiori e cuori all'apertura
createFloatingElements();
