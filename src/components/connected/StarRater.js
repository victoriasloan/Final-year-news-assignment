import React, {Component} from 'react';
import Rater from 'react-rater';

//StarRater component which is used on the news articles

class StarRater extends Component {
    //Initialise state to have a rating of 0
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        };
    }

    //Set state to the star rating selected
    handleRate(star) {
        this.setState({rating: star.rating});

        // lastRating is not undefined,
        // which means user have rated
        if (star.lastRating !== void 0) {
            alert('You rated this ' + star.rating + 'out of 5 stars');
        }
    }
    // Render function
    render() {
        return (
            <div className="newsArticle__starRater">
                {/* Rater and onRate function fired  */}
                <Rater rating={this.state.rating} onRate={this.handleRate.bind(this)}/>
                <span className="newsArticle__starRater--statement">
                {/* Ratiing value displayed to the user */}
                    {'Rating value: ' + this.state.rating}
                </span>
            </div>
        );
    }
}

export default StarRater;
