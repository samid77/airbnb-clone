'use client';
import React, { useCallback, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  var cloudinary: any
}

const uploadPreset:string = "mj5rhjo8";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({onChange,value}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  }
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange]);

  return (
    <CldUploadWidget 
      onUpload={handleUpload} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1
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
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus
              size={50}
            />
            <div className="font-semibold text-lg">
              Click to upload
            </div>
            {value && !imageLoaded && (
              <div className="animate-spin h-8 w-8 border-t-4 border-rose-600 rounded-full" />
            )}
            {value && imageLoaded && (
              <div className="
              absolute inset-0 w-full h-full">
                <Image
                  fill 
                  style={{ objectFit: 'cover' }} 
                  src={value} 
                  alt="House" 
                  onLoad={handleImageLoad}
                />
              </div>
            )}
          </div>
        ) 
    }}
    </CldUploadWidget>
  );
}

export default ImageUpload;