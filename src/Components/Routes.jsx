import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from '../Pages/Blog';
import ChromeExtension from '../Pages/ChromeExtension';
import Home from '../Pages/Home';
import HowItWorks from '../Pages/HowItWorks';
import PriceComparison from '../Pages/PriceComparison';
import PrivacyPolicy from '../Pages/PrivacyPolicy';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/ratepunk">
                    <Home />
                </Route>
                <Route path="/chrome-extension">
                    <ChromeExtension />
                </Route>
                <Route path="/price-comparison">
                    <PriceComparison />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/how-it-works">
                    <HowItWorks />
                </Route>
                <Route path="/privacy-policy">
                    <PrivacyPolicy />
                </Route>
            </Switch>
        </div>
    );
}
