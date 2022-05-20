import { GroupList } from "./components/group-list";
import { TextInput, ActionIcon } from "@mantine/core";
import { Search, ArrowRight, ArrowLeft } from "tabler-icons-react";
import { useState } from "react";
import { ModalsProvider } from "@mantine/modals";

function GroupFinder() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <ModalsProvider>
        <TextInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          my={20}
          icon={<Search size={18} />}
          radius="xl"
          size="md"
          rightSection={
            <ActionIcon size={32} radius="xl" color="orange" variant="filled">
              <ArrowRight size={18} />
            </ActionIcon>
          }
          placeholder="Search groups"
          rightSectionWidth={42}
        />
        <GroupList />
      </ModalsProvider>
    </div>
  );
}

export default GroupFinder;
