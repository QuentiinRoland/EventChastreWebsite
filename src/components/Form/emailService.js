import emailjs from "emailjs-com";

export const sendEmail = (formData) => {
  return emailjs.send(
    "service_qq0fwsi", // Remplacez par votre Service ID
    "template_gvvn8qk", // Remplacez par votre Template ID
    formData,
    "IvzDGnBfKI9XdjquO" // Remplacez par votre Public Key (User ID)
  );
};
