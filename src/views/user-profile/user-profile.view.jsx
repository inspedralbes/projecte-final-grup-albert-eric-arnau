import { PublicUserProfile } from "../../components/user-profile";
function UserProfile() {
  const user_info = {
    name: "MangoLoco",
    username: "@Arnau",
    email: "mangoloco@gmail.com",
    avatar:
      "https://www.disponalencasa.com/pub/media/catalog/product/cache/4025f56c98cb88143bb53de4d18da868/m/o/monster-juice-mango-loco.jpg",
  };

  return (
    <div style={{ verticalAlign: "middle" }}>
      <PublicUserProfile
        name={user_info.name}
        username={user_info.username}
        email={user_info.email}
        avatar={user_info.avatar}
      />
    </div>
  );
}

export default UserProfile;
