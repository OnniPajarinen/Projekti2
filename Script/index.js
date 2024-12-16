function loadAndParseNews() {
    let feedUrl = "https://cors-anywhere.herokuapp.com/http://www.iltalehti.fi/rss/uutiset.xml";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", feedUrl, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let xmldoc = xmlhttp.responseXML;
            let items = xmldoc.getElementsByTagName("item");

            let output = "<ul>";
            for (let i = 0; i < items.length; i++) {
                let title = items[i].getElementsByTagName("title")[0].textContent;
                let link = items[i].getElementsByTagName("link")[0].textContent;

                output += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            }
            output += "</ul>";

            document.getElementById("newsfeed").innerHTML = output;
        } else if (xmlhttp.readyState === 4) {
            document.getElementById("newsfeed").innerHTML =
                "<p>Failed to load the newsfeed. Please try again later.</p>";
        }
    };
}
