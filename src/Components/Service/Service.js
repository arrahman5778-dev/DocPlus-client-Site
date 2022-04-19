import React from "react";
import lungSVG from "../../img/Blood test-bro.png";
import HeartSVG from "../../img/Cardiologist-rafiki.png";
import EyeSVG from "../../img/Ophthalmologist-amico.png";
import EarSVG from "../../img/Vaccine-amico (1).png";
import CosmeticSVG from "../../img/Medical prescription-amico.png";
import ToothSVG from "../../img/Breast cancer research-bro.png";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="service-header mb-3">
        <h2 style={{ color: "#434343" }} className=" text-5xl font-bold">
          Service
        </h2>
        <p style={{ color: "#666666" }} className="text-xl">
          Best Service are Available in Our Cember
        </p>
      </div>
      <hr className="w-9/12 mx-auto" />
      <div className="service-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-36 px-5">
        <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
          <img
            className="mx-auto absolute top-[-25%] left-[25%] w-64"
            src={lungSVG}
            alt="Svg doctro image"
          />
          <h1 className="mt-28 text-2xl mb-3 font-bold font-mono">
            Blood Test
          </h1>
          <hr />
          <p className="mt-5 text-justify">
            Regular blood testing is one of the most important ways to keep
            track of your overall physical well-being. Getting tested at routine
            intervals can allow you to see the way your body changes over time
            and empower you to make informed decisions about your health.{" "}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="py-2 px-12  bg-sky-300 rounded mt-7 mb-3 font-semibold"
          >
            Book Now
          </button>
        </div>

        <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
          <img
            className="mx-auto absolute top-[-45%] left-[5%] w-70"
            src={HeartSVG}
            alt="Svg doctro image"
          />
          <h1 className="mt-28 text-2xl mb-3 font-bold font-mono">
            Cardiology
          </h1>
          <hr />
          <p className="mt-5 text-justify">
            A cardiologist is a medical doctor who studies and treats diseases
            and conditions of the cardiovascular system — the heart and blood
            vessels — including heart rhythm disorders, coronary artery disease,
            heart attacks, heart defects and infections, and related disorders.{" "}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="py-2 px-12  bg-sky-300 rounded mt-7 mb-3 font-semibold"
          >
            Book Now
          </button>
        </div>

        <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
          <img
            className="mx-auto absolute top-[-28%] left-[15%] w-64"
            src={EyeSVG}
            alt="Svg doctro image"
          />
          <h1 className="mt-28 text-2xl mb-3 font-bold font-mono">
            Ophthalmology
          </h1>
          <hr />
          <p className="mt-5 text-justify">
            An ophthalmologist is a medical doctor who specializes in the
            treatment of illnesses, diseases, injuries, and conditions that
            affect the eye. The ophthalmologist performs vision tests and
            prescribes corrective lenses .
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="py-2 px-12  bg-sky-300 rounded mt-7 mb-3 font-semibold"
          >
            Book Now
          </button>
        </div>

        <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
          <img
            className="mx-auto absolute top-[-28%] left-[15%] w-64"
            src={CosmeticSVG}
            alt="Svg doctro image"
          />
          <h1 className="mt-28 text-2xl mb-3 font-bold font-mono">
            Medical prescription
          </h1>
          <hr />
          <p className="mt-5 text-justify">
            As reported by the FDA, a prescription with the abbreviation “MTX”
            has been interpreted as both methotrexate (used for rheumatoid
            arthritis) or mitoxantrone (a cancer drug). “ATX” was misunderstood
            to be the shorthand for zidovudine (AZT, an HIV drug) or
            azathioprine (an immunosuppressant drug). These types of errors can
            be linked with severe patient harm.{" "}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="py-2 px-12  bg-sky-300 rounded mt-7 mb-3 font-semibold"
          >
            Book Now
          </button>
        </div>

        <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
          <img
            className="mx-auto absolute top-[-25%] left-[15%] w-72"
            src={ToothSVG}
            alt="Svg doctro image"
          />
          <h1 className="mt-28 text-2xl mb-3 font-bold font-mono">
            Breast Cancer Research
          </h1>
          <hr />
          <p className="mt-5 text-justify">
            Breast Cancer Research and Treatment provides the surgeon,
            radiotherapist, medical oncologist, endocrinologist, epidemiologist,
            immunologist or cell biologist investigating problems in breast
            cancer a single forum for communication. It seeks to develop a new
            focus and new perspectives for all those concerned with breast
            cancer{" "}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="py-2 px-12  bg-sky-300 rounded mt-7 mb-3 font-semibold"
          >
            Book Now
          </button>
        </div>

        <div className="serevice-card border-2 p-5 shadow-lg relative rounded-md mb-36">
          <img
            className="mx-auto absolute top-[-25%] left-[15%] w-64"
            src={EarSVG}
            alt="Svg doctro image"
          />
          <h1 className="mt-28 text-2xl mb-3 font-bold font-mono">
            COVID-19 Vaccines
          </h1>
          <hr />
          <p className="mt-5 text-justify">
            Safe and effective vaccines are available that provide strong
            protection against serious illness, hospitalization and death from
            COVID-19. Billions of people have been vaccinated against COVID-19.
            Getting vaccinated is one of the most important things you can do to
            protect yourself against COVID-19, help end the pandemic and stop
            new variants emerging.{" "}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="py-2 px-12  bg-sky-300   rounded mt-7 mb-3 font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
