import Page from "../Page";

export default class HomePage extends Page
{
    constructor()
    {
        super({
            id: 'home',
            element: '#home',
            elements: {},
          });
    }

    create() {
        super.create();
    }

    destroy() {
        super.destroy()
    }
}