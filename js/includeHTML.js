const includeHTML = (file) => {
  return new Promise((resolve,reject) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange =  () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        document.body.innerHTML += xmlHttp.responseText;
        resolve();
      }

    };

    xmlHttp.open("GET", file, true);
    xmlHttp.send();
  });
};
