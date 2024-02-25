import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Imgcart1 from '../assets/cardimages/Imgcart1.png';
import Imgcart2 from '../assets/cardimages/Imgcart2.png';
import Imgcart3 from '../assets/cardimages/Imgcart3.png';
import Imgcart4 from '../assets/cardimages/Imgcart4.png';

export default function MediaControlCard() {
  const imgWidth = 100; // Assuming a constant width for images

  // Array of image paths for each card
  const images = [Imgcart1,  Imgcart3,Imgcart4, Imgcart2 ];

  return (
    <Container>
      {images.map((image, index) => (
        <StyledCard key={index} imgWidth={imgWidth}>
          <CardContentContainer>
            <CardMedia
              component="img"
              sx={{ width: 'auto', height: 'auto' }}
              image={image} // Use the corresponding image for each card
              alt={`Card ${index + 1}`}
            />
            <CardContentWrapper>
              <Typography component="div" variant="h8">
                Title {index + 1}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Subtitle {index + 1}
              </Typography>
            </CardContentWrapper>
          </CardContentContainer>
        </StyledCard>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #87CEFA;
  padding: 1rem;
`;

const StyledCard = styled(Card)`
  width: ${({ imgWidth }) => imgWidth + 200}px; // Set width equal to image width plus some extra for text
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

const CardContentContainer = styled.div`
  display: flex;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0rem;
`;
