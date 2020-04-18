document.addEventListener('DOMContentLoaded', () => {
    const target = 'https://twugo.github.io';

    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('frame').contentWindow.postMessage(
            document.getElementById('message').value, target
        );
    });

    // 受信した日付をログに出力
    window.addEventListener('message', (ev) => {
        if(ev.origin !== target){
            console.log(ev.origin);
            return;
        }
        console.log(ev.data);
    });
});