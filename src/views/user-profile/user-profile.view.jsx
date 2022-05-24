import { Box, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { PublicUserProfile } from "../../components/user-profile";
function UserProfile() {
  const { user } = useSelector((store) => store.auth);

  return (
    <Box
      sx={{
        height: "100%",
        padding: "2rem",
        maxWidth: "700px",
        margin: "0 auto",
      }}>
      <PublicUserProfile
        name={user.name}
        username={user.username}
        email={user.email}
        avatar={user.avatar}
      />
      <Text size="xl" weight={500}>
        Description
      </Text>
      <Text size="xl" color="dimmed">
        {user.description || "No description provided"}
      </Text>
    </Box>
  );
}

export default UserProfile;
