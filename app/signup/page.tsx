"use client";

import React, { useState } from "react";
import RoleSelect from "../sections/signup/RoleSelect";
import SecondForm from "../sections/signup/SecondForm";
import ThirdForm from "../sections/signup/ThirdForm";
import { toast } from "sonner";

export default function SignUpPage() {
  const [step, setStep] = useState<number>(1);

  const [role, setRole] = useState<string>("parent");
  const [name, setName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleSubmitButton = async () => {
    try {
      let genderStr = "male";
      if (gender == "1" || gender == "3") {
        genderStr = "male";
      } else if (gender == "2" || gender == "4") {
        genderStr = "female";
      }

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
          name,
          phone,
          genderStr,
          birthdate,
          role,
        }),
      });

      if (!response.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }
      toast.success("회원가입이 성공적으로 이뤄졌습니다.");
    } catch (error) {
      toast.error("회원가입에 실패했습니다.");
    }
  };

  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg overflow-x-hidden py-[56px] px-5">
      {step === 1 && (
        <RoleSelect
          role={role}
          setRole={setRole}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <SecondForm
          name={name}
          setName={setName}
          step={step}
          setStep={setStep}
          birth={birthdate}
          setBirth={setBirthdate}
          phone={phone}
          setPhone={setPhone}
          gender={gender}
          setGender={setGender}
        />
      )}
      {step === 3 && (
        <ThirdForm
          step={step}
          setStep={setStep}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          handleSubmitButton={handleSubmitButton}
        />
      )}
    </main>
  );
}
