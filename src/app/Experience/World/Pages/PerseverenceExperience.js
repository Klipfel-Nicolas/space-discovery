import * as THREE from 'three'

import { elementsPerseverance } from '../../Utils/perseverenceDatas';

import Experience from "../../Experience";
import Environment from '../Environment';
import Satellites from '../Satellites';

export default class PerseverenceExperience
{
    constructor()
    {

        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera.perspectiveCamera;
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.environment = new Environment();
        this.raycaster = new THREE.Raycaster()

        // Debug
        this.debug = this.experience.debug

        // When every assets are loaded
        this.resources.on('ready', () => {

            // Interset points
            this.points = []
            this.setInterestPoints()
            
            // Rover 
            this.satellites = new Satellites()
            this.setPerseverenceModel()

            // Environement
            this.setLights()
            this.setFog()

        })
    }

    setPerseverenceModel()
    {
        this.satellites.setModel(this.satellites.perseverenceCustom)
        this.satellites.setRotation(this.satellites.perseverenceCustom, {x: 0, y: Math.PI / 1.2, z: 0})

        this.satellites.perseverenceCustom.scene.traverse(child =>{
            child.castShadow = true;
            child.receiveShadow = true;

            //Shadow for groupChildren
            if(child instanceof THREE.Group) {
                child.children.forEach(groupchild => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                })
            };

            // Roughness and metalness
            if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial && child.name.includes('E-HORIZONTAL_SWINGARM') ){
                child.material.roughness = 0;
                child.material.metalness = .8;
            }
        }) 
    }

    setFog()
    {
        this.environment.setFog('#000000', 10, 15)
    }

    setLights()
    {
        this.environment.setSunLight(
            '#fffff', 
            2.3, 
            true, 
            15, 
            1024, 
            0.05, 
            {x: 2.5, y: 2.5, z: 0},
        )
        this.environment.setAmbientLight('#f1f1f1', .2)
    }

    setInterestPoints()
    {
        for (let i = 0; i < elementsPerseverance.length; i++) {
            this.points.push({
                position: new THREE.Vector3(elementsPerseverance[i].positions.x, elementsPerseverance[i].positions.y, elementsPerseverance[i].positions.z),
                element: document.querySelector(`#interest-point-${i}`),
            })  
        }
    }

    update()
    {
        if(this.points)
        {
            this.points.forEach(point => {
                const screenPosition = point.position.clone()
                screenPosition.project(this.camera)
                this.raycaster.setFromCamera(screenPosition, this.camera)
                const translateX = screenPosition.x * this.sizes.width * .5;
                const translateY = screenPosition.y * this.sizes.height * .5;
                point.element.style.transform = `translate(${translateX}px, ${-translateY}px)`
            })  
        }
        
    }
}