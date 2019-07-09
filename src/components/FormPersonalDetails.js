import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ButtonAppBar from './ButtonAppBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Pink from "@material-ui/core/colors/pink"


export class FormPersonalDetails extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
    goBack = event => {
        event.preventDefault();
        this.props.prevStep();
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
                            <h1>Please Enter Your Personal Details</h1>
                    <TextField
                        defaultValue={values.city}
                        label="City"
                        onChange={handleChange('city')}

                    />
                    <br />
                    
                    <TextField
                        defaultValue={values.occupation}
                        label="Occupation"
                        onChange={handleChange('occupation')}

                    />
                    <br />
                    <TextField
                        defaultValue={values.bio}
                        label="Bio"
                        onChange={handleChange('bio')}

                    />
                    <br />
                    <Grid container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justify="center">
                    <Button
                        variant="contained"
                        color="false"
                        style={styles.button}
                        onClick={this.goBack}
                    >
                        Go Back
                    </Button>
                    <Button
                        variant="contained"
                        
                        style={styles.button}
                        onClick={this.continue}
                    >
                        Continue
                    </Button>
                   </Grid>
                   </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const teal = Pink[500]
const styles = {
    button: {
        margin: 15,
        display: "inline",
        backgroundColor: teal,
        color:"white"
    }
}
export default FormPersonalDetails
