"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import RoleSelect from "../sections/signup/RoleSelect";
import SecondForm from "../sections/signup/SecondForm";
import ThirdForm from "../sections/signup/ThirdForm";
import Spinner from "../components/Spinner";

export default function SignUpPage() {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const [role, setRole] = useState<string>("parent");
  const [name, setName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleSubmitButton = async () => {
    setLoading(true);
    try {
      let genderStr = "male";
      if (gender == "1" || gender == "3") {
        genderStr = "male";
      } else if (gender == "2" || gender == "4") {
        genderStr = "female";
      }

      const response = await fetch("/api/user/signup", {
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
          gender: genderStr,
          birthdate,
          role,
        }),
      });

      if (!response.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }
      toast.success("회원가입에 성공했어요!");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      toast.error("회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg overflow-x-hidden py-[56px] px-5">
      {loading && <Spinner />}
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
