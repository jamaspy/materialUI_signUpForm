import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ButtonAppBar from './ButtonAppBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


export class FormUserDetails extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props
        
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
                        style={{ minHeight: '90vh' }}>
                            <h1>Please Enter Your User Details</h1>
                    <TextField
                        defaultValue={values.firstName}
                        label="First Name"
                        onChange={handleChange('firstName')}

                    />
                    <br />
                    
                    <TextField
                        defaultValue={values.lastName}
                        label="Last Name"
                        onChange={handleChange('lastName')}

                    />
                    <br />
                    <TextField
                        defaultValue={values.email}
                        label="Email Address"
                        onChange={handleChange('email')}

                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    >Continue</Button>
                   </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails
