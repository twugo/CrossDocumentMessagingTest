document.addEventListener('DOMContentLoaded', () => {
    const target = 'http://twugo.github.io/CrossDocumentMessagingTest';

    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('frame').contentWindow.postMessage(
            document.getElementById('message').value, target
        );
    });

    document.addEventListener('message', (ev) => {
        if(ev.origin !== target) return;
        console.log(ev.data);
    });
});