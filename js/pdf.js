function loadPdf(fileName) {
    fetch('json/' + fileName)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            let json = JSON.stringify(myJson);
            addContent(JSON.parse(json));
        });
}

function addContent(json) {

    let section = document.getElementById("main-columns");
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    for(let entry in json) {
        console.debug(entry.toString());

        let columnDiv = document.createElement("div");
        columnDiv.className = "column is-full";

        let hrefDiv = document.createElement("a");
        hrefDiv.setAttribute("href", json[entry].link);

        let notificationDiv = document.createElement("div");
        notificationDiv.className = "notification is-link";

        let title = document.createElement("h1");
        title.className = "title";
        title.innerText = json[entry].displayName;

        let body = document.createElement("p");
        body.className = "is-size-5";
        body.innerText = json[entry].description;

        notificationDiv.append(title);
        notificationDiv.append(body);
        hrefDiv.append(notificationDiv);
        columnDiv.append(hrefDiv);
        section.appendChild(columnDiv);
    }
}