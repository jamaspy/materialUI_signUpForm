import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ButtonAppBar from './ButtonAppBar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


export class Confirm extends Component {
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
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props
     
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
                            <h1>Please Confirm Details</h1>
                            <List>
                                <ListItem>
                                    <ListItemText
                                    primary="First Name"
                                    secondary={ firstName }
                                    />                        
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                    primary="Last Name"
                                    secondary={ lastName }
                                    />                        
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                    primary="Email"
                                    secondary={ email }
                                    />                        
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                    primary="City"
                                    secondary={ city }
                                    />                        
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                    primary="Occupation"
                                    secondary={ occupation }
                                    />                        
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                    primary="Bio"
                                    secondary={ bio }
                                    />                        
                                </ListItem>
                            </List>
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
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    >
                        Confirm
                    </Button>
                   </Grid>
                   </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
        display: "inline"
    }
}
export default Confirm
