import { PublicUserProfile } from "../../components/user-profile";
function UserProfile() {
  // const doFetch = async () => {
  //   const data = await fetch(
  //     "http://192.168.210.155:8000/user/lng5Fi9Fycsf4lgMeJx1"
  //   );
  //   return await data.json();
  // };
  // const user_info = doFetch();
  // console.log(user_info);
  const user_info = {
    name: "MangoLoco",
    username: "@Arnau",
    email: "mangoloco@gmail.com",
    avatar:
      "https://www.disponalencasa.com/pub/media/catalog/product/cache/4025f56c98cb88143bb53de4d18da868/m/o/monster-juice-mango-loco.jpg",
    description:
      "I'm a mango loco, i realy like MangoLoco, let's go MangoLoco wooooo its soooo goooooood.",
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}>
      <PublicUserProfile
        name={user_info.name}
        username={user_info.username}
        email={user_info.email}
        avatar={user_info.avatar}
        description={user_info.description}
      />
    </div>
  );
}

export default UserProfile;
