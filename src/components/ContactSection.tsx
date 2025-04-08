import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Contact = () => {
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const sendEmail = async (values: { name: string; firstName: string; email: string; message: string }) => {
    try {
      console.log('Tentative d\'envoi d\'email...');
      
      const apiUrl = 'https://v2-1vzx3l1au-aarons-projects-6e3d5dd8.vercel.app/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      
      console.log('Réponse du serveur:', data);
      
      if (!data.success) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du message');
      }
      
      return true;
    } catch (error) {
      console.error('Erreur détaillée:', error);
      if (error instanceof Error) {
        console.error('Message d\'erreur:', error.message);
      }
      return false;
    }
  };

  return (
    <>
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`p-4 rounded-lg shadow-lg ${
            notification.type === 'success' 
              ? 'bg-neutral-800 text-white border border-neutral-700' 
              : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
          }`}>
            {notification.message}
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="w-full sm:w-10/12 md:w-4/5 lg:w-1/2">
          <h1 className="text-center mb-4 text-3xl font-bold">Prenons contact</h1>
          <div className="mt-6">
            <Formik
              initialValues={{ name: '', firstName: '', email: '', message: '' }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required('Un nom est nécessaire')
                  .min(2, 'Votre nom doit comporter au moins 2 caractères')
                  .max(50, 'Votre nom doit comporter moins de 50 caractères'),
                firstName: Yup.string()
                  .required('Un prénom est nécessaire')
                  .min(2, 'Votre prénom doit comporter au moins 2 caractères')
                  .max(50, 'Votre prénom doit comporter moins de 50 caractères'),
                email: Yup.string().required('Un email est nécessaire').email('Entrez un email valide'),
                message: Yup.string()
                  .required('Un message est nécessaire')
                  .min(8, 'Votre message doit comporter au moins 8 caractères'),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const success = await sendEmail(values);
                  if (success) {
                    showNotification('success', 'Votre message a été envoyé avec succès !');
                    resetForm();
                  } else {
                    showNotification('error', 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
                  }
                  setSubmitting(false);
                } catch (error) {
                  setSubmitting(false);
                  console.error('Erreur lors de l\'envoi:', error);
                  showNotification('error', 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
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
                      <Field type="text" className="w-full p-2 border rounded-lg" id="firstName" name="firstName" placeholder="Prénom *" />
                      <ErrorMessage name="firstName" component="div" className="mt-1 mb-0 bg-neutral-50 text-neutral-600 p-2 rounded-lg text-sm border border-neutral-200" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <Field type="text" className="w-full p-2 border rounded-lg" id="email" name="email" placeholder="Email *" />
                    <ErrorMessage name="email" component="div" className="mt-1 mb-0 bg-neutral-50 text-neutral-600 p-2 rounded-lg text-sm border border-neutral-200" />
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
    </>
  );
};

export default Contact;  
