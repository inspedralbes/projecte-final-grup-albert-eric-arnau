import { useSelector } from "react-redux";
import { PublicUserProfile } from "../../components/user-profile";
function UserProfile() {
  const { user } = useSelector((store) => store.auth);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}>
      <PublicUserProfile
        name={user.name}
        username={user.username}
        email={user.email}
        avatar={user.avatar}
        description={user.description}
      />
    </div>
  );
}

export default UserProfile;
