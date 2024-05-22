import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { schemaForm } from './forSchemas/schemas'
import { Link } from 'react-router-dom'

const initialValues = {
    nick: "",
    pass: "",
    passConfirm: "",
    age: "",
    email: "",
    selected: ""
}

const Registr = ({setNewUser, SetUserStatus}) => {


  return <div className='registr'>
     <Formik initialValues={initialValues} validationSchema={schemaForm} className="registr" >
        {({values,
         errors, 
         handleSubmit,
         resetForm
        })=>{
          
            function handleSubmit(e){
                e.preventDefault()
                setNewUser(values)
                // localStorage.setItem("dada", "dasd")
                resetForm()
                SetUserStatus(true)
            }

            
            return <form action="" onSubmit={handleSubmit}>
                <Field type="text" name="nick" placeholder="Nick Name"></Field>
                <ErrorMessage name='nick'>
                    {(msg)=> <span>{msg}</span>}
                </ErrorMessage>

                <Field type="password" autoComplete="off" name="pass" placeholder="Password"></Field>
                <ErrorMessage name='pass'>
                    {(msg)=> <span>{msg}</span>}
                </ErrorMessage>

                <Field autoComplete="off" type="password" name="passConfirm" placeholder="Confirm Password"></Field>
                <ErrorMessage name='passConfirm'>
                    {(msg)=> <span>{msg}</span>}
                </ErrorMessage>

                <Field type="number" name="age" placeholder="Age"></Field>
                <ErrorMessage name='age'>
                    {(msg)=> <span>{msg}</span>}
                </ErrorMessage>

                <Field type="email" name="email" placeholder="Email"></Field>
                <ErrorMessage name='email'>
                    {(msg)=> <span>{msg}</span>}
                </ErrorMessage>

           <div id="my-radio-group"></div>
               <div role="group" aria-labelledby="my-radio-group" className='radios'>
                <label>
              <Field type="radio" name="selected" value="Mail" />
              Mail
               </label>
              <label>
              <Field type="radio" name="selected" value="Femail" />
              Femail
            </label>
            <div>Selected: {values.selected}</div>
          </div>
          <Link className={!Object.keys(errors).length && values.nick != '' ? "active" : "not-active"}>
            <input type="submit" value="Registration" onClick={handleSubmit}/>
          </Link>
            </form>
        }}
     </Formik>
  </div>
}

export default Registr