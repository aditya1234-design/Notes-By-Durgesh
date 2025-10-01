function downloadFile(filePath) {
    const a = document.createElement('a');
    a.href = filePath;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}