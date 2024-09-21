import FriendListItem from '../FriendListItem/FriendListItem';
import FriendListItemStyles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={FriendListItemStyles.FriendList}>
      {friends.map((friend) => (
        <li className={FriendListItemStyles.FriendListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
