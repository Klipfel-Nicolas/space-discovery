import HomePage from "./Pages/Home/HomePage";
import PerseverencePage from "./Pages/Perseverence/PerseverencePage";

import Experience from "./Experience/Experience";

class App {
  constructor() 
  {
    this.createContent()
    this.createExperience()
    this.createPages()
    this.onChange()
  }

  createContent()
  {
    this.content = document.querySelector('.page-content');
    this.template = this.content.getAttribute('data-template'); 
  }

  createExperience()
  {
    this.experience = new Experience(this.template);
  }

  createPages()
  {
    this.pages = {
      home: new HomePage(),
      perseverence: new PerseverencePage()
    };

    this.page = this.pages[this.template];
    this.page.create();
  }

  onChange() 
  {
    this.experience.onPageChange(this.template)
  }

}

new App()
