import React from "react";
import PropTypes from "prop-types";
import { FormHelperText, FormLabel, TextField, Typography } from "@material-ui/core";
import { ErrorMessage, Field } from "formik";

const fieldStyle = { padding:4, fontSize:12, maxHeight:37 }

export const LabelInputField = ({
    label, 
    actionType,
    handleChange,
    helperText,
    styleProps,
    value,
    defaultValue,
    validateFunction = null,
    identifier
}) => {

    const handleFieldChange = (event) => {
        event.preventDefault();
        if (actionType !== "" && actionType !== null && actionType !== undefined) {
            if (validateFunction !== null) {
                if (validateFunction(event.target.value)) {
                    handleChange({ type:actionType, payload : event.target.value})
               }
            }
        }
        else {
            handleChange(event.target.value)
        }
    } 

    return (
        <div style={{
           margin:5
        }}>

            <FormLabel style={fieldStyle} component="legend">{ label }</FormLabel>

            <Field
                style={fieldStyle}
                defaultValue="Small"
                size="small"
                variant="outlined"
                as={TextField}
                fullWidth
                type={ (identifier==="password" || identifier==="confirmPassword") && "password"}
                name={identifier}
                //helperText={}
            />
            <Typography style={{
                color: "red",
                fontSize: "10px",
                marginLeft:"10px"
            }}>
            <ErrorMessage name={identifier} />
            </Typography>

      </div>  
       
    )
}


LabelInputField.propTypes = {
    label: PropTypes.string,
    actionType: PropTypes.string,
    handleChange: PropTypes.func,
    styleProps: PropTypes.object,
    validateFunction:PropTypes.func
}
