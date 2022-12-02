import * as dat from 'lil-gui'
import Stats from 'stats-js'

// Add to url -> /#debug
export default class Debug
{
    constructor(template)
    {
        this.active = window.location.hash === '#debug'
        this.template = template;
        
        if(this.active)
        {
            // gui
            this.ui = new dat.GUI()

            // stats
            this.stats = new Stats()
            this.stats.showPanel(0)
            document.getElementById(template).appendChild( this.stats.dom );
        }
    }
}