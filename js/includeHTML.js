const includeHTML = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Error network');
    }
    return response.text();
  })
    .then((html) => {
      document.body.innerHTML += html;

    }).catch(error => {
      console.error('Error fetching HTML file:', error);
    });

};
