import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor (){
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessFormSubmission = this.handleSuccessFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessFormSubmission(portfolioItem) {
        // TODO
        // update the portfolioItems state 
        // and add the portfolioItem to the list 
    }

    handleFormSubmissionError (error) {
        console.log('handleFormSubmissionError', error);
        
    }

    getPortfolioItems() {
        axios.get("https://tarrancerichardson.devcamp.space/portfolio/portfolio_items", {
            withCredentials: true
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in getPortfolioItems", error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className='Portfolio-manager-wrapper'>
                <div className='left-column'>
                    <PortfolioForm 
                        handleSuccessFormSubmission={this.handleSuccessFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className='right-column'>
                <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
                

            </div>
        );
    }
}