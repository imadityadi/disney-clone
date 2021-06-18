import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src = "https://c4.wallpaperflare.com/wallpaper/661/59/791/black-widow-avengers-age-of-ultron-marvel-cinematic-universe-artwork-wallpaper-preview.jpg" />
                </Wrap>
                <Wrap>
                    <img src = "https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
                </Wrap>
                <Wrap>
                    <img src = "https://m.media-amazon.com/images/M/MV5BNGJhZjdiZGQtYTAwMC00ZWFjLTgwODUtNjE2ZDY4Y2ZiYzJiXkEyXkFqcGdeQXVyODQwMDcwNDY@._V1_.jpg" />
                </Wrap>
                <Wrap>
                    <img src = "https://reelifereviews.files.wordpress.com/2021/03/wandavision-1.jpeg?w=1024" />
                </Wrap>
                <Wrap>
                    <img src = "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Falcon-Winter-Soldier-Poster-.jpg?q=50&fit=crop&w=767&h=450&dpr=1.5" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.ytimg.com/vi/i_IcWXsaxkM/maxresdefault.jpg" />
                </Wrap>
                <Wrap>
                    <img src = "https://i.pinimg.com/originals/77/d6/48/77d648bb7ea7ca11495d3fc5fab23412.jpg" />
                </Wrap>
                <Wrap>
                    <img src = "https://bingeddata.s3.amazonaws.com/uploads/2021/03/New-Disney-Nat-Geo-Show-Earth-Moods-Will-Lull-You-Into-Calming-Tranquility-1.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    }

`