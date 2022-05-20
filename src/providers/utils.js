import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name is too short")
        .required("Required"),
    
    email: Yup.string()
        .email("Enter valid email")
        .required("Required"),
    
    phoneNumber: Yup
        .string()
        .max(10, "number should be of 10 digits")
        .min(10, "Phone digits must of len 10")
        .typeError("Enter valid Phone Number")
        .required('Required'),
   
    password: Yup
        .string()
        .min(8, "Password minimum length should be 8")
        .required("Required"),
    
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password')], "Password not matched")
        .required("Required"),
    
    termsAndConditions: Yup
        .string()
        .oneOf(["true"], "Accept terms & conditions")
})