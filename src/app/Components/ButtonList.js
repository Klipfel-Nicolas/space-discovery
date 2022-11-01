export default class ButtonList {
  
    constructor({ element, toggleElements }) {
        this.button = element
        this.elementsToToggle = toggleElements

        this.addEventListeners()
    }

    onClick() 
    {
        this.elementsToToggle.forEach(element => {
            element.classList.toggle('visible')
        });
    }

    onMouseEnter() 
    {
    }

    onMouseLeave() 
    {

    }

  addEventListeners() {
    this.onClickEvent = this.onClick.bind(this)
    
    this.button.addEventListener('click', this.onClickEvent);
  }

  removeEventListeners() {
    this.button.removeEventListener('click', this.onClickEvent);
  }
}
