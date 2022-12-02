export default class ElementList {
  
    constructor( elements ) {
        this.elements = elements.elements

        this.addEventListeners()
    }

    onClick(element) 
    {
        let previousSelectedElements = document.querySelectorAll('.selected');
        let currentSelectedElements = document.querySelectorAll(`.${element.dataset.name}`);

        // Remove previous selected
        if(previousSelectedElements.length > 0) {
            previousSelectedElements.forEach(element => {
                element.classList.remove('selected')
            })
        }

        // Add current selected
        if(currentSelectedElements.length > 0) {
            currentSelectedElements.forEach(element => {
                console.log(element)
                element.classList.add('selected')
            })
        }
    }

    onMouseEnter() 
    {
    }

    onMouseLeave() 
    {

    }

  addEventListeners() {

    this.elements.forEach(element => {
        this.onClickEvent = () => this.onClick(element)
        element.addEventListener('click', this.onClickEvent);
    })
  }

  removeEventListeners() {
    this.elements.forEach(element => {
        element.removeEventListener('click', this.onClickEvent);
    })
  }
}
