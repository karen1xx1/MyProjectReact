import * as yup from "yup"

export const schemaForm = yup.object().shape({
    nick: yup.string().min(5, "Nick-Name is not too long").max(10, "Nick-Name is too long").required(),
    pass: yup.string().min(5, "Password is not too long").max(10, "Password is too long").required(),
    passConfirm: yup.string().oneOf([yup.ref('pass')], 'Passwords must match').required(),
    age: yup.number().min(18, "The user must be over 18 years old").integer("Not currect").positive("Minused Age!!!").required(),
    email: yup.string().email("Pleas enter").required(),
    selected: yup.string().required()
})