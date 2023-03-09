// import {useState, useRef} from 'react';
// import axios from 'axios';
import './App.css';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fontSize } from '@mui/system';
// import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'center' as const,
    },
    title: {
      display: true,
      text: 'Keyword Analysis'
    },
  },
};

const labels: Array<string> = [];

const getLabels = ():void => {
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;

  for (let i = 2019; i <= yearNow; i += 1) {
    for(let j=1 ; j<=12 ; j++){
      if(j === monthNow+1 && i === yearNow) break;
      labels.push(`${i}-${j}`);
    }
  }
  console.log(labels);
}
getLabels();

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: 1,
  width: '60%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '60%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
// let shownLabels:string[] = []

function App() {
  // const [keyword, setKeyword] = useState<string>('Christmas');
  // const [open, setOpen] = useState<boolean>(false);
  // const kInput = useRef<any>(null);
  const [topTrends, setTopTrends] = React.useState<string[]>(['Jewelry', 'Clothing', 'Craft Supplies', 'Shoes'])
  const [rValue, setRValue] = React.useState<number[]>([90, 100]);
  // const [shownLabels, setShownLabels] = React.useState<string[] | null>([])
  const handleRangeChange = (event: Event, newValue: any, activeThumb: number) => {
    setRValue(newValue);
  };
  // const handleKeyword = () => {
  //   setOpen(true)
  // }
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // if(kInput.current){
      console.log(event.target.value)
    //   setKeyword(kInput.current.value)
    //   kInput.current.value = null;
    // }
  }

  // setShownLabels(labels.filter((label:String, index:number)=> (index/labels.length*100) <  rValue[1] && (index/labels.length*100)> rValue[0]))



// shownLabels = labels.filter((label:String, index:number)=> (index/labels.length*100) <  rValue[1] && (index/labels.length*100)> rValue[0])

  // console.log({ShownLabels:ShownLabels})
const data = {
  labels,
  datasets: [
    {
      label: 'Google Web Search',
      data: labels?.map(() => Math.random() * 100),   // note: this is a random value. Here we will fetch the data from the google API that I need depents on the date which 'labels' Array
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Google Shopping Search',
      data: labels?.map(() => Math.random() * 100),   // note: this is a random value. Here we will fetch the data from the Etsy API that I need depents on the date which 'labels' Array
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Drop Saif
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            onChange={handleInput}
              placeholder="Enter keyword or product title"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="main-container">
    <p style={{fontSize: '14px'}}>Top Trends: <p>{topTrends.map((ele => ele))}</p></p>
    <Line options={options} data={data} />
    <Slider
    color='secondary'
        value={rValue}
        onChange={handleRangeChange}
      />
    </div>
    </>
  );
}

export default App;