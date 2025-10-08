import { Avatar, Button, Divider, Stack, Typography } from '@mui/material';

const data = [
  {
    name: 'Mr Ahmed Mostafa',
    course: 'Math 101',
    imgUrl: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora incidunt suscipit eum debitis amet voluptatum. Amet sapiente adipisci enim corporis architecto dicta non repellendus, quia dolor quisquam, reiciendis harum.',
  },
  {
    name: 'Mrs Salma Ahmed',
    course: 'Physics 102',
    imgUrl: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora incidunt suscipit eum debitis amet voluptatum. Amet sapiente adipisci enim corporis architecto dicta non repellendus, quia dolor quisquam, reiciendis harum.',
  },
  {
    name: 'School Managment',
    course: 'Managment',
    imgUrl: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora incidunt suscipit eum debitis amet voluptatum. Amet sapiente adipisci enim corporis architecto dicta non repellendus, quia dolor quisquam, reiciendis harum.',
  },
  {
    name: 'Events Manager',
    course: 'Events',
    imgUrl: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora incidunt suscipit eum debitis amet voluptatum. Amet sapiente adipisci enim corporis architecto dicta non repellendus, quia dolor quisquam, reiciendis harum.',
  },
];

export default function Announcement() {
  return (
    <>
      <Stack
        direction={'column'}
        bgcolor='white'
        my={{ xs: '40px', md: '0' }}
        p={{ xs: '20px 20px 20px 20px', lg: '20px 30px 20px 30px' }}
        width={{ xs: '100%', lg: '75%' }}
        textAlign={{ xs: 'center', lg: 'left' }}
        alignItems={{ xs: 'center', lg: 'stretch' }}
        sx={{
          borderRadius: '10px',
        }}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{
            mb: 3,
          }}
        >
          <Stack direction={'column'} alignItems={'flex-start'}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#505050ff',
              }}
            >
              Announcemnts
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                color: '#a1a1a1',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Button>All</Button>
        </Stack>

        {data.map((obj) => (
          <Stack direction={'row'} sx={{ mb: 3 }} alignItems={'center'}>
            <Stack
              direction={'row'}
              width={{ xs: '35%', lg: '20%' }}
              alignItems={'center'}
            >
              <Avatar alt={obj.name} src={obj.imgUrl} sx={{ mr: 1 }} />
              <Stack direction={'column'}>
                <Typography>{obj.name}</Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#a1a1a1',
                  }}
                >
                  {obj.course}
                </Typography>
              </Stack>
            </Stack>
            <Divider orientation='vertical' flexItem sx={{ mx: 2 }} />
            <Typography
              width={{ xs: '65%', lg: '80%' }}
              variant='body1'
              sx={{ color: '#626060ff' }}
            >
              {obj.content}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
