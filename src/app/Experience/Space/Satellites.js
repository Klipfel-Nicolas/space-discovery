import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

import Experience from "../Experience";


export default class Satellites
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;

        // Setup
        this.satelliteOne = this.resources.items.satelliteOne
        this.satelliteTwo = this.resources.items.satelliteTwo
        this.satelliteThree = this.resources.items.satelliteThree
        this.perseveranceRover = this.resources.items.perseveranceRover

        // Satellite One ---------
        this.createLink(this.satelliteOne, 'Curiosity', '#')
        this.setModel(this.satelliteOne)
        this.setScale(this.satelliteOne, 1.5)
        this.setRotation(
            this.satelliteOne,
            {
                x: - Math.PI * 0.5,
                y: 0,
                z: 0
            }
        )

        // Satellite Two ---------
        this.createLink(this.satelliteTwo, 'Opportunity', '#')
        this.setModel(this.satelliteTwo)
        this.setScale(this.satelliteTwo, 0.009)

        // Satellite Three ---------
        this.createLink(this.satelliteThree, 'Daily Picture', '#')
        this.setModel(this.satelliteThree)
        this.setScale(this.satelliteThree, 0.1)

        // Rover ---------
        // Is set in Planets to rotate with Mars
        this.createLink(this.perseveranceRover, 'Perseverence', 'https://www.google.fr/')
        this.setScale(this.perseveranceRover, 0.38)
        this.setPosition(
            this.perseveranceRover, 
            {
                x: 0,
                y: 1.2,
                z: 1.56 
            }
        )
        this.setRotation(
            this.perseveranceRover,
            {
                x: 0.93,
                y: 0-3,
                z: 0
            }
        )

    }

    /**
     * Set Model Function
     */
     setModel(model)
     {
        this.scene.add(model.scene)
     }

     /**
      * Create hyperlink for each object
      * @param {object} model 
      * @param {string} name 
      * @param {string} link 
      */
     createLink(model, name, link)
     {
        const hyperlink = document.createElement('a');
        hyperlink.href = link;
        hyperlink.textContent = name;
        hyperlink.className = 'home_label';

        hyperlink.addEventListener('pointerdown', (e)=> {
            window.location.replace(e.target.href)
        })
        
        const label = new CSS2DObject(hyperlink);
        label.position.set( 0, 0, 0 );

        model.scene.add(label)
     }

     setScale(model, scale)
     {
        model.scene.scale.multiplyScalar(scale);
     }

     setPosition(model, position)
     {
        model.scene.position.set(position.x, position.y, position.z);
     }

     setRotation(model, rotation)
     {
        model.scene.rotation.set(rotation.x, rotation.y, rotation.z);
     }

     /**
      * Update Function
      */
     update()
     {
        // Satellite One ---------
        this.setPosition(
            this.satelliteOne, 
            {
                x: Math.sin( (this.time.elapsed * 0.001)/ -5 ) * 17,
                y: 5,
                z: Math.cos( (this.time.elapsed * 0.001) / -5 ) * 7 
            }
        )
        
        this.setRotation(
            this.satelliteOne,
            {
                x: -Math.PI * 0.5,
                y: 0,
                z: -((this.time.elapsed * 0.001) * 0.2)
            }
        )

        // Satellite Two ---------
        this.setPosition(
            this.satelliteTwo, 
            {
                x: Math.sin( (this.time.elapsed * 0.001) / 4 ) * 12,
                y: 0,
                z: Math.cos( (this.time.elapsed * 0.001) / 4 ) * 7  
            }
        )
        
        this.setRotation(
            this.satelliteTwo,
            {
                x: 0,
                y:((this.time.elapsed * 0.001) * .25) ,
                z: 0
            }
        )
        
        // Satellite Three ---------
        this.setPosition(
            this.satelliteThree, 
            {
                x: 2,
                y: Math.sin( (this.time.elapsed * 0.001) / -8 ) * 10,
                z: Math.cos( (this.time.elapsed * 0.001) / -8 ) * 10
            }
        )

     }
}