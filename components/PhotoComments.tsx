import { Box, Flex, Text, Input, Button, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { Comment } from "../types";
import PhotoComment from "./PhotoComment";

interface PhotoCommentsProps {
  comments: Comment[];
  onCommentSubmit: (author: string, content: string) => void;
}

const PhotoComments: React.FC<PhotoCommentsProps> = ({
  comments,
  onCommentSubmit,
}) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCommentSubmit(author, content);
    setAuthor("");
    setContent("");
  };

  return (
    <Box mt={2}>
      {comments.map((comment) => (
        <PhotoComment key={comment.id} comment={comment} />
      ))}
      <form onSubmit={handleSubmit}>
        <Flex mt={2} align="center">
          <Avatar
            size="sm"
            name={author}
            src={`https://i.pravatar.cc/32?u=${author}`}
            mr={2}
          />
          <Input
            flex="1"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your Name"
            size="sm"
            variant="filled"
            isRequired
          />
          <Input
            flex="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment..."
            size="sm"
            variant="filled"
            isRequired
          />
          <Button
            type="submit"
            ml={2}
            size="sm"
            colorScheme="teal"
            borderRadius="md"
            _hover={{ opacity: 0.8 }}
          >
            Add Comment
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default PhotoComments;
