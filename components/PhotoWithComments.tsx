import { Box, Image, VStack, Divider } from "@chakra-ui/react";
import { Comment } from "../types";
import PhotoComments from "./PhotoComments";

interface PhotoWithCommentsProps {
  photoUrl: string;
  comments: Comment[];
  onCommentSubmit: (author: string, content: string) => void;
}

const PhotoWithComments: React.FC<PhotoWithCommentsProps> = ({
  photoUrl,
  comments,
  onCommentSubmit,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={2} my={4}>
      <Image src={photoUrl} alt="Uploaded" width="100%" borderRadius="md" />
      <Divider my={2} />
      <VStack spacing={2} align="stretch">
        <PhotoComments comments={comments} onCommentSubmit={onCommentSubmit} />
      </VStack>
    </Box>
  );
};

export default PhotoWithComments;
