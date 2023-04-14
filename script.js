<script>
    function downloadMp4() {
        var link = document.getElementById("link").value;
        var a = document.createElement("a");
        a.href = "http://youtubeinmp4.com/redirect.php?video=" + link;
        a.download = "video.mp4";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
</script>

<input type="text" id="link" placeholder="Enter YouTube video URL here">
<button onclick="downloadMp4()">Download</button>
