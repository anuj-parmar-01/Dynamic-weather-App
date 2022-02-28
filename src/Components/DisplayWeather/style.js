import styled from "styled-components";

export const ImgContainer = styled.div`
 width : 100%;
 height : 500px;
 position: relative;
 background-image: url(${(props)=> props.data});
 background-repeat : no-repeat;
 background-size: 100% 100%;
 transition: background-image 1s ease-out;
 font-family: 'Source Sans Pro', sans-serif;
 @media (max-width: 767px){
  background-size: cover; 
 }
`
export const Button = styled.button`
  width : 140px;
  height: 120px;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => props.color} ;
  color: white;
  opacity: 0.6;
  font-size: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
`
export const Flex = styled.div`
 display: flex;
 max-width: 500px;
 margin: 45px auto;
 position: relative;
 justify-content: center;
 align-items: center;
`
export const ButtonContainer = styled.div`
display: flex;
gap: 30px;
justify-content: center;
position : relative;
@media (max-width: 767px){
  flex-direction: column;
  align-items : center;

}
`
export const SearchIcon = styled.img`
 height : 20px;
 position: absolute;
 left: ${(props) => props.left? props.left : ''};
 right: ${(props)=> props.right? props.right : ''}
`

export const IDigitaliseImgContainer = styled.div`
margin-left :10px;
padding-top: 20px;
 
`
export const Input = styled.input`
 padding:5px 40px;
 height: 50px;
 width : 100%;
 border: 2px solid grey;
 border-radius: 25px;
 font-size: 25px;
 transition: border 0.7s ease-out;
 &:hover {
   border: 2px solid green;
 };
 &:focus {
   border: 2px solid orange;
   outline: none;
 }
`

export const WeatherDataContainer = styled.div`
   position:absolute;
   display: flex;
   color:white;
   bottom:30px;
   gap:60px;
   left : 100px;
   @media (max-width: 767px){
     font-size: 10px;
     left 5px;
     gap: 20px;
   };

`

export const AlignCenterInFlex = styled.div`
  align-self : center;
`

export const VerticalLine = styled.div`
 border-left : 5px solid white;
 height : 100px;

`

