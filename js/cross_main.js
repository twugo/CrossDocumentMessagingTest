document.addEventListener('DOMContentLoaded', () => {
    const target = 'https://twugo.github.io/CrossDocumentMessagingTest';

    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('frame').contentWindow.postMessage(
            document.getElementById('message').value, target
        );
    });

    document.addEventListener('message', (ev) => {
        if(ev.origin !== target){
            console.log(ev.origin);
            return;
        }
        console.log(ev.data);
    });
});