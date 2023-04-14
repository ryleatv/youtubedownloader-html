function download() {
  const url = document.getElementById("urlInput").value;
  const spawn = require('child_process').spawn;
  const youtubeDL = spawn('youtube-dl', [url]);

  youtubeDL.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  youtubeDL.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  youtubeDL.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
