import * as THREE from 'three'
import Camera from './Camera';
import Renderer from './Renderer';
import Space from './Space/Space';

import Debug from './Utils/Debug';
import Resources from './Utils/Resources';
import Sizes from './Utils/Sizes'
import sources from './Utils/sources';
import Time from './Utils/Time'


export default class Experience
{
    // Singleton
    static instance

    constructor(canvas) 
    {
        // Singleton
        if(Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;

        // Setup
        this.canvas = canvas;
        this.debug = new Debug()
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);
        this.camera = new Camera();
        this.renderer = new Renderer();

        this.space = new Space();


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
        this.space.update();
    }
}