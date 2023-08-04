import { Box, Table, Tr, Td, Avatar, Text } from "@chakra-ui/react";
import { Comment } from "../types";

interface PhotoCommentProps {
  comment: Comment;
}

const PhotoComment: React.FC<PhotoCommentProps> = ({ comment }) => {
  return (
    <Box
      p={2}
      my={1}
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <Table size="sm" variant="unstyled">
        <Tr>
          <Td>
            <Avatar
              size="sm"
              name={comment.author}
              src={`https://i.pravatar.cc/32?u=${comment.author}`}
            />
          </Td>
          <Td fontWeight="bold">{comment.author}</Td>
        </Tr>
      </Table>
      <Text mt={1} fontSize="md">
        {comment.content}
      </Text>
    </Box>
  );
};

export default PhotoComment;
