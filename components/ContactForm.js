import React from 'react'
import { useFormik } from 'formik'
import s from '@emotion/styled'
import { ArrowRight } from '../icons/icons'

 const validate = values => {
   const errors = {}

   if (!values.name) {
     errors.name = 'Required'
   }
   if (!values.email) {
     errors.email = 'Required'
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address'
   }
   if (!values.message) {
     errors.message = 'Required'
   }
   return errors
 }

export default React.memo(() => {
   const formik = useFormik({
     initialValues: {
       name: '',
       message: '',
       email: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   })

   return (
    <Container>
     <Form onSubmit={formik.handleSubmit}>
       <Label htmlFor="name">YOUR NAME</Label>
       <Input
         id="name"
         name="name"
         type="text"
         placeholder="Name.."
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
         isError={formik.touched.name && formik.errors.name}
       />
       {formik.touched.name && formik.errors.name ? (
           <ErrorMgs isError={formik.touched.name && formik.errors.name}>{formik.errors.name}</ErrorMgs>
       ) : null}


       <Label htmlFor="email">YOUR EMAIL</Label>
       <Input
         id="email"
         name="email"
         type="email"
         placeholder="Email.."
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         isError={formik.touched.email && formik.errors.email}
       />

       {formik.touched.email && formik.errors.email ? (
           <ErrorMgs isError={formik.touched.email && formik.errors.email}>{formik.errors.email}</ErrorMgs>
       ) : null}

       <Label htmlFor="message">MESSAGE</Label>
       <Input
         id="message"
         name="message"
         type="text"
         placeholder="Write your message.."
         component="textarea"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.message}
         isError={formik.touched.message && formik.errors.message}
       />
       {formik.touched.message && formik.errors.message ? (
           <ErrorMgs isError={formik.touched.message && formik.errors.message}>{formik.errors.message}</ErrorMgs>
       ) : null}

         <SendWrapper>
             <SendTxt>Send request</SendTxt>
             <SendBtn type="submit"><ArrowRight /></SendBtn>
         </SendWrapper>
     </Form>
    </Container>
   )
})


const SendWrapper = s.div`
display: flex;
justify-content: center;
align-items: center;
`
const SendTxt = s.div`
font-weight: 500;
font-size: 18px;
color: #FFFFFF;
line-height: 120%;
margin-right: 25px;
display: flex;
align-items: center;
justify-content: center;
`
const SendBtn = s.button`
background: #FFFFFF;
border-radius: 332px;
width: 72px;
height: 58px;
border: none;
`

const ErrorMgs = s.div`
margin-bottom: ${ props => props.isError ? '16px' : '0' };
text-align: end;
color: tomato;
`

const Form = s.form`
display: flex;
flex-direction: column;
`

const Input = s.input`
margin-bottom: ${ props => props.isError ? '12px' : '48px' };
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 8px;
background: none;
min-height: 50px;
font-weight: 500;
font-size: 16px;
color: #EFF0FB;
opacity: 0.8;
padding: 15px 12px;
&:last-of-type {
height: 110px;
}
&::placeholder {
padding-top: 0;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #EFF0FB;
opacity: 0.3;
}
`
const Label = s.label`
margin-bottom: 12px;
font-weight: 500;
font-size: 12px;
line-height: 12px;
letter-spacing: 1px;
text-transform: uppercase;
color: #6A6B7C;
`

const Container = s.div`
z-index: 5;
padding: 58px 65px 52px 65px;
width: 621px;
height: 597px;
max-width: 621px;
max-height: 597px;
min-width: 621px;
min-height: 597px;
background: linear-gradient(180.27deg, rgba(200, 222, 242, 0.08) -79.69%, rgba(21, 30, 44, 0.08) 206.49%);
backdrop-filter: blur(23px);
border-radius: 30px;
`
