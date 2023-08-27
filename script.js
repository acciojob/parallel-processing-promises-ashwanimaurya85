const images = [
      { url: 'image_url_1.jpg' },
      { url: 'image_url_2.jpg' },
      { url: 'image_url_3.jpg' }
      // Add more image URLs as needed
    ];

    function downloadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
      });
    }

    document.getElementById('download-images-button').addEventListener('click', async () => {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';

      try {
        const downloadedImages = await Promise.all(images.map(image => downloadImage(image.url)));
        downloadedImages.forEach(img => {
          outputDiv.appendChild(img);
        });
      } catch (error) {
        console.error(error.message);
      }
    });