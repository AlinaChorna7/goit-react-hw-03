import styles from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    resetForm(); 
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.formContainer}>
          <div  className={styles.formField}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text"  className={styles.inputField}/>
            <ErrorMessage name="name" component="div" />
          </div>

          <div  className={styles.formField}>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" className={styles.inputField} />
            <ErrorMessage name="number" component="div" />
          </div>

          <button type="submit"  className={styles.submitButton}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;


