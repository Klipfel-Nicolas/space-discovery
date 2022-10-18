import * as THREE from 'three'
import {  BufferGeometry } from 'three'

import Experience from "../Experience";
import Environment from './Environment';
import Planets from './Planets';
import Satellites from './Satellites';

export default class Space
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources

        // Home Css renderer for orbit controls
        this.experience.camera.setOrbitControls(this.experience.renderer.labelRenderer.domElement)

        // Debug
        this.debug = this.experience.debug

        // When every assets are loaded
        this.resources.on('ready', () => {
            
            // Setup
            this.setStars()
            this.satellites = new Satellites()            
            this.mars = new Planets()

            this.environment = new Environment()
        })
    }

    setStars()
    {
        const starsGeometry = new BufferGeometry()
        const countStars = 10000
        const positions = new Float32Array(countStars * 3)
        const starTextures = this.resources.items.stars

        for (let i = 0; i < countStars * 3; i++) {
            positions[i] = (Math.random() - .5) * 100
            
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        //  Material
        const starsMaterial = new THREE.PointsMaterial({
            size: .3,
            sizeAttenuation: true,
            alphaMap: starTextures,
            transparent: true
        })

        //Points
        const stars = new THREE.Points(starsGeometry, starsMaterial)
        this.scene.add(stars)
    }

    /**
     * Update events
     */
    update()
    {
        // Degbug stats Start
        if(this.debug.active)
        {
           this.debug.stats.begin() 
        }
        
        if (this.mars)
        {
            this.mars.update()
        }

        if (this.satellites)
        {
            this.satellites.update()
        }

        // Degbug stats End
        if(this.debug.active)
        {
           this.debug.stats.end() 
        }
        
    }
}