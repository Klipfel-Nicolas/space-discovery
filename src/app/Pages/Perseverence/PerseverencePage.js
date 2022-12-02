import Page from "../Page";

import ButtonList from "../../Components/ButtonList";

export default class PerseverencePage extends Page
{
    constructor()
    {
        super({
            id: 'perseverence',
            element: '#perseverence',
            elements: {
                listButton : '.perseverence-elements_button',
                elements: '.toggle-visible-js'
            },
        });
    }

    create() {
        super.create();
        
        this.toggleButon = new ButtonList({
          element: this.elements.listButton,
          toggleElements: this.elements.elements
        })
    }

    destroy() {
        super.destroy();

        this.toggleButon.removeEventListeners()
    }
}