import {
    Box,
    // Button,
    Card,
    // CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';
import React from 'react';
// import background from './img/background.png';
import basketball from '../HomePageComponent/img/66a35bcb-258b-43c2-a1cc-5fa9d6d987bf.jpg';
import baseball from '../HomePageComponent/img/Baseball Field.jpg';
import badminton from '../HomePageComponent/img/Badminton.jpg';
import football from '../HomePageComponent/img/What Is A Fullback In Soccer_ What You Should Know In 2022.jpg';
import '../HomePageComponent/css/HomePage.css';
import { useNavigate } from 'react-router-dom';

function Item(props) {
    const navigate = useNavigate();

    return (
        <div className='item'>
            <Grid container spacing={2} sx={{ marginLeft: 10, marginRight: 10 }}>
                <Grid item xs={6}>
                    <Card sx={{ display: 'flex' }}>
                        <Box
                            className='bg-dark text-light rounded w-50 p-3'
                            sx={{ display: 'flex', flexDirection: 'column' }}
                            textAlign={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <CardContent>
                                <Typography className='text' component='div' variant='h3'>
                                    Basketball
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    Choose
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component='img'
                            sx={{ width: 500, height: 300 }}
                            image={basketball}
                            alt='basketball'
                        />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ display: 'flex' }} textAlign={'right'}>
                        <CardMedia
                            component='img'
                            sx={{ width: 250, height: 300 }}
                            image={baseball}
                            alt='baseball'
                        />
                        <Box
                            className='bg-dark text-light rounded w-75 p-3'
                            sx={{ display: 'flex', flexDirection: 'column' }}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <CardContent>
                                <Typography className='text' component='div' variant='h3'>
                                    Baseball
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    Choosse
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ display: 'flex' }}>
                        <Box
                            className='bg-dark text-light rounded w-50 p-3'
                            sx={{ display: 'flex', flexDirection: 'column' }}
                            textAlign={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <CardContent>
                                <Typography className='text' component='div' variant='h3'>
                                    Badminton
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    Choose
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component='img'
                            sx={{ width: 600, height: 300 }}
                            image={badminton}
                            alt='badminton'
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component='img'
                            sx={{ width: 500, height: 300 }}
                            image={football}
                            alt='football'
                        />
                        <Box
                            className='bg-dark text-light rounded w-100 p-3'
                            sx={{ display: 'flex', flexDirection: 'column' }}
                            textAlign={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <CardContent>
                                <Typography className='text' component='div' variant='h3'>
                                    Football
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    Choose
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Item;
