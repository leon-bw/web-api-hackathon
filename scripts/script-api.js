class MarioQuizAPI {
    constructor() {
      this.url = "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple";
    //   this.type = type;
    }
  
    async getQuestions() {
    //   try {
        const response = await axios.get(`${this.url}`);
        // getQuestions(response.data);

        console.log(response.data.results);

    //   } catch (error) {

        // const questions = document.querySelector(".questions")
        // const errorMessage = document.createElement("div");
        // errorMessage.classList.add("posts__error");
        // errorMessage.innerText = "OH NO, NOTHING TO SEE HERE!! 👀🤷‍♂️";
        // questions.appendChild(errorMessage);
    //   }
  
    }
    
}



// &type=${this.type}