import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

export function Control(props) {
  const params = useParams();
  const id = parseInt(params.id);
  let contextUI = null;
  if (id) {
    contextUI = (
      <>
        <Button variant="outlined">update</Button>
        <Button
          variant="outlined"
          onClick={() => {
            props.onDelete(id);
          }}
        >
          delete
        </Button>
      </>
    );
  }
  return (
    <>
      <Button component={Link} to="/create" variant="outlined">
        create
      </Button>
      {contextUI}
    </>
  );
}
