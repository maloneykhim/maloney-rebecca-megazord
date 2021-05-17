// let questions = [
// {
//      q: "D'où viennent les membres du groupe Marianas Trench?",
//      o1: "Vancouver, Colombie-Britannique",
//      o2: "Montréal, Québec",
//      o3: "Los Angeles, Californie",
//      o4: "St-Petersburg, Floride",
//      r: 1,
//    },
//    {
//      q: "Quand est-ce que le groupe a débuté?",
//      o1: "15 décembre 2008",
//      o2: "5 novembre 2006",
//      o3: "3 octobre 2005",
//      r: 3,
//    },
//    {
//      q: "Avec quelle maison de disque le groupe a signé ses albums ?",
//      o1: "604 Records",
//      o2: "BlueBush Records",
//      o3: "Outerscope Records",
//      r: 1,
//   },
//    {
//     q: "Combien de membres ont présentement Marianas Trench?",
//     o1: "4",
//     o2: "2",
//     o3: "5",
//     o4: "3",
//     r: 1,
//    },
//    {
//      q: "Quelle chanson pop que Josh Ramsay a-t-il écrite?",
//      o1: "Call Me Maybe, Carly Rae",
//      o2: "Shape of You, Ed Sheeran",
//      o3: "Happier, Marshmello ft.Bastille",
//      o4: "Blank Space, Taylor Swift",
//      r: 1,
//    },
//    {
//      q:
//        "Vrai ou faux: La chanson Astoria était inspirée par le film The Goonies ?",
//      o1: "Vrai",
//      o2: "Faux",
//      r: 1,
//    },
//    {
//      q: "Quelle chanson inclut un rappel aux titres de chansons précédents?",
//      o1: "Fallout",
//      o2: "Dearly Departed",
//      o3: "One Love",
//      r: 2,
//    },
//    {
//      q: "Quelle chanson possède les paroles « Boots n’ cats » ?",
//      o1: "Shutter",
//      o2: "Good to You",
//      o3: "Pop 101",
//      r: 3,
//    },
//  ];

let modal = document.querySelector('.modal-body .quiz');
fetch('https://khimmaloney.com.n0c.world/marianastrench-api/index.php/wp-json/wp/v2/posts')
.then(response => response.json())
.then(result => new Quiz(result));

class Quiz {
  constructor(tableau) {
    this.quizBody = document.querySelector(".quiz");
    this.index = 0;
    this.score = 0;
    this.questions = tableau;
    this.questions.forEach((question, value) => {
      this.creerHtml(question, value + 1);
    });
    this.setVisible(this.index);
    this.answers();
  }
  creerHtml(Q, value) {
    //div
    this.div = document.createElement("div");
    this.div.classList.add("question");
    this.quizBody.appendChild(this.div);
    console.log(Q.acf);


    //strong
    this.strong = document.createElement("strong");
    this.strong.innerText = Q.acf.q;
    this.div.appendChild(this.strong);

    //br
    this.br = document.createElement("br");
    this.div.appendChild(this.br);

    //options
    if ("o1" in Q.acf) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "1");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.acf.o1;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o2" in Q.acf) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "2");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.acf.o2;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o3" in Q.acf) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "3");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.acf.o3;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o4" in Q.acf) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "4");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.acf.o4;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }
  }
  setVisible(number) {
    let divQ = document.querySelectorAll(".question");
    divQ.forEach((q) => {
      q.classList.remove("is-visible");
      divQ[number].classList.add("is-visible");
    });
  }
  answers() {
    let R = document.querySelectorAll("input[type = 'radio']");
    R.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          if (radio.value == this.questions[this.index].r) {
            this.score++;
            console.log("Bonne réponse: pointage " + this.score);

            gsap.fromTo(
              ".bonne-reponse",
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, duration: 0.3, ease: "slow" }
            );
            gsap.fromTo(
              ".cercle",
              { rotation: "0deg" },
              { rotation: "360deg", repeat: 2, ease: "sine" }
            );
            gsap.fromTo(
              ".pouce",
              { y: "0%" },
              {
                y: "10%",
                repeat: 2,
                duration: 0.3,
                delay: 0.75,
                ease: "power2",
              }
            );
            gsap.fromTo(
              ".face",
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, delay: 1.75 }
            );
            gsap.fromTo(
              ".bonne-reponse",
              { scale: 1, opacity: "100%" },
              {
                scale: 0.5,
                opacity: "0%",
                ease: "slow",
                duration: 0.3,
                delay: 2.5,
                onComplete() {
                  console.log("FINI");
                },
              }
            );
          } else {
            this.score--;
            if (this.score == -1) {
              this.score = 0;
            }
            console.log("Mauvaise réponse: pointage " + this.score);

            gsap.to(".mauvaise-reponse", {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "slow",
            });
            gsap.fromTo(
              ".cercle",
              { rotation: "0deg" },
              { rotation: "360deg", repeat: 4, ease: "sine" }
            );
            gsap.fromTo(
              ".pouce",
              { x: "20%", y: "20%" },
              {
                y: "45%",
                repeat: 2,
                duration: 0.35,
                delay: 0.7,
                ease: "power2",
              }
            );
            gsap.fromTo(
              ".face",
              { y: "-20%", x: "-20%", opacity: 0, scale: 0.3 },
              { y: "-20%", x: "-20%", opacity: 1, scale: 0.7, delay: 1.75 }
            );
            gsap.to(".mauvaise-reponse", {
              scale: 0,
              opacity: 0,
              ease: "slow",
              duration: 0.3,
              delay: 2.5,
              onComplete: () => {
                console.log("FINI");
              },
            });
          }
          if (this.index < this.questions.length) {
            this.index++;
            if (this.index == this.questions.length) {
              this.final();
            }
            this.setVisible(this.index);
          }
        }
      });
    });
  }
  final() {
    let divFinal = document.createElement("div");
    divFinal.innerText = "Vous avez terminé le quiz!";
    this.quizBody.appendChild(divFinal);
  }
}

