import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .matches(
      /^[^-\s=]([a-zа-яФ-ЯA-Z0-9@$!_\s,%*\-.#?&]{1,50})$/,
      'Поле не  може починатися з пробілу або дефісу',
    )
    .required(''),

  author: yup
    .string()

    .matches(
      /^[a-zA-Zа-яА-Я0-9]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Поле не  може починатися з пробілу або дефісу',
    )
    .required(''),
  date: yup
    .string()
    .min(4, 'Не менше 4 цифр')
    .max(4, 'Не більше 4 цифр')
    .matches(
      /^[^-=s03456789]/,
      'Дане поле не може починатися з цифр 0/3/4/5/6/7/8/9',
    )
    .required(''),
  pages: yup
    .string()
    .max(4, 'Не більше 4 цифр')
    .matches(/^[^-\s=]/, 'Поле не  може починатися з пробілу або дефісу')
    .required(''),
});

export default validationSchema;
