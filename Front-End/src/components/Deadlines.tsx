import { Button, Divider, Stack, Typography } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react';
const data = [
  {
    title: 'Unit 2 Quiz',
    course: 'Math 101',
    topic: 'Unit 2 Mothion and Forces',
    due: '20 Dec 2017 - 09:00 PM',
    icon: <HourglassBottomIcon sx={{ color: '#60b8c3ff', fontSize: '35px' }} />,
    btn: (
      <Button
        variant='outlined'
        fullWidth
        sx={{
          color: '#60b8c3ff',
          fontWeight: 600,
          border: '2px solid #60b8c3ff',
        }}
      >
        Start Quiz
      </Button>
    ),
  },
  {
    title: 'Unit 2 Quiz',
    course: 'Math 101',
    topic: 'Unit 2 Mothion and Forces',
    due: '20 Dec 2017 - 09:00 PM',
    icon: <AssignmentIcon sx={{ color: '#60b8c3ff', fontSize: '35px' }} />,
    btn: (
      <Button
        fullWidth
        variant='outlined'
        sx={{
          color: '#60b8c3ff',
          fontWeight: 600,
          border: '2px solid #60b8c3ff',
        }}
      >
        Solve Assinment
      </Button>
    ),
  },
];

export default function Deadlines() {
  return (
    <>
      <Stack
        direction={'column'}
        bgcolor='white'
        my={{ xs: '40px', md: '0' }}
        p={{ xs: '20px 10px 20px 10px', lg: '20px 20px 20px 20px' }}
        width={{ xs: '100%', lg: '24%' }}
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
              What's Due
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

        {data.map((obj, index) => (
          <>
            <Stack sx={{ mb: 2, my: 2, gap: 1 }} alignItems={'flex-start'}>
              <Stack
                direction='row'
                sx={{ mb: 1, gap: 1 }}
                alignItems={'center'}
              >
                {obj.icon}
                <Typography>{obj.title}</Typography>
              </Stack>
              <Typography sx={{ color: '#919191ff' }}>
                Course: {obj.course}
              </Typography>
              <Typography sx={{ color: '#919191ff' }}>
                Topic: {obj.topic}
              </Typography>
              <Typography sx={{ color: '#919191ff' }}>
                Due To: {obj.due}
              </Typography>
              {obj.btn}
            </Stack>
            {index !== data.length - 1 && <Divider sx={{ my: 2 }} />}
          </>
        ))}
      </Stack>
    </>
  );
}
