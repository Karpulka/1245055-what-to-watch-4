import React, {PureComponent} from "react";
import TabsInner from "../tabs-inner/tabs-inner.jsx";
import PropTypes from "prop-types";
import TabVariants from "../tab-variants/tab-variants.jsx";

const TabVariantValues = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);

    this.state = {
      isOverview: true,
      isDetails: false,
      isReviews: false
    };
  }

  render() {
    const {overview, details, filmID} = this.props;
    const {isOverview, isDetails, isReviews} = this.state;
    const tabVariants = [
      {
        title: `Overview`,
        active: isOverview
      },
      {
        title: `Details`,
        active: isDetails
      },
      {
        title: `Reviews`,
        active: isReviews
      },
    ];

    return <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabVariants.map((tab, i) => <TabVariants
            key={tab.title + i}
            title={tab.title}
            active={tab.active}
            onTabClick={this.handleTabClick}
          />)}
        </ul>
      </nav>
      <TabsInner overview={overview} details={details} filmID={filmID} isOverview={isOverview} isDetails={isDetails} isReviews={isReviews}/>
    </React.Fragment>;
  }

  handleTabClick(evt) {
    evt.preventDefault();
    const currentItem = evt.currentTarget;
    let overviewClicked = false;
    let detailsClicked = false;
    let reviewsClicked = false;
    switch (currentItem.textContent) {
      case TabVariantValues.OVERVIEW:
        overviewClicked = true;
        break;
      case TabVariantValues.DETAILS:
        detailsClicked = true;
        break;
      case TabVariantValues.REVIEWS:
        reviewsClicked = true;
        break;
    }

    this.setState({
      isOverview: overviewClicked,
      isDetails: detailsClicked,
      isReviews: reviewsClicked
    });
  }
}

Tabs.propTypes = {
  overview: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  details: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired
  }).isRequired,
  filmID: PropTypes.number.isRequired
};

export default Tabs;
