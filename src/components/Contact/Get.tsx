import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
  agreed: string;
}

type SubmitStatus = 'success' | 'error' | null;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    agreed: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: '',
    agreed: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = {
      name: '',
      email: '',
      message: '',
      agreed: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Please fill out this field';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please fill out this field';
      valid = false;
    }

    if (!formData.agreed) {
      newErrors.agreed = 'Please agree to the privacy policy';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }

      // Your actual EmailJS credentials
      const serviceID = 'service_gzhhi8e';
      const templateID = 'template_vm7hhe6'; // Updated with your real template ID
      const publicKey = '7zplEd4yi3t2RpWGY';

      // Debug: Log form data before sending
      console.log('Form data being sent:', formData);

      const result = await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      console.log('EmailJS response:', result); // Debug success

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        agreed: false,
      });
    } catch (error) {
      console.error('EmailJS error details:', error); // Detailed error logging
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 max-w-6xl rounded-2xl">
      <div className="">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h1>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl">
            There was an error sending your message. Please try again later.
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-xl bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-300 text-base ${
                  errors.name ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="Jane Smith"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-xl bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-300 text-base ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className={`w-full px-4 py-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none text-base ${
                errors.message ? "ring-2 ring-red-500 border-red-500" : ""
              }`}
              placeholder="Type something here..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
              />
              <label htmlFor="agreed" className="text-base text-gray-700">
                I Agree with Privacy Policy and Cookie Policy
              </label>
            </div>
            {errors.agreed && <p className="text-red-500 text-sm mt-1">{errors.agreed}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-900 transition-colors text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;