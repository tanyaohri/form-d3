import React, { useState } from 'react'
import {
    Grid,
    Paper,
    Button,
    Typography,
    makeStyles
} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import { validationSchema } from '../providers/utils';
import { LabelInputField } from '../components/inputField';
import Side from '../providers/images/side.jpg';
import { useNavigate } from "react-router-dom";
import { useStyles } from '../components/customStyles/style';
import { FormFields } from '../components/fields';
import { initialValues } from '../components/initial';
import { withStyle } from '@material-ui/core/styles';

const checkboxStyle = theme => ({
    root: {
        '&$checked': {
            color:"#1E90FF"
        },
    },
    checked:{},
})




const Register = () => {
    
    const classes = useStyles();

  

    const navigation = useNavigate();
    const onSubmit = (values, props) => {
        navigation("/d3_graph");
    }
    return (

        <React.Fragment >
            <Paper className={classes.paperStyle} >
                <Grid container> 
                    {/* Left Image */}
                    <Grid item xs={12} md={7} sm={10}>
                        <img className={classes.imgStyle} src={Side} />
                    </Grid>
                    
                    <Grid item xs={1} md={1} sm={12}></Grid>
                    {/* Form at right */}
                    <Grid item xs={12} md={3} sm={12}>
                        <Typography align='left'>
                            <h3>Create an account</h3>
                        </Typography>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            
                            {(props) => (
                            <Form>
                                <Grid container>
                                    {FormFields.map((field, ind) => (
                                        <Grid item xs={12} sm={4} md={12} >
                                            <LabelInputField {...field} />  
                                        </Grid>    
                                    ))}
                                </Grid>
                                    
                                <Grid item xs={12} sm={12} md={12} >
                                    <FormControlLabel
                                        control={
                                                <Field
                                                    className={classes.checkboxStyle}
                                                    as={Checkbox}
                                                    name="termsAndConditions"
                                                    
                                                />
                                                }
                                                label={
                                                    <Typography style={{ fontSize: "11px"}}>
                                                        I read and agree Terms and Conditions.
                                                    </Typography>
                                                
                                                } 
                                        />
                                     
                                            <FormHelperText>
                                                <ErrorMessage component={() => {
                                                    return (
                                                        <Typography style={{
                                                            color: "red",
                                                            fontSize: "10px",
                                                            marginLeft:"10px"
                                                        }}>
                                                            Please accept the terms and condition
                                                             </Typography>
                                        
                                                    )
                                                    }}  name="termsAndConditions" />
                                            </FormHelperText>
                                       
                                
                                        <FormControlLabel
                                            control={
                                            <Button
                                                className={classes.buttonStyle}                                                
                                                type='submit'
                                                variant='contained'
                                            >  
                                                {props.isSubmitting ? "Loading" : "Create account"}
                                            </Button>}
                                            />
                                        </Grid>
                            </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>

                    
            </Paper>
            
        </React.Fragment>
    )
}

export default Register;