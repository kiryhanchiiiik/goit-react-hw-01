import profileStyles from './Profile.module.css';

const Profile = (props) => {
  const { avatar, name, tag, location, stats } = props;
  return (
    <div className={profileStyles.profileContainer}>
      <div>
        <img src={avatar} alt={name} width={150} />
        <p className={profileStyles.profileName}>{name}</p>
        <p className={profileStyles.profileTag}>@{tag}</p>
        <p className={profileStyles.profileLoc}>{location}</p>
      </div>
      <ul className={profileStyles.profileNav}>
        <li className={profileStyles.profileNavItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={profileStyles.profileNavItem}>
          <span>Views</span> <span>{stats.views}</span>
        </li>
        <li className={profileStyles.profileNavItem}>
          <span>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
