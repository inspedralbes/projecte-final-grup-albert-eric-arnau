import { AppShell, Header } from "@mantine/core";
import { SideBar } from "../components/sidebar";

function Layout({ children, navbarType }) {
  return (
    <AppShell
      padding="md"
      navbar={<SideBar navbarType={navbarType} />}
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
