import React, { useState } from "react";
import { Grid, Divider, Typography, FormControl ,RadioGroup, FormControlLabel, Radio } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const categories=[
    "Pizza","Sushi", "Burgers"  ,"Chinese Food" ,"Italian"]
const foodTypes = [
        { label: "All", value: "all" },
        { label: "Vegetarian only", value: "vegetarian" },
        { label: "Non-Vegetarian", value: "non_vegetarian" },
        { label: "Seasonal", value: "seasonal" },
    ];
const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
    };
    
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className="text-gray-500 py-2 mt-10"> Home / Morocco / Moroccan fast food / 3 </h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src="https://api.madein.city/img/events/3/1640/641daa75d61b0017030377.jpg"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <img
                                        className='w-full h-[20vh] lg:h-[40vh] object-cover'
                                        src="https://media-cdn.tripadvisor.com/media/photo-s/29/47/3b/2a/le-douar.jpg"
                                        alt=""
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <img
                                        className='w-full h-[20vh] lg:h-[40vh] object-cover'
                                        src="https://media-cdn.tripadvisor.com/media/photo-p/2a/6e/d3/7c/chouf-l-or.jpg"
                                        alt=""
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <img
                                        className='w-full h-[20vh] lg:h-[40vh] object-cover'
                                        src="https://media-cdn.tripadvisor.com/media/photo-s/18/1c/1a/78/la-pergola.jpg"
                                        alt=""
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Le Douar</h1>
                    <p className="text-gray-500 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ex deleniti odio impedit veritatis, reiciendis architecto itaque vitae quos officia iure sint commodi et officiis corporis excepturi, delectus ad aut.</p>
                    <div className="space-y-3 mt-3">
                    </div>
                    <p className="text-gray-500 flex items-center gap-3"> 
                        <LocationOnIcon />
                        <span> Avenue De La Menara, Marrakech 40000 Maroc</span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3"> 
                        <CalendarTodayIcon />
                        <span> Mon-Sun : 9:00 PM (Today) </span>
                    </p>
                </div>
            </section>
            <Divider />
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div> 
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5" component=
                                 {"fieldset"}>
                               <RadioGroup onChange={handleFilter} name="Food Type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel 
                                        key={item.value} 
                                        value={item.value}
                                        control={<Radio />} 
                                        label={item.label} />
                                    ))}
                                </RadioGroup>
    </FormControl>          <FormControl/>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10 ">Menu</div>
            </section>
        </div>
    )
}

export default RestaurantDetails;
