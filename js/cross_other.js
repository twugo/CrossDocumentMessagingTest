document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('message', (ev) => {
        const origin = 'http://localhost';
        if(ev.origin !== origin) return;
        document.getElementById('result').textContent = ev.data;

        // 現在の日付を返送
        const current = new Data();
        ev.source.postMessage(current, origin);
    });
});