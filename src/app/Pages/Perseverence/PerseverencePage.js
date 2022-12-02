import Page from "../Page";

import ButtonList from "../../Components/ButtonList";
import ElementList from "../../Components/ElementList";

export default class PerseverencePage extends Page
{
    constructor()
    {
        super({
            id: 'perseverence',
            element: '#perseverence',
            elements: {
                listButton : '.perseverence-elements_button',
                elementsList: '.toggle-visible-js',
                elements: '.perseverence-element'
            },
        });
    }

    create() {
        super.create();
        
        // Toggle list
        this.toggleButon = new ButtonList({
          element: this.elements.listButton,
          toggleElements: this.elements.elementsList
        })

        // Toggle Element
        this.elementButton = new ElementList({
            elements: this.elements.elements
        })
    }

    destroy() {
        super.destroy();

        this.toggleButon.removeEventListeners()
    }
}