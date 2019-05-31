import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PdfUpload from './components/PdfUpload';
import PictureUpload from './components/PictureUpload';
import Menu from './Menu';

export default class Routes extends React.Component {

    constructor(props: any) {
        super(props);
    }


    public render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/picture" component={PictureUpload}/>
                    <Route path="/pdf" component={PdfUpload}/>
                    <Redirect from="/" to="/menu" />
                </Switch>
            </BrowserRouter>
        );
    }
}