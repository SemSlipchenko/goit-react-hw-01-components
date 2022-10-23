import { Profile } from './components/Profile/Profile';
import { Statistitcs } from './components/Statistics/Statistics';
import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistitcs title="Upload stats" stats={data} />
    </div>
  );
};
