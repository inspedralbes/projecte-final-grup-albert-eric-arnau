import { GroupList } from "./components/group-list";
import { TextInput, ActionIcon } from "@mantine/core";
import { Search, ArrowRight } from "tabler-icons-react";
import { useState } from "react";
import { ModalsProvider } from "@mantine/modals";
import { useDebouncedValue } from "@mantine/hooks";

function GroupFinder() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 200);
  return (
    <div>
      <ModalsProvider>
        <TextInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
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
        <GroupList search={debouncedSearch} />
      </ModalsProvider>
    </div>
  );
}

export default GroupFinder;
