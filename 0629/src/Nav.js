import { Link } from 'react-router-dom';

export function Nav({ topics }) {
  return (
    <nav>
      <ol>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <Link to={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
