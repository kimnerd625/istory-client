"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { getAccessToken } from "@/app/utils/localAccessToken";

interface ImageUploaderProps {
  familymissionNo: string; // 처음에는 문자열로 전달됩니다
}

const ImageUploader = ({ familymissionNo }: ImageUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // 선택된 파일을 저장하기 위한 상태

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file); // 선택된 파일을 저장
      handleSubmit(file); // 파일 선택 후 자동으로 제출
    }
  };

  const handleClick = () => {
    document.getElementById("imageUpload")?.click();
  };

  const handleSubmit = async (file: File) => {
    const formData = new FormData();
    formData.append("familymissionNo", familymissionNo); // 숫자로 변환한 후 문자열로 변환
    formData.append("missionImg", file);

    try {
      const response = await fetch("/api/mission/uploadMissionImage", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`, // 필요한 경우 액세스 토큰을 포함
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("이미지 업로드에 실패했습니다.");
      }

      const result = await response.json();
      if (result && result.success) {
        toast.success("이미지가 성공적으로 업로드되었습니다.");
      } else {
        toast.error("이미지 업로드에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("이미지 업로드에 실패했습니다.");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div
        className="relative w-[320px] h-[240px] border-dashed shadow-lg rounded-xl cursor-pointer flex justify-center items-center overflow-hidden"
        onClick={handleClick}
        style={{ height: "240px", width: "320px" }} // 부모 요소의 높이와 너비를 설정합니다.
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="업로드 된 이미지"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        ) : (
          <Image
            src="/images/image-upload-default.png"
            alt="기본 이미지"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </section>
  );
};

export default ImageUploader;
