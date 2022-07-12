import { Link } from "react-router-dom";
import profile from "../../images/profile.svg";
import "./ProfileLog.css";

function ProfileLog() {
  return (
    <Link
      to="/profile"
      className="profile__link profile-log__text"
      title="Аккаунт"
    >
      Аккаунт
      <img
        className="profile__link profile-log__image"
        alt="Иконка аккаунта"
        src={profile}
      />
    </Link>
  );
}

export default ProfileLog;
