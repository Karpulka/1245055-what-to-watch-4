import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {TabVariantValues} from "../../components/tabs/tabs.jsx";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
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
      const {isOverview, isDetails, isReviews} = this.state;

      return <Component
        {...this.props}
        onTabClick={this.handleTabClick}
        isOverview={isOverview}
        isDetails={isDetails}
        isReviews={isReviews}
      />;
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

  WithTabs.propTypes = {
    overview: PropTypes.shape({
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
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

  return WithTabs;
};

export default withTabs;
