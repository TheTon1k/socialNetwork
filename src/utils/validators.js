import * as yup from "yup";

export const validationPostsandDialogsForm =yup.object().shape({
    newPostText:yup.string()
        .max(20,'Длина должна быть не более 20 символов'),
    message:yup.string()
        .max(10,'Длина должна быть не более 10 символов'),
})

export const validateLoginForm = yup.object().shape({
    email: yup.string()
        .min(3, 'Должно быть более трех символов')
        .max(30, 'Должно быть менее 30 символов')
        .required('Поле обязательно для заполнения'),
    password: yup.string()
        .required('Поле обязательно для заполнения')
})
