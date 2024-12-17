const i1 = document.getElementById("t1");
const i2 = document.getElementById("t2");
const i3 = document.getElementById("t3");
const i4 = document.getElementById("t4");
const i5 = document.getElementById("t5");
const i6 = document.getElementById("t6");
const i7 = document.getElementById("t7");

i1.addEventListener("click", function(){
    document.getElementById("movieList").innerHTML = ""
    document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Omena, Espoossa!`
}
);

i2.addEventListener("click", function(){
    document.getElementById("movieList").innerHTML = ""
    document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Sello, Espoossa!`

}
);

i3.addEventListener("click", function(){
    document.getElementById("movieList").innerHTML = ""
    document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Itis, Helsingissä!`

}
);

i4.addEventListener("click", function(){
    document.getElementById("movieList").innerHTML = ""
    document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Kinopalatsi, Helsingissä!`

}
);

i5.addEventListener("click", function(){
    document.getElementById("movieList").innerHTML = ""
    document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Maxim, Helsingissä!`

}
);

i6.addEventListener("click", function(){
        document.getElementById("movieList").innerHTML = ""
        document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Tennispalatsi, Helsingissä!`

}
);

i7.addEventListener("click", function(){
    document.getElementById("movieList").innerHTML = ""
    document.getElementById("uusio").innerHTML = `Tässä kaikki elokuvamme tänään ${today} Flamingo, Vantaalla!`

}
);

function CurrentDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${day}.${month}.${year}`;
}

function DateTime(dateTimeStr) {
    const dateTime = new Date(dateTimeStr);

    const day = String(dateTime.getDate()).padStart(2, "0");
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const year = dateTime.getFullYear();

    const hours = String(dateTime.getHours()).padStart(2, "0");
    const minutes = String(dateTime.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} klo ${hours}:${minutes}`;
}

var today = CurrentDate();
console.log(today);


function addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic) {
    const listElement = document.getElementById("movieList");
    

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <p><strong>Teatteri:</strong> ${theatreName}</p>
        <p><strong>Elokuva:</strong> ${Title}</p>
        <p><strong>Sali:</strong> ${Sali}</p>
        <p><strong>Aloitus aika:</strong> ${RealTime}</p>
        <p><strong>Lopetus aika:</strong> ${RealTimeEnd}</p>
        <img src="${Pic}" alt="${Title} kuva" width="350" height="500">
        <hr><hr><hr>
    `;

    listElement.appendChild(listItem);
}

function function1() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Omena, Espoo") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
            }
          }
        } 
    }
};
  

function function2(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Sello, Espoo") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
            }
          }
        } 
    }
}

function function3(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Itis, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
            }
          }
        } 
    }
}

function function4(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Kinopalatsi, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
            }
          }
        } 
    }
}

function function5(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Maxim, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
            }
          }
        } 
    }
}

function function6(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Tennispalatsi, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
            }
          }
        } 
    }
}

function function7(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `https://www.finnkino.fi/xml/Schedule/?area=1029&dt=${today}`, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Flamingo, Vantaa") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const RealTime = DateTime(Time);
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const RealTimeEnd = DateTime(TimeEnd);                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                const Pic = xmlDoc.getElementsByTagName("EventMediumImagePortrait")[i].textContent.trim();
                console.log(theatreName, Title, Sali, Time, TimeEnd);

                addMovieToList(theatreName, Title, Sali, RealTime, RealTimeEnd, Pic);
                
            }
          }
        } 
    }
}