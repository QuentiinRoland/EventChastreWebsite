import React from "react";
import Button from "../Button/Button";
import Subtitle from "../Subtitle/Subtitle";
import { Layout } from "@/layout/layout";

const Form = () => {
  return (
    <Layout>
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
        {/* Remove the recursive Form component rendering */}
        <div className="w-full md:w-1/3">
          {/* Here, you would place the actual form elements */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label>Nom : </label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[##FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Prénom : </label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[##FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email : </label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[##FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Téléphone : </label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[##FE8C5F]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Ticket : </label>
              <select className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[##FE8C5F]">
                <option>Séléctionner votre entrée</option>
                <option value="party">Soirée : 5€</option>
                <option value="tractor">Tracteurs + Dîner : 5€</option>
                <option value="activity">Activitée : 5€</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>Activitée : </label>
              <select className=" border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[#FE8C5F] focus:ring-1 focus:ring-[##FE8C5F]">
                <option>Séléctionner votre activitée</option>
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
    </Layout>
  );
};

export default Form;
