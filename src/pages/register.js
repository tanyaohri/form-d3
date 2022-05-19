import React from 'react'
import {
    Grid,
    Paper,
    Button,
    Card,
    Box,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import { validationSchema } from '../providers/utils';
import { LabelInputField } from '../components/inputField';
import  Side  from '../providers/images/side.jpg';

const FormFields =   [{
    label:"Your email address",
    identifier:"email"
},
{
    label:"Your password",
    identifier:"password"
    },
    {
        label:"Confirm your password",
        identifier:"confirmPassword"
    },
    {
        label:"Your full name",
        identifier:"name"
    },
{
    label:" Your phone number",
    identifier:"phoneNumber"
},

]
const paperStyle = {};
const Register = () => {
  
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    
    //const imgURL = "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg";
    
    //const imgURL = "src/providers/images/side.jpg";

    return (

        //<LabelInputField
        //    handleChange={setName}
        //    value={name}
        //    label={ "Your Name : "}
        //    helperText={"Enter your name of length more than 3"}
        ///>
        <React.Fragment >
            <Paper style={{
                width: "70%", height:" 70%", marginTop: "20px", marginLeft: "14%", border: "4px solid #ECECEC"
            }} >
                <Grid container  style={{marginBottom:"10px",marginTop:"10px"}}> 
                    {/* Left Image */}
                    <Grid item xs={12} md={7} sm={11}
                        style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'fill',
                            //backgroundImage:`url(${imgURL})`
                        }}>
                       <img style={{width:"100%",height:"100%"}} src={Side} />
                        
            
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
                                       
                                        {/*<FormHelperText>
                                            <ErrorMessage name="termsAndConditions" />
                                        </FormHelperText>*/}
                                    <Grid item xs={12} sm={4} md={12} >
                                    <FormControlLabel
                                        control={<Field as={Checkbox} name="termsAndConditions" />}
                                        label="I read and agree terms and conditions."
                                        />
                                        
                                    <FormHelperText>
                                    <ErrorMessage name="termsAndConditions" />
                                    </FormHelperText>
                                            <Button
                                                style={{margin:"10px"}}
                                                type='submit'
                                                variant='contained'
                                                disabled={props.isSubmitting}
                                                color='primary'
                                            >
                                                {props.isSubmitting ? "Loading" : "Create Account"}
                                            </Button>
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