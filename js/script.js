import check from "../public/assets/check.svg";
import star from "../public/assets/star.svg"; 
import sushi12 from "../public/assets/sushi-12.png";
import sushi11 from "../public/assets/sushi-11.png";
import sushi10 from "../public/assets/sushi-10.png";


import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
    once: false,
});

// the additional code you saw in the video will not be needed :)
const trendingSushis = [
  'Make Sushi',
  'Nigiri Sushi',
  'Oshizushi',
  'Temaki Sushi',
  'Uramaki Sushi',
  'Inari Sushi'
];