import React from 'react';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
    return (
        <Card className=' w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover' src='https://mylittlekech.com/wp-content/uploads/2019/11/restaurant-dar-justo-a-marrakech.jpg' alt='' />
                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={true ? "success" : "error"}
                    label={true ? "Open" : "Closed"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className="space-y-1">
                    <p className="font-semibold text-lg">McDonalds</p>
                    <p className='text-gray-500 text-sm'>
                        I'm lovin it
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true? <FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>

                </div>
            </div>
        </Card>
    );
}

export default RestaurantCard;
