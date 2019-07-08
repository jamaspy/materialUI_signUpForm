import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ButtonAppBar from './ButtonAppBar'
import Grid from '@material-ui/core/Grid'


export class Success extends Component {
    continue = event => {
        event.preventDefault();
        //PROCESS FORM HERE
        this.props.nextStep();
    }
    goBack = event => {
        event.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <ButtonAppBar/>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{minHeight: '90vh'}}>
                         <h1>Thank You, Details Successfully Submitted</h1> 
                         <p>You will receive an email with futher instructions</p>           
                   </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success
