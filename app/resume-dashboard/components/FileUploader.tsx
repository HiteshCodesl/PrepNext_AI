"use client"
import { formatSize } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react"
import {useDropzone} from "react-dropzone";

interface FileUploaderProp {
    onFileSelect?: (file: File | null) => void;
}

export function FileUploader({ onFileSelect }: FileUploaderProp) {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] || null;
    onFileSelect?.(file);
  }, [onFileSelect]);


  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 20 * 1024 * 1024,
  });

  const file = acceptedFiles[0] || null;

  return (
     <div 
      {...getRootProps({
        onClick: (e) => {
            if(file){
              e.stopPropagation();
            }
        },
        onDrop: (e) => e.stopPropagation(),
      })}
      className="p-10 border border-dashed rounded-lg cursor-pointer flex flex-col items-center justify-center space-y-4">

      <input {...getInputProps()} />

      {isDragActive ? (
        <p className="text-primary">Drop the file here ...</p>
      ) : (
        <div className="flex items-center flex-col gap-3">
         
          {file ?  (
            <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-4 border rounded-xl p-2">
              <Image src="/pdf.png" alt="pdf" height={30} width={30} />
              <div>
                <p className="text-md text-gray-700 font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
              </div>
            </div>
          ) : (
            <>
             <Image src="/info.svg" height={50} width={50} alt="info" />
              <p className="text-md text-gray-500 text-center">
                <span className="font-semibold">Click to Upload</span> or Drag & Drop
              </p>
              <p className="text-lg text-gray-500 text-center">PDF (max 20 MB)</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
