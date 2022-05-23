import { Table, ScrollArea } from "@mantine/core";
import { useEffect, useState } from "react";
import { loadAllGroups } from "../../../../helpers/loadAllGroups";

import { GroupItem } from "../group-item";

function GroupList({ search }) {
  const [allGroups, setAllGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    (async () => {
      const groups = await loadAllGroups();
      setAllGroups(groups);
      setGroups(groups);
    })();
  }, []);

  useEffect(() => {
    if (search) {
      setGroups(
        allGroups.filter((group) =>
          group.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setGroups(allGroups);
    }
  }, [search]);

  // TODO: useSelector with the groups state
  return (
    <ScrollArea style={{ height: "85vh" }} offsetScrollbars>
      <Table sx={{ minWidth: 800 }} verticalSpacing="lg" highlightOnHover>
        <tbody>
          {groups.map((item, index) => (
            <GroupItem key={index} group={item} />
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

export default GroupList;
