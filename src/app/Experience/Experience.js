import * as THREE from 'three'
import Camera from './Camera';
import Renderer from './Renderer';

import HomeExperience from './World/Pages/HomeExperience';
import PerseverenceExperience from './World/Pages/PerseverenceExperience';

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
        this.camera.createPerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100, {x: 6, y: 4, z: 28})
        this.camera.setOrbitControls(this.canvas, true)
        this.camera.setOrbitControls(this.renderer.labelRenderer.domElement, true, 10, 35) 
        this.camera.orbitControlsSettings(10, 35)
        
        this.homeExperience = new HomeExperience();
    }

    destroyHome() {

    }

    cretePerseverence() {
        this.camera.createPerspectiveCamera(45, this.sizes.width / this.sizes.height, 1, 200, {x: 0, y: 4, z: -15})
        this.camera.setOrbitControls(this.canvas, true, 3, 15)
        this.camera.orbitControlsSettings(3, 15, 1.5, Math.PI / 2.4)
        
        this.perseverenceExperience = new PerseverenceExperience();
    }

    /**
     * Change page
     */
    onPageChange(template)
    {
        if (template === 'home') {
            this.createHome();
        }

        if(template === 'perseverence') {
            this.cretePerseverence();
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

        if(this.perseverenceExperience)
        {
            this.perseverenceExperience.update()
        }
    }
}