import { GroupList } from "./components/group-list";
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { Search, ArrowRight, ArrowLeft } from "tabler-icons-react";

function GroupFinder() {
  const theme = useMantineTheme();

  return (
    <div>
      <TextInput
        my={20}
        icon={<Search size={18} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled">
            {theme.dir === "ltr" ? (
              <ArrowRight size={18} />
            ) : (
              <ArrowLeft size={18} />
            )}
          </ActionIcon>
        }
        placeholder="Search groups"
        rightSectionWidth={42}
      />
      <GroupList />
    </div>
  );
}

export default GroupFinder;
