import styled from "styled-components";

export const ImgContainer = styled.div`
 width : 100%;
 height : 400px;
 position: relative;
 background-image: url(${(props)=> props.data});
 background-repeat : no-repeat;
 background-size: 100% 100%;
 transition: background-image 1s ease-out;
 font-family: 'Source Sans Pro', sans-serif;
 background-position: center;
 @media (max-width: 768px){
  background-size: cover; 
  height : 350px;
 };
 @media (max-width: 767px){
  background-size: cover; 
 };
`
export const AlignCentre = styled.div`
  text-align: center;
  width : 330px;
   @media (max-width: 768px){
   width: 200px;
   align-self: center;
   margin-top: 20px;
   };
   @media (max-width: 768px){
    flex: 1;
    align-self: center;
    margin-top: 30px;
   };
`
export const Heading = styled.div`
font-size: 50px;
margin-bottom: 10px;
font-weight: 600;
@media (max-width: 768px){
  font-size: 28px;
  align-self: center;
  };

@media (max-width: 767px){
 font-size: 17px;
 align-self: center;
 }
`
export const SubHeading = styled.div`
font-size: ${(props)=> props.fontSize};
font-weight: 600;
margin-bottom: 10px;
letter-spacing: ${(props)=> props.Spacing ? props.Spacing :''};

@media (max-width: 768px){
  font-size: ${(props)=> props.mbFontSize ? props.mbFontSize : '13px'};
  }
`
export const Button = styled.button`
  width : 260px;
  height: 190px;
  letter-spacing: 2px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.color} ;
  color: white;
  opacity: 0.6;
  font-size: 30px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
`
export const Flex = styled.div`
 display: flex;
 max-width: 660px;
 margin: 45px auto;
 position: relative;
 justify-content: center;
 align-items: center;
 @media (max-width: 768px){
  width : 80%;
  }
`
export const ButtonContainer = styled.div`
display: flex;
gap: 20px;
justify-content: center;
position : relative;
@media (max-width: 1024px){
 padding: 0 20px;
};
@media (max-width: 768px){
  flex-direction: column;
  align-items : center;

}

`
export const SearchIcon = styled.img`
 position: absolute;
 left: ${(props) => props.left? props.left : ''};
 right: ${(props)=> props.right? props.right : ''}
`

export const IDigitaliseImgContainer = styled.div`
margin-left :20px;
padding-top: 20px;
 
`
export const Input = styled.input`
 padding:5px 70px;
 height: 60px;
 width : 100%;
 border: 2px solid grey;
 border-radius: 30px;
 font-size: 20px;
 transition: border 0.7s ease-out;
 &:hover {
   border: 2px solid green;
 };
 &:focus {
   border: 2px solid orange;
   outline: none;
 };
 @media (max-width: 767px){
  font-size: 13px;
};
`

export const WeatherDataContainer = styled.div`
   position:absolute;
   display: flex;
   color:white;
   bottom:30px;
   gap:70px;
   left : 130px;
   @media (max-width: 768px){
     width : 65%;
     font-size: 10px;
     left 5px;
     gap: 20px;
   };
   @media (max-width: 767px){
     width : 90%;
     font-size: 10px;
     left 5px;
     gap: 20px;
   };

`

export const AlignEndInFlex = styled.div`
  align-self : center;
  margin-top : 45px;
  text-align: center;
`

export const VerticalLine = styled.div`
 border-left : 3px solid white;
 height : 80px;
 @media (max-width: 767px){
   border-left: 2px solid white;
   height: 50px;
};

`

