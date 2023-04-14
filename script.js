let downloadBtn = document.getElementById('download-btn');
let downloadLink = document.getElementById('download-link');

downloadBtn.addEventListener('click', function() {
  let videoUrl = document.getElementById('video-url').value;
  downloadLink.href = videoUrl;
  downloadLink.click();
});
