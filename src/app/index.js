import HomePage from "./Pages/Home/HomePage"

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
    };

    this.page = this.pages[this.template];
    this.page.create();
  }

  onChange() 
  {
    console.log(this.template)
    this.experience.onPageChange(this.template)
  }

}

new App()
