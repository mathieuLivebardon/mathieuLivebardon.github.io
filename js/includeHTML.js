const includeHTML = (file) => {
  return new Promise((resolve,reject) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.body.innerHTML += this.responseText;
        resolve();
      }
      else{
        reject();
      }
    };

    xmlHttp.open("GET", file, true);
    xmlHttp.send();
  });
};
