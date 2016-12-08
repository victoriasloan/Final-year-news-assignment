import React from 'react';
import Joyride from 'react-joyride';

class UserExperience extends React.Component {

    constructor(props) {
        super(props);
        //UserExperience state
        this.state = {
            joyrideOverlay: true,
            joyrideType: 'continuous',
            ready: false,
            steps: [{
                title: 'Take the news RIA tour!',
                text: 'You can tour this website by clicking the next button down below. If you would like to exit the tour at any time please select the skip button',
                selector: '.btn-tour',
                position: 'bottom'
            },
            {
                title: 'Date and Time',
                text: 'Todays date and time can be viewed along the top here.',
                selector: '.navbar__dateTime',
                position: 'bottom'
            },
            {
                title: 'Category Navigation',
                text: 'Click on any of the links to see different categories of news sources, for example click Technology to view technology news sources.  ',
                selector: '.nav',
                position: 'top'
            },
            {
                title: 'Search Bar',
                text: 'Enter key words and the search bar will search the titles of the articles and sources. Results will be updated and displayed in real time. No need to hit enter the search bar is calling search on every letter you type.',
                selector: '.searchBar',
                position: 'top'
            },
            {
                title: 'News Sources',
                text: 'Click on the news source to view the articles associated with it. The articles can also be searched.',
                selector: '.newsProviderCol',
                position: 'top'
            },
            {
                title: 'Saved Articles',
                text: 'When you save an article you will be able to view them in here!! Save your favourite articles and view them again later',
                selector: '.saved',
                position: 'bottom'
            }]
        };
    }
    //Component mounts after 1s
    componentDidMount() {
        setTimeout(() => {
            this.setState({ready: true});
        }, 1000);
    }

    //Component update state
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.ready && this.state.ready) {
            this.refs.joyride.start();
        }
    }
    //Steps added to joyide
    addSteps(steps) {
        let joyride = this.refs.joyride;

        if (!Array.isArray(steps)) {
            steps = [steps];
        }

        if (!steps.length) {
            return false;
        }

        this.setState(function(currentState) {
            currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
            return currentState;
        });
    }
    //Tooltip displaying the data
    addTooltip(data) {
        this.refs.joyride.addTooltip(data);
    }

    //Return joyride jsx
    render() {
        return (<Joyride
                ref='joyride'
                steps={this.state.steps}
                //Enables continuous steps
                type={this.state.joyrideType}
                locale={{
                    //Button configuration
                    back: (<span>Back</span>),
                    close: (<span>Close</span>),
                    last: (<span>Last</span>),
                    next: (<span>Next</span>),
                    skip: (<span>Skip</span>)
                }}
                showSkipButton={true}
                showStepsProgress={true}
                // overlay
                showOverlay={this.state.joyrideOverlay}
                />);
    };
};

//export the UserExperience
export default UserExperience;
