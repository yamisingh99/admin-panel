import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Imgcart from '../assets/cardimages/Imgcart.png';
import Img2 from '../assets/cardimages/Img2.png';
import Img3 from '../assets/cardimages/Img3.png';
import Img4 from '../assets/cardimages/Img4.png';
import Zero from '../assets/cardimages/Zero.png';
import one from '../assets/cardimages/one.png';
import two from '../assets/cardimages/two.png';
import three from '../assets/cardimages/three.png';
import four from '../assets/cardimages/four.png';
import five from '../assets/cardimages/five.png';
import six from '../assets/cardimages/six.png';
import seven from '../assets/cardimages/seven.png';
import eight from '../assets/cardimages/eight.png';
import nine from '../assets/cardimages/nine.png';
import Bimg from '../assets/cardimages/Bimg.png';
import Simg from '../assets/cardimages/Simg.png';



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const StyledCard = styled(Card)`
  display: flex;
  width: 300px; /* Total width including image and text */
  height: 60px; /* Total height */
    margin: 6px 6px 6px 6px;
    border-radius: 10px 10px 10px 10px;
    background-color: #87CEFA;

`;

const CardContentContainer = styled.div`
  flex: 3; /* This will make the text content take 3/4 of the width */
  padding: 10px;

`;

const CardImage = styled(CardMedia)`
  flex: 1; /* This will make the image take 1/4 of the width */
`;

const MediaControlCard = ({ imageUrl, heading1, heading2 }) => {
  return (
    <StyledCard>
      <CardImage
        component="img"
        image={imageUrl}
        alt="Card Image"
      />
      <CardContentContainer>
        <Typography variant="subtitle1">
          {heading1}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {heading2}
        </Typography>
      </CardContentContainer>
    </StyledCard>
  );
};

export default function App() {
  // Example of how to use MediaControlCard
  return (
    <Container>
    <MediaControlCard
        imageUrl={Imgcart}
        heading1="Joint Red"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={Img2}
        heading1="Joint Voilet"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={Img3}
        heading1="Joint Green"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={Img4}
        heading1="Total Amount"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={Zero}
        heading1="Joint V0"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={one}
        heading1="Joint 1"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={two}
        heading1="Joint 2"
        heading2=""
      />
      <MediaControlCard
        imageUrl={three}
        heading1="Joint 3"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={four}
        heading1="Joint 4"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={five}
        heading1="Joint 5"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={six}
        heading1="Joint 6"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={seven}
        heading1="Joint 7"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={eight}
        heading1="Joint 8"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={nine}
        heading1="Joint 9"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={Bimg}
        heading1="Joint Big"
        heading2="0"
      />
      <MediaControlCard
        imageUrl={Simg}
        heading1="Joint small"
        heading2="0"
      />
    </Container>
  );
}
