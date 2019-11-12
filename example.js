import store from "./store";
import Component from "./component"

class Button extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('button')
        });

        // Custom logic for our button
        store.setState({count: 0});

        this.element.addEventListener('click', () => {
            store.state.count++;
        })
    }

    // Called every time the state updates
    render() {
        const state = store.state;
	// Update the count in the HTML
        this.element.innerHTML = state.count ? state.count : 0;
    }
}

// Create the Button instance
const button = new Button();