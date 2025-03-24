import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-10/12 md:w-4/5 lg:w-1/2">
        <h1 className="text-center mb-4 text-3xl font-bold">Prenons contact</h1>
        <div className="mt-6">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required('Un nom est nécessaire')
                .min(2, 'Votre nom doit comporter au moins 2 caractères')
                .max(50, 'Votre nom doit comporter moins de 50 caractères'),
              email: Yup.string().required('Un email est nécessaire').email('Entrez un email valide'),
              message: Yup.string()
                .required('Un message est nécessaire')
                .min(8, 'Votre mot de passe doit comporter au moins 8 caractères'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // Simuler l'envoi du formulaire
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Message envoyé:', values);
                setSubmitting(false);
                navigate('/');
              } catch (error) {
                setSubmitting(false);
                console.error('Erreur lors de l\'envoi:', error);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                  <div>
                    <Field type="text" className="w-full p-2 border rounded-lg" id="name" name="name" placeholder="Nom *" />
                    <ErrorMessage name="name" component="div" className="mt-1 mb-0 bg-neutral-50 text-neutral-600 p-2 rounded-lg text-sm border border-neutral-200" />
                  </div>
                  <div>
                    <Field type="text" className="w-full p-2 border rounded-lg" id="email" name="email" placeholder="Email *" />
                    <ErrorMessage name="email" component="div" className="mt-1 mb-0 bg-neutral-50 text-neutral-600 p-2 rounded-lg text-sm border border-neutral-200" />
                  </div>
                </div>
                <div className="mb-3">
                  <Field 
                    as="textarea" 
                    className="w-full p-2 border rounded-lg" 
                    id="message" 
                    name="message" 
                    placeholder="Message *"
                    rows="4"
                    style={{ resize: 'vertical', minHeight: '100px' }}
                  />
                  <ErrorMessage name="message" component="div" className="mt-1 mb-0 bg-neutral-50 text-neutral-600 p-2 rounded-lg text-sm border border-neutral-200" />
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full border-2 border-neutral-800 hover:bg-neutral-800 text-neutral-800 hover:text-white font-medium py-2 px-4 rounded-3xl transition-colors duration-300 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    Envoyer votre message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;  
