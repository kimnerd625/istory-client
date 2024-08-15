"use client";

import React, { useState } from "react";
import Image from "next/image";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleClick = () => {
    document.getElementById("imageUpload")?.click();
  };

  return (
    <section className="flex flex-row justify-center items-center">
      <div
        className="relative w-[200px] h-[200px] border-dashed shadow-xl rounded-xl cursor-pointer flex flex-1 justify-center items-center overflow-hidden"
        onClick={handleClick}
      >
        {selectedImage ? (
          <Image src={selectedImage} alt="업로드 된 이미지" fill />
        ) : (
          <Image
            src="/images/image-upload-default.png"
            alt="기본 이미지"
            fill
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
