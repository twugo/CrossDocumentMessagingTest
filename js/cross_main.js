document.addEventListener('DOMContentLoaded', () => {
    const target = 'http://twugo.github.io/CrossDocumentMessagingTest';

    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('iframe').contentWindow.postMessage(
            document.getElementById('message').value, target
        );
    });
});