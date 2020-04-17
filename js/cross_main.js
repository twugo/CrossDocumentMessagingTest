document.addEventListener('DOMContentLoaded', () => {
    const target = 'http://www.wings.msn.to';

    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('iframe').contentWindow.postMessage(
            document.getElementById('message').value, target
        );
    });
});