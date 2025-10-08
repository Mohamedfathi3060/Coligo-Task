import { Stack } from '@mui/material';
import ExamTime from '../components/ExamTime';
import Announcement from '../components/Announcement';
import Deadlines from '../components/Deadlines';

function Dashboard() {
  return (
    <>
      <ExamTime />
      <Stack
        direction={{
          xs: 'column',
          lg: 'row',
        }}
        sx={{}}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
      >
        <Announcement />
        <Deadlines />
      </Stack>
    </>
  );
}
export default Dashboard;
