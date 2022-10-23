import { Profile } from './Profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers.toLocaleString('ru')}
      views={user.stats.views.toLocaleString('ru')}
      likes={user.stats.likes.toLocaleString('ru')}
    />
  );
};
