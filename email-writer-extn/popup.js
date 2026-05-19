document.getElementById('setParameters').addEventListener('click', () => {
    const tone = document.getElementById('tone').value;
    const wordCount = document.getElementById('wordCount').value;
    chrome.storage.sync.set({ tone, wordCount }, () => {
        console.log('Parameters saved:', { tone, wordCount });
        alert('Parameters have been set.');
    });
});
