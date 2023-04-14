let downloadBtn = document.getElementById('download-btn');
let downloadLink = document.getElementById('download-link');

downloadBtn.addEventListener('click', function() {
  let videoUrl = document.getElementById('video-url').value;
  downloadLink.href = videoUrl;
  downloadLink.click();
});
function downloadVideo() {
  var link = document.getElementById("videoLink").value;
  var filename = document.getElementById("videoTitle").textContent;
  var downloadLink = "https://www.y2mate.com/mates/en68/analyze/ajax";

  var data = {
    url: link,
    q_auto: 1,
    ajax: 1
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", downloadLink, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.responseType = "json";

  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      var response = this.response;
      var downloadUrl = response.result.links[0].url;

      var a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename + ".mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  xhr.send(Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join("&"));
}
