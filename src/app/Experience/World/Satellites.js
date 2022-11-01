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
        this.perseverenceCustom = this.resources.items.perseverenceCustom

    }

    /**
     * Set Model Function
     * @param {object} model
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

     /**
      * 
      * @param {object} model 
      * @param {object} scale 
      */
     setScale(model, scale)
     {
        model.scene.scale.multiplyScalar(scale);
     }

     /**
      * 
      * @param {object} model 
      * @param {object} position 
      */
     setPosition(model, position)
     {
        model.scene.position.set(position.x, position.y, position.z);
     }

     /**
      * 
      * @param {object} model 
      * @param {object} rotation 
      */
     setRotation(model, rotation)
     {
        model.scene.rotation.set(rotation.x, rotation.y, rotation.z);
     }

     /**
      * 
      * @param {object} model 
      * @param {string} label 
      * @param {string} link 
      * @param {number} scale 
      * @param {object} rotation 
      * @param {object} position 
      */
     createSatellites(model, label, link, scale, rotation, position)
     {
        this.createLink(model, label, link)
        this.setScale(model, scale)
        rotation != null ? this.setRotation(model, rotation) : ''
        position != null ? this.setPosition(model, position) : ''
     }

     /**
      * Update Function
      */
     update()
     {
     }
}