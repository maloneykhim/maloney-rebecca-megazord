let questions = [
    {
      q: "D'où viennent les membres du groupe Marianas Trench?",
      o1: "Vancouver, Colombie-Britannique",
      o2: "Montréal, Québec",
      o3: "Los Angeles, Californie",
      o4: "St-Petersburg, Floride",
      r: 1
    },
    {
      q: "Quand est-ce que le groupe a débuté?",
      o1: "15 décembre 2008",
      o2: "5 novembre 2006",
      o3: "3 octobre 2005", 
      r: 3
    },
    {
      q: "Avec quelle maison de disque le groupe a signé ses albums ?",
      o1: "604 Records",
      o2: "BlueBush Records",
      o3: "Outerscope Records",
      r: 3
    },
    {
      q: "Combien de membres ont présentement Marianas Trench?",
      o1: "4",
      o2: "2",
      o3: "5",
      o4: "3",
      r: 1
    },
    {
      q: "Quelle chanson pop que Josh Ramsay a-t-il écrite?",
      o1: "Call Me Maybe, Carly Rae",
      o2: "Shape of You, Ed Sheeran",
      o3: "Happier, Marshmello ft.Bastille",
      o4: "Blank Space, Taylor Swift",
      r: 1
    },
    {
      q: "Vrai ou faux: La chanson Astoria était inspirée par le film The Goonies ?",
      o1: "Vrai",
      o2: "Faux",
      r: 1
    },
    {
      q: "Quelle chanson inclut un rappel aux titres de chansons précédents?",
      o1: "Fallout",
      o2: "Dearly Departed",
      o3: "One Love",
      r: 2
    },
    {
      q: "Quelle chason possède les paroles « Boots n’ cats » ?",
      o1: "Shutter",
      o2: "Good to You",
      o3: "Pop 101",
      r: 3
    }
  ];
  
  class Quiz {
    constructor(tableau) {
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
      document.modalBody.appendChild(this.div);
  
      //strong
      this.strong = document.createElement("strong");
      this.strong.innerText = Q.q;
      this.div.appendChild(this.strong);
  
      //br
      this.br = document.createElement("br");
      this.div.appendChild(this.br);
  
      //options
      if ("o1" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "1");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o1;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o2" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "2");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o2;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o3" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "3");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o3;
        this.div.appendChild(label);
  
        this.br = document.createElement("br");
        this.div.appendChild(this.br);
      }
  
      if ("o4" in Q) {
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "question" + value);
        radio.setAttribute("value", "4");
        this.div.appendChild(radio);
  
        let label = document.createElement("label");
        label.innerText = Q.o4;
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
            } else {
              this.score--;
              if(this.score == -1) { this.score = 0 }
              console.log("Mauvaise réponse: pointage " + this.score);
            }
            if (this.index < this.questions.length) {
              this.index++;
              if(this.index == this.questions.length) {
                this.final();
              }
              this.setVisible(this.index);
            }
          }
        });
      });
    }
    final() {
      let divFinal = document.createElement('div');
      divFinal.innerText = 'Vous avez terminé le quiz!';
      document.modalBody.appendChild(divFinal);
    }
  }
  
  new Quiz(questions);
  