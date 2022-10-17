import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;

        window.requestAnimationFrame(() => {
            this.tick();
        })
    }

    tick() 
    {
        const currenTime = Date.now();
        this.delta = currenTime - this.current;
        this.current = currenTime;
        this.elapsed = this.current - this.start;

        this.trigger('tick');

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}