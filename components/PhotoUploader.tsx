import { Box, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface PhotoUploaderProps {
  onUpload: (file: File) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const toast = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onUpload(file);
      toast({
        title: "File uploaded",
        description: "Your photo has been uploaded successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setIsDragging(false);
    onUpload(file);
    toast({
      title: "File uploaded",
      description: "Your photo has been uploaded successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  return (
    <Box
      p={4}
      borderWidth="2px"
      borderStyle="dashed"
      borderColor={isDragging ? "teal.500" : "gray.300"}
      borderRadius="md"
      textAlign="center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      cursor="pointer"
    >
      <label htmlFor="photo" style={{ cursor: "pointer" }}>
        {selectedFile ? (
          <Box>
            <Box mb={2}>Selected File:</Box>
            <Box fontWeight="bold" mb={4}>
              {selectedFile.name}
            </Box>
            <Box
              as="span"
              color="teal.500"
              onClick={() => setSelectedFile(null)}
              cursor="pointer"
            >
              Upload another file
            </Box>
          </Box>
        ) : (
          <Box mb={2}>
            Drag and drop your file here, or click to select a photo
          </Box>
        )}
      </label>
      <input
        type="file"
        id="photo"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default PhotoUploader;
