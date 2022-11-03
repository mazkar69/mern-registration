//Schema for Formik. To set the validation in the form.


import * as Yop from 'yup'

export const signUpSchema = Yop.object({
    name:Yop.string().min(2).max(25).required("Please enter you name"),
    email:Yop.string().email().required("Please enter you email"),
    phone:Yop.string().min(10).max(10).required("Enter your phone number."),
    work:Yop.string().min(2).max(30).required("Enter you work"),
    password:Yop.string().min(6).required("Please enter password"),
    cnf_password:Yop.string().required().oneOf([Yop.ref("password"),null],"password must match"),
})