import React from "react";
import PropTypes from "prop-types";
import { FormHelperText, FormLabel, TextField, Typography } from "@material-ui/core";
import { ErrorMessage, Field } from "formik";

const paperStyle = { padding: 20, width: 320, height:"600px", margin: "0 auto", marginTop:"30px",border:"5px solid #ECECEC" }
const headerStyle = { margin: 3 , marginBottom: 24 }
const fieldStyle = { padding:4, fontSize:14, maxHeight:37 }

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
        alert("GOt")
        event.preventDefault();
        if (actionType !== "" && actionType !== null && actionType !== undefined) {
            if (validateFunction !== null) {
                if (validateFunction(event.target.value)) {
                    handleChange({ type:actionType, payload : event.target.value})
               }
            }
        }
        else {
            console.log("Getting value from handleFeildChange : ", event.target.value);
            handleChange(event.target.value)
        }
    } 

    return (
        <div style={{
           
        }}>
            {/*<Typography variant="body1"> { label }</Typography>
            <TextField
                style={{...styleProps}}
                variant="outlined"
                label={null}
                onChange={handleFieldChange}
                value={value}
                defaultValue={defaultValue}
            />
            <FormHelperText>
                {helperText}
            </FormHelperText>*/}

            <FormLabel style={fieldStyle} component="legend">{ label }</FormLabel>

            <Field
                style={fieldStyle}
                defaultValue="Small"
                size="small"
                variant="outlined"
                as={TextField} f
                ullWidth
                name={identifier}
                helperText={<ErrorMessage name={identifier} />}
            />

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
