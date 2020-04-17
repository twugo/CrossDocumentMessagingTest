document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('message', (ev) => {
        const origin = 'http://localhost';
        if(ev.origin !== origin) return;
        document.getElementById('result').textContent = ev.data;
    });
});