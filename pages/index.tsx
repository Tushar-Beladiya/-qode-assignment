import { useState } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import PhotoUploader from "../components/PhotoUploader";
import { Comment } from "../types";
import PhotoWithComments from "../components/PhotoWithComments";

const Home: React.FC = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<
    { file: File; comments: Comment[] }[]
  >([]);

  const handlePhotoUpload = (file: File) => {
    setUploadedPhotos([...uploadedPhotos, { file, comments: [] }]);
  };

  const handleCommentSubmit = (
    photoIndex: number,
    author: string,
    content: string
  ) => {
    const newComment: Comment = {
      id: new Date().getTime().toString(),
      author,
      content,
    };

    const updatedUploadedPhotos = [...uploadedPhotos];
    updatedUploadedPhotos[photoIndex].comments.push(newComment);
    setUploadedPhotos(updatedUploadedPhotos);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        My Photo App
      </Heading>
      <PhotoUploader onUpload={handlePhotoUpload} />
      <SimpleGrid columns={4} spacing={4}>
        {uploadedPhotos.map((photoData, index) => (
          <PhotoWithComments
            key={index}
            photoUrl={URL.createObjectURL(photoData.file)}
            comments={photoData.comments}
            onCommentSubmit={(author, content) =>
              handleCommentSubmit(index, author, content)
            }
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
