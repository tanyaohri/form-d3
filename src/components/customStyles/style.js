import React from "react";
import { colors, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    paperStyle: {
        width: "70%", height:"69%", marginTop: "25px", marginLeft: "14%", border: "5px solid #ECECEC"
    },
    imgStyle: {
        margin:"0px",width:"100%",height:"100%"
    },
    checkboxStyle: {
        marginLeft: 10,
        '&$checked': {
            color: colors.blue[400],
            backgroundColor:"blue"
        }
    },
    buttonStyle: {
        margin: "20px",
        backgroundColor: "#1E90FF",
        color: "white",
        textTransform: "none",
        fontSize: "14px",
        minWidth: 160,
        minHeight:40,
    },
    
   

})

