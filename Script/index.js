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
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Omena, Espoo") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                console.log(theatreName)
                console.log(Title)
                console.log(Sali)
                console.log(Time)
                console.log(TimeEnd)
            }
          }
        } 
    }
};
  

function function2(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Sello, Espoo") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                console.log(theatreName)
                console.log(Title)
                console.log(Sali)
                console.log(Time)
                console.log(TimeEnd)
            }
          }
        } 
    }
}

function function3(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Itis, Helsinki") {
              const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
              const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
              const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
              const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
              const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
              console.log(theatreName)
              console.log(Title)
              console.log(Sali)
              console.log(Time)
              console.log(TimeEnd)
            }
          }
        } 
    }
}

function function4(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Kinopalatsi, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                console.log(theatreName)
                console.log(Title)
                console.log(Sali)
                console.log(Time)
                console.log(TimeEnd)
            }
          }
        } 
    }
}

function function5(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Maxim, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                console.log(theatreName)
                console.log(Title)
                console.log(Sali)
                console.log(Time)
                console.log(TimeEnd)
            }
          }
        } 
    }
}

function function6(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Tennispalatsi, Helsinki") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                console.log(theatreName)
                console.log(Title)
                console.log(Sali)
                console.log(Time)
                console.log(TimeEnd)
            }
          }
        } 
    }
}

function function7(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1029&dt=16.12.2024", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          const xmlDoc = xmlhttp.responseXML;
          const Theatre = xmlDoc.getElementsByTagName("Theatre");

          for (let i = 0; i < Theatre.length; i++) {
            const theatreName = Theatre[i].textContent.trim();
            if (theatreName === "Flamingo, Vantaa") {
                const Time = xmlDoc.getElementsByTagName("dttmShowStart")[i].textContent.trim();
                const TimeEnd = xmlDoc.getElementsByTagName("dttmShowEnd")[i].textContent.trim();
                const Show = xmlDoc.getElementsByTagName("Show")[i].textContent.trim();
                const Title = xmlDoc.getElementsByTagName("Title")[i].textContent.trim();
                const Sali = xmlDoc.getElementsByTagName("TheatreAuditorium")[i].textContent.trim();
                console.log(theatreName)
                console.log(Title)
                console.log(Sali)
                console.log(Time)
                console.log(TimeEnd)
            }
          }
        } 
    }
}

