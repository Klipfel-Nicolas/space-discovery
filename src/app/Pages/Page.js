export default class Page {
  
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {...elements};

    this.id = id;
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

  }


  show() {
    
  }

  hide() {

  }

  // Events

  onResize() {

  }


  // Loop

  update() {
    
  }

  // Listeners

  addEventListeners() {}

  removeEventListeners() {}

  // Destroy

  destroy() {
    this.removeEventListeners();
  }
}
