import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://wallpapercave.com/wp/wp3703291.jpg" />
      </Background>
      <ImageTitle>
        <img src="http://pngimg.com/uploads/ironman/ironman_PNG79.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src= "/images/play-icon-black.png"/>
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src= "/images/play-icon-white.png"/>
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
            <img src= "/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        aditya singh coding at 11

      </SubTitle>
      <Description>

        usual thing undefined
      </Description>

    </Container>
  )
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  
  img {
      width: 100%;
      height: 100%;
      object-fit: contain;
  }

`
const Controls = styled.div`
    display: flex;
    align-items: center;


`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  padding: 0px 24px;
  margin-right: 22px;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;


  &:hover {
      background: rgb(198, 198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249,249,249);
  color: rgb(249,249,249);
  text-transform: uppercase;

`

const AddButton = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;

  span{
    font-size: 30px;
    margin-top: -5px;

  }
  
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
    
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249)
  font-size: 15px;
    min-height: 20px;
    min-top: 26px;
`

const Description = styled.div`
  

`