"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="korkwts9"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
                relative
                cursor-pointer
                hover:opacity-70
                transition
                border-2
                p-20
                border-slate-200
                border-dashed
                flex
                flex-col
                justify-center
                items-center
                gap-4
                text-slate-600
                "
          >
            <TbPhotoPlus size={40} />
            <div className="font-bold text-md"> Click to upload</div>
            {value && (
              <div
                className="
                absolute
                inset-0
                w-full
                h-full
                "
              >
                <Image
                  alt="Upload"
                  style={{ objectFit: "cover" }}
                  fill
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
