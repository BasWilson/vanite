class Store {
    constructor() {
        this.stateUpdateEvent = new Event('stateUpdate');

        let self = this;
        this.state = new Proxy({}, {
            set(obj, prop, value) {
                obj[prop] = value;
                dispatchEvent(self.stateUpdateEvent);
                return true;
            },
            get(state, key) {
                return state[key];
            }
        });
    }

    setState(newState) {
        let self = this;
        self.state = Object.assign(self.state, newState);
    }
}

export default new Store();