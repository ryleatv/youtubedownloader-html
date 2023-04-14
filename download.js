function downloadVideo() {
  var url = document.getElementById("url").value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/download?video_url=' + encodeURIComponent(url), true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    if (this.status === 200) {
      var blob = new Blob([this.response], {type: 'video/mp4'});
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'video.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('Error:', this.statusText);
    }
  };
  xhr.onerror = function() {
    console.error('Error:', this.statusText);
  };
  xhr.send();
}
