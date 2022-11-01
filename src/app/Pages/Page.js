export default class Page {
  
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {...elements};

    this.id = id;

  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
 

    for(const key in this.selectorChildren) {
      
      if(
        this.selectorChildren[key] instanceof window.HTMLElement ||
        this.selectorChildren[key] instanceof window.NodeList ||
        Array.isArray(this.selectorChildren[key])
      ) {
        this.elements[key] = this.selectorChildren[key]
      } else {
        this.elements[key] = document.querySelectorAll(this.selectorChildren[key])

        if(this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(this.selectorChildren[key]);
        }
      }

    }
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
