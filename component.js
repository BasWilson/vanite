export default class Component {
    constructor(properties = {}) {
        this.render = this.render || function() {};

        addEventListener('stateUpdate', () => this.render());

        if (properties.hasOwnProperty('element'))
            this.element = properties.element;
    }
}