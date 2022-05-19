import { Text, Group, Paper, Avatar } from "@mantine/core";

const usersData = [
  {
    name: "Albert Chao Vasco",
    email: "albert.tardis05@gmail.com",
    role: "Backend",
    url: "https://www.linkedin.com/in/albert-chao-vasco-a678a51a4/",
  },
  {
    name: "Eric Clemente Casals",
    email: "eeric20011@gmail.com",
    role: "Frontend",
    url: "https://www.linkedin.com/in/eric-clemente-casals-4247291b8/",
  },
  {
    name: "Arnau Orts Brichs",
    email: "orts.brichs.arnau@gmail.com",
    role: "Frontend",
    url: "https://www.linkedin.com/in/arnau-orts-7bb7261b8/",
  },
];

function UserCard() {
  return (
    <Group
      radius="md"
      position="center"
      spacing={100}
      withBorder
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        marginTop: theme.spacing.xl * 5,
        marginBottom: theme.spacing.xl * 3,
      })}>
      {usersData.map((user) => (
        <Paper>
          <Avatar src="/LogoPedralbes.png" size={100} radius={100} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {user.name}
          </Text>
          <Text align="center" color="dimmed" size="sm" mb="lg">
            {user.email} · {user.role}
          </Text>
          <a href={user.url} target="_blank" rel="noreferrer">
            <Text align="center" color="dimmed" size="md">
              {user.name} on LinkedIn
            </Text>
          </a>
        </Paper>
      ))}
    </Group>
  );
}

export default UserCard;
