import React, { Component } from 'react';

import '../styles/CollectionView.less';

/** A layout for a basic collection view that displays data in a horizontal or vertical scrolling list. */
class CollectionView extends Component {

    /** **************************
    *                           *
    *           INIT            *
    *                           *
    **************************** */

	constructor(props) {
		super(props);

		// Create the default settings for a collection view.
		this.state = {
			data: props.data ? (props.data instanceof Function ? props.data() : props.data) : [],
			orientation: props.orientation || CollectionView.Orientation.vertical,
			emptyDataView: props.emptyDataView || <div />,
			shouldScrollOnReload: props.shouldScrollOnReload || false,
			edgeInsets: props.edgeInsets || ['0px', '0px', '0px', '0px'], // top, right, bottom, left,
			isScrollEnabled: props.isScrollEnabled || true,
		};
	}

    /** **************************
    *                           *
    *          FUNCTIONS        *
    *                           *
    **************************** */

	/** Returns an array of components representing the items of this collection view. */
	getChildren() {
		return this.state.data || [];
	}


    /** Call this function to reload the data in this collection view.
    * @param newData The new data to populate the collection view with.
    * @param before The function to run just before the data gets reloaded.
    * @param after The function to run directly after the data gets reloaded.
    */
	reloadData(newData, before = null, after = null) {
		if (!newData) { return; }

		// If there is something to run before changing the state, do it now.
		if (before) {
			before(this.refs.collectionView);

			// The 'before' function, as of right now, should only be used to fade/show
			// the suggestions buttons when they change. Because it is so specific, set the
			// timeout and THEN set the state.
			setTimeout(() => {
				// Change the state.
				this.setState({
					data: newData,
				}, () => {
					// If there is something to run immediately after setting the state, do it now.
					if (after) { after(this.refs.collectionView); }

					// Scroll to the bottom of the collection view.
					if (this.state.shouldScrollOnReload === true) { this.scrollToBottom(); }
				});
			}, 100);
		} else {
			// Change the state.
			this.setState({
				data: newData,
			}, () => {
				// If there is something to run immediately after setting the state, do it now.
				if (after) { after(this.refs.collectionView); }

				// Scroll to the bottom of the collection view.
				if (this.state.shouldScrollOnReload === true) { this.scrollToBottom(); }
			});
		}
	}


	/** Scrolls to the bottom of the collection view. */
	scrollToBottom() {
		const element = this.refs.collectionView;
		if (element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth) {
			element.scroll({
				top: element.scrollHeight,
				behavior: 'smooth',
			});
		}
	}


    /** **************************
    *                           *
    *           STYLES          *
    *                           *
    **************************** */

	/** The styles for the collection view. */
	configureStyles() {
		const ofx = this.state.orientation === CollectionView.Orientation.horizontal ? 'auto' : 'hidden';
		const ofy = this.state.orientation === CollectionView.Orientation.vertical ? 'auto' : 'hidden';
		const ws = this.state.orientation === CollectionView.Orientation.horizontal ? 'nowrap' : 'unset';
		const edgeTop = this.state.edgeInsets[0];
		const edgeRight = this.state.edgeInsets[1];
		const edgeBottom = this.state.edgeInsets[2];
		const edgeLeft = this.state.edgeInsets[3];
		return {
			overflowX: this.state.isScrollEnabled === true ? ofx : 'hidden',
			overflowY: this.state.isScrollEnabled === true ? ofy : 'hidden',
			whiteSpace: ws,
			paddingTop: edgeTop,
			paddingLeft: edgeLeft,
			paddingRight: edgeRight,
			paddingBottom: edgeBottom,
			textAlign: 'center',
			textDecoration: 'none',
			// backgroundColor: 'cornflowerblue',
			// transition: 'opacity 0.1s ease-in-out',
			...this.props.style,
			// transitionDuration: '0.1s',
		};
	}

    /** **************************
   *                           *
   *          RENDER           *
   *                           *
   **************************** */

	render() {
		return (
			<div id={this.props.id} ref="collectionView" className={`collectionView ${this.props.className}`}
				tabIndex={this.props.tabIndex === 0 ? 0 : (this.props.tabIndex || null)}
				aria-label={this.props['aria-label'] || null}
				data-layout={this.props['data-layout'] || false} style={this.configureStyles()}>

				{(this.props.data || []).length > 0 ? (this.props.data ? (this.props.data instanceof Function ? this.props.data() : this.props.data) : []) : this.state.emptyDataView}

			</div>
		);
	}
}

/** The orientation of the collection view: vertical or horizontal. */
CollectionView.Orientation = Object.freeze({
	vertical: 'vertical',
	horizontal: 'horizontal',
});

export default CollectionView;
