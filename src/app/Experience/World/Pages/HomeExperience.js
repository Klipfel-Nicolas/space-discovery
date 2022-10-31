import * as THREE from 'three'
import {  BufferGeometry } from 'three'

import Experience from "../../Experience";
import Environment from '../Environment';
import Planets from '../Planets';
import Satellites from '../Satellites';

export default class HomeExperience
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources
        this.sizes = this.experience.sizes
        this.time = this.experience.time

        // Debug
        this.debug = this.experience.debug

        // When every assets are loaded
        this.resources.on('ready', () => {
            
            // Setup 
            this.setStars()
            this.satellites = new Satellites()            
            this.mars = new Planets()

            // Light
            this.environment = new Environment()
            this.environment.setSunLight(
                '#f1f1f1', 
                2, 
                true, 
                15, 
                1024, 
                0.05, 
                {x: 3, y: 3, z: -2.25},
            )
            this.environment.setAmbientLight('ffffff', .1)

            // Satellite One ---------
            this.satellites.createSatellites(this.satellites.satelliteOne, 'Curiosity', '#', 1.5, { x: - Math.PI * 0.5, y: 0, z: 0 }, null)
            this.satellites.setModel(this.satellites.satelliteOne)

            // Satellite Two ---------
            this.satellites.createSatellites(this.satellites.satelliteTwo, 'Opportunity', '#', 0.009, null, null)
            this.satellites.setModel(this.satellites.satelliteTwo)

            // Satellite Three ---------
            this.satellites.createSatellites(this.satellites.satelliteThree, 'Daily Picture', '#', 0.1)
            this.satellites.setModel(this.satellites.satelliteThree)

            // Rover ---------
            // Is set in Planets to rotate with Mars
             this.satellites.createSatellites(this.satellites.perseveranceRover, 'Perseverence', '/perseverence', 0.38, { x: 0.93, y: -3, z: 0 }, { x: 0, y: 1.2, z: 1.56 }) 

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
        
        // Mars
        if (this.mars)
        {
            this.mars.update()
        }

        // Satellites 
        if(this.satellites)
        {
            this.satellites.setPosition(
                this.satellites.satelliteOne, 
                {
                    x: Math.sin( (this.time.elapsed * 0.001)/ -5 ) * 17,
                    y: 5,
                    z: Math.cos( (this.time.elapsed * 0.001) / -5 ) * 7 
                }
            )
            
            this.satellites.setRotation(
                this.satellites.satelliteOne,
                {
                    x: -Math.PI * 0.5,
                    y: 0,
                    z: -((this.time.elapsed * 0.001) * 0.2)
                }
            )
    
            // Satellite Two ---------
            this.satellites.setPosition(
                this.satellites.satelliteTwo, 
                {
                    x: Math.sin( (this.time.elapsed * 0.001) / 4 ) * 12,
                    y: 0,
                    z: Math.cos( (this.time.elapsed * 0.001) / 4 ) * 7  
                }
            )
            
            this.satellites.setRotation(
                this.satellites.satelliteTwo,
                {
                    x: 0,
                    y:((this.time.elapsed * 0.001) * .25) ,
                    z: 0
                }
            )
            
            // Satellite Three ---------
            this.satellites.setPosition(
                this.satellites.satelliteThree, 
                {
                    x: 2,
                    y: Math.sin( (this.time.elapsed * 0.001) / -8 ) * 10,
                    z: Math.cos( (this.time.elapsed * 0.001) / -8 ) * 10
                }
            )
        }

        // Degbug stats End
        if(this.debug.active)
        {
           this.debug.stats.end() 
        }
        
    }
}