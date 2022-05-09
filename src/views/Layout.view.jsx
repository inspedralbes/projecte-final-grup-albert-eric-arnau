import { AppShell, Header } from "@mantine/core";
import { SideBar } from "../components/sidebar";

function Layout({ children }) {
  return (
    <AppShell
      padding="md"
      navbar={<SideBar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}>
      {children}
    </AppShell>
  );
}
export default Layout;
