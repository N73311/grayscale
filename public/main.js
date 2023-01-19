(async () => {
  let rust = null;

  try {
    rust = await import('../pkg');
  } catch (e) {
    console.error(e);
    return;
  }

  const input = document.getElementById('upload');
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const base64 = fileReader.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/
        , '');

    const imageDataURL = rust.grayscale(base64);
    document.getElementById('new-img').setAttribute('src', imageDataURL);
  };

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0]);
  });

})();