const images = [
      { url: 'https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1' },
      { url: 'https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1' },
      { url: 'https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1' }
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