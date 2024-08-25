"use client";

import React, { useState } from "react";
import RoleSelect from "../sections/signup/RoleSelect";
import SecondForm from "../sections/signup/SecondForm";
import ThirdForm from "../sections/signup/ThirdForm";

export default function SignUpPage() {
  const [step, setStep] = useState<number>(1);

  const [role, setRole] = useState<string>("parent");
  const [name, setName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmitButton = async () => {};

  const SectionByStep = () => {
    switch (step) {
      case 1:
        return (
          <RoleSelect
            role={role}
            setRole={setRole}
            step={step}
            setStep={setStep}
          />
        );

      case 2:
        return (
          <SecondForm
            name={name}
            setName={setName}
            step={step}
            setStep={setStep}
            birth={birthdate}
            setBirth={setBirthdate}
            phone={phone}
            setPhone={setPhone}
          />
        );

      case 3:
        return (
          <ThirdForm
            step={step}
            setStep={setStep}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
          />
        );
    }
  };

  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg overflow-x-hidden py-[56px] px-5">
      <SectionByStep />
    </main>
  );
}
