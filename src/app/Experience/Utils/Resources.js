import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import EventEmitter from './EventEmitter.js'

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super()

        // Options
        this.sources = sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders()
    {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
    }

    startLoading()
    {
        // Load each source
        for(const source of this.sources)
        {
            if(source.type === 'gltfModel' || source.type === 'glbModel')
            {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'texture')
            {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source, file)
    {
        this.items[source.name] = file
        
        this.loaded++
        this.setHtmlContentLoader(this.loaded, this.toLoad)

        if(this.loaded == this.toLoad) {
            this.trigger('ready')
            document.querySelector('.preloader').classList.add('loaded')
        }
    }

    setHtmlContentLoader(loaded, totalToLoad)
    {
        const percentLoaded = loaded / totalToLoad * 100
        document.querySelector('.preloader_items-count').textContent = `${this.loaded}  / ${this.toLoad} items`
        document.querySelector('.preloader_progress-bar').style.transform = `scaleX(${percentLoaded / 100})`
        document.querySelector('.preloader_progress-percent').textContent = `${Math.round(percentLoaded)} %`
    }
}