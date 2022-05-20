import { Table, ScrollArea } from "@mantine/core";

import { GroupItem } from "../group-item";

const allGroups = [
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo 1",
    password: true,
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo 12",
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo 11",
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo 1324",
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo dsfdf",
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo fasdfasasdf",
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Grupo 1aaa",
    description:
      "Esta es la descripción de este grupo, por lo tanto debe ser extensa para comprobar cómo se comporta dentro del GroupItem",
  },
];

function GroupList() {
  // TODO: useSelector with the groups state
  return (
    <ScrollArea style={{ height: "85vh" }} offsetScrollbars>
      <Table sx={{ minWidth: 800 }} verticalSpacing="lg" highlightOnHover>
        <tbody>
          {allGroups.map((item, index) => (
            <GroupItem key={index} group={item} />
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

export default GroupList;
