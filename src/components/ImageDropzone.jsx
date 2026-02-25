import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import documentImg from "../assets/images/documentImg.png"
import { useTranslation } from "react-i18next";

const ImageDropzone = ({ oldImages = [], setFiles, updateOldImages }) => {

   const { t, i18n } = useTranslation();

  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop: (acceptedFilesList) => {
      // Just set the raw file without preview
      const filesWithPreviews = acceptedFilesList.map((file) => ({
        file,
        preview: URL.createObjectURL(file), // Create object URL for preview
      }));
      setAcceptedFiles((prev) => [...prev, ...filesWithPreviews]);
      setFiles([...acceptedFiles, ...filesWithPreviews.map((file) => file.file)]); 
    },
    multiple: true,
    accept: "image/*",
  });

  // Handle removing a file (from the preview list)
  const removeFile = (index) => {
    const updatedFiles = [...acceptedFiles];
    updatedFiles.splice(index, 1);
    setAcceptedFiles(updatedFiles);
    setFiles([...acceptedFiles, ...updatedFiles.map((file) => file.file)]); 
  };

  // Handle removing a file from the DB
  const removeDBFile =  (nameToRemove) => {
    const updatedOldImages = oldImages.filter((image) => image !== nameToRemove);

      updateOldImages(updatedOldImages); // Emit updated old images
  };

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>
          {isDragActive ? (
            "Drop the files here ..."
          ) : (
            <img src={documentImg} className="docImg" />
          )}
        </p>
        <h5>{t("personal_trade")}</h5>
      </div>

      <div className="previews bg-light">
        {/* Display old images */}
        {oldImages.map((image, index) => (
          <div key={index} className="preview-item">
            <img src={image} alt="Preview" className="preview-image" />
            <button
              type="button"
              onClick={() => removeDBFile(image)}
              className="remove-button"
            >
              X
            </button>
          </div>
        ))}

        {/* Display newly accepted files (without preview) */}
        {acceptedFiles.map((file, index) => (
          <div key={index} className="preview-item">
            <img src={file.preview} alt="Preview" className="preview-image" />
            <button
              type="button"
              onClick={() => removeFile(index)}
              className="remove-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
