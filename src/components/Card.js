import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Imgcart from '../assets/cardimages/Imgcart.png';

export default function MediaControlCard() {
  // Get the image width
  const img = new Image();
  img.src = Imgcart;
  const imgWidth = img.width;

  return (
    <Container>
      <StyledCard imgWidth={imgWidth}>
        <CardContentContainer>
          <CardMedia
            component="img"
            sx={{ width: 'auto', height: 'auto' }}
            image={Imgcart}
            alt="Live from space album cover"
          />
          <CardContentWrapper>
            <Typography component="div" variant="h8">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContentWrapper>
        </CardContentContainer>
      </StyledCard>
      <StyledCard imgWidth={imgWidth}>
        <CardContentContainer>
          <CardMedia
            component="img"
            sx={{ width: 'auto', height: 'auto' }}
            image={Imgcart}
            alt="Live from space album cover"
          />
          <CardContentWrapper>
            <Typography component="div" variant="h8">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContentWrapper>
        </CardContentContainer>
      </StyledCard>
      <StyledCard imgWidth={imgWidth}>
        <CardContentContainer>
          <CardMedia
            component="img"
            sx={{ width: 'auto', height: 'auto' }}
            image={Imgcart}
            alt="Live from space album cover"
          />
          <CardContentWrapper>
            <Typography component="div" variant="h8">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContentWrapper>
        </CardContentContainer>
      </StyledCard>
      <StyledCard imgWidth={imgWidth}>
        <CardContentContainer>
          <CardMedia
            component="img"
            sx={{ width: 'auto', height: 'auto' }}
            image={Imgcart}
            alt="Live from space album cover"
          />
          <CardContentWrapper>
            <Typography component="div" variant="h8">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContentWrapper>
        </CardContentContainer>
      </StyledCard>
     
      
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
