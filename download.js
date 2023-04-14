const downloadVideo = (url) => {
  fetch(`https://your-video-downloader-api.com/download?url=${url}`)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'video.mp4';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error('Error downloading video:', error);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.querySelector('#url').value;
  downloadVideo(url);
});
