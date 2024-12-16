const i1 = document.getElementById("t1");
const i2 = document.getElementById("t2");
const i3 = document.getElementById("t3");
const i4 = document.getElementById("t4");
const i5 = document.getElementById("t5");
const i6 = document.getElementById("t6");
const i7 = document.getElementById("t7");

i1.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Omena, Espoossa!")
}
);

i2.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Sello, Espoossa!")
}
);

i3.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Itis, Helsingissä!")
}
);

i4.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Kinopalatsi, Helsingissä!")
}
);

i5.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Maxim, Helsingissä!")
}
);

i6.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Tennispalatsi, Helsingissä!")
}
);

i7.addEventListener("click", function(){
    alert("Tässä kaikki elokuvamme Flamingo, Vantaalla!")
}
);

function function1() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const showNodes = xmlDoc.getElementsByTagName("Theatre");
          const showList = document.getElementById("showList");

          for (let i = 0; i < showNodes.length; i++) {
            const theatreName = showNodes[i].textContent.trim();
            if (theatreName === "Omena, Espoo") {
              const showTime = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
              const showTimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
              const showDetails = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
              const showTitle = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
              console.log(showTitle)
              console.log(showTime)
            }
          }
        } 
    }
};
  

function function2(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmlDoc = xmlhttp.responseXML;

            let theatre = xmlDoc.getElementsByTagName("Theatre");
            let unique = new Set();

            for (let i = 0; i < theatre.length; i++) {
              let theatres = theatre[i].textContent.trim();
                unique.add(theatres);
            }

            unique.forEach((theatre) => {
                console.log(theatre)
            });
        }
    };
}

function function3(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmlDoc = xmlhttp.responseXML;

            let theatre = xmlDoc.getElementsByTagName("Theatre");
            let unique = new Set();

            for (let i = 0; i < theatre.length; i++) {
              let theatres = theatre[i].textContent.trim();
                unique.add(theatres);
            }

            unique.forEach((theatre) => {
                console.log(theatre)
            });
        }
    };
}

function function4(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmlDoc = xmlhttp.responseXML;

            let theatre = xmlDoc.getElementsByTagName("Theatre");
            let unique = new Set();

            for (let i = 0; i < theatre.length; i++) {
              let theatres = theatre[i].textContent.trim();
                unique.add(theatres);
            }

            unique.forEach((theatre) => {
                console.log(theatre)
            });
        }
    };
}

function function5(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmlDoc = xmlhttp.responseXML;

            let theatre = xmlDoc.getElementsByTagName("Theatre");
            let unique = new Set();

            for (let i = 0; i < theatre.length; i++) {
              let theatres = theatre[i].textContent.trim();
                unique.add(theatres);
            }

            unique.forEach((theatre) => {
                console.log(theatre)
            });
        }
    };
}

function function6(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
        xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmlDoc = xmlhttp.responseXML;

            let theatre = xmlDoc.getElementsByTagName("Theatre");
            let unique = new Set();

            for (let i = 0; i < theatre.length; i++) {
            let theatres = theatre[i].textContent.trim();
            unique.add(theatres);
            }

            unique.forEach((theatre) => {
            console.log(theatre)
            });
        }
    };
}

function function7(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let xmlDoc = xmlhttp.responseXML;

            let theatre = xmlDoc.getElementsByTagName("Theatre");
            let unique = new Set();

            for (let i = 0; i < theatre.length; i++) {
              let theatres = theatre[i].textContent.trim();
                unique.add(theatres);
            }

            unique.forEach((theatre) => {
                console.log(theatre)
            });
        }
    };
}