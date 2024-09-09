"use client";

import React, { useState } from "react";
import { sendEmail } from "./emailService";
import Button from "../Button/Button";
import Subtitle from "../Subtitle/Subtitle";
import LayoutSection from "../Layout/Layout";

const Form = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    ticket: "",
    activite: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    sendEmail(formData)
      .then((result) => {
        console.log("Email envoyé avec succès:", result.text);
        alert("Votre message a été envoyé avec succès!");
      })
      .catch((error) => {
        console.error("Erreur complète:", error); // Affiche l'erreur complète
        alert(
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
        );
      });
  };

  return (
    <LayoutSection id="form">
      <div className="flex flex-col md:flex-row py-[50px] md:py-[100px] gap-6">
        <div className="flex flex-col w-full md:w-2/3 gap-2 justify-center">
          <Subtitle>Réservez votre place maintenant !</Subtitle>
          <h2 className="text-2xl">
            Envie de participer à l'événement ? Ne traînez plus ! Achetez vos
            tickets
          </h2>
          <p className="">
            Ne manquez pas l'opportunité de participer à cet événement
            exceptionnel. Les places sont limitées, alors n'attendez plus pour
            acheter vos tickets. Rejoignez-nous pour une journée remplie de
            surprises, de découvertes et de moments mémorables. Assurez-vous
            d'être de la partie et préparez-vous à vivre une expérience que vous
            n'oublierez jamais.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label>Nom : </label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[#FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Prénom : </label>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                required
                value={formData.prenom}
                onChange={handleChange}
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[#FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email : </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[#FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Téléphone : </label>
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                required
                value={formData.telephone}
                onChange={handleChange}
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[#FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Ticket : </label>
              <select
                name="ticket"
                value={formData.ticket}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[#FE8C5F]"
              >
                <option value="">Séléctionner votre entrée</option>
                <option value="party">Soirée : 5€</option>
                <option value="tractor">Tracteurs + Dîner : 5€</option>
                <option value="activity">Activitée : 5€</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>Activitée : </label>
              <select
                name="activite"
                value={formData.activite}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[#FE8C5F]"
              >
                <option value="">Séléctionner votre activitée</option>
                <option value="car">Exposition de voitures</option>
                <option value="mobylette">Balade de Mobylette</option>
                <option value="dance">Country Dance</option>
                <option value="partynight">Soirée Années 80-2000</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#FE8C5F] rounded-md text-white py-2"
            >
              Envoyez !
            </button>
          </form>
        </div>
      </div>
    </LayoutSection>
  );
};

export default Form;
