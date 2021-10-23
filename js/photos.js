function loadPhotos() {
    fetch('images/photos/photos.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            let json = JSON.stringify(myJson);
            addContent(JSON.parse(json));
        });
}

function addContent(json) {

    let section = document.getElementById("pictures");
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    for(let entry in json) {
        console.debug(entry.toString());

        let img = document.createElement("img");
        img.className = "rounded float-left hover";
        img.setAttribute("src", json[entry].src);

        if(json[entry]["panorama"] === false) {
            img.style.height = "300px";
            img.style.width = "300px";
        } else {
            img.style.height = "600px";
            img.style.width = "88vw";
        }
        img.style.marginRight = "1vw";
        img.style.marginBottom = "1vh";

        let hrefDiv = document.createElement("a");
        hrefDiv.setAttribute("href", json[entry].src);

        hrefDiv.append(img);
        hrefDiv.append(img);
        section.appendChild(hrefDiv);
    }
}