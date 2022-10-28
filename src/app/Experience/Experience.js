import * as THREE from 'three'
import Camera from './Camera';
import Renderer from './Renderer';

import HomeExperience from './Home/HomeExperience';

import Debug from './Utils/Debug';
import Resources from './Utils/Resources';
import Sizes from './Utils/Sizes'
import sources from './Utils/sources';
import Time from './Utils/Time'


export default class Experience
{
    // Singleton
    static instance

    constructor( template ) 
    {
        // Singleton
        if(Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;

        // Setup
        this.template = template;
        this.canvas = document.querySelector('canvas.webgl');
        this.debug = new Debug();
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);
        this.camera = new Camera();
        this.renderer = new Renderer();


        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize();
        })

        // Time tick event
        this.time.on('tick', () => {
            this.update();
        })
    }

    /**
     * Create destroy pages
     */
    //   Home
    createHome() {
        this.homeExperience = new HomeExperience();
    }

    destroyHome() {

    }

    /**
     * Change page
     */
    onPageChange(template)
    {
        if (template === 'home') {
            this.createHome();
        }
    }

    /**
     * Resize event
     */
    resize()
    {
        this.camera.resize();
        this.renderer.resize();
    }

    /**
     * Update event
     */
    update() {
        this.camera.update();
        this.renderer.update();

        if(this.homeExperience) {
           this.homeExperience.update(); 
        }
    }
}