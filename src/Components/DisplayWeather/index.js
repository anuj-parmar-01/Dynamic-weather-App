import React, { useEffect, useState } from 'react'
import { AlignCentre, SearchIcon, SubHeading, Heading, ButtonContainer, ImgContainer, Input, Flex, Button, WeatherDataContainer, AlignEndInFlex, VerticalLine, IDigitaliseImgContainer } from './style'
import data from '../../images/france.jpg'
import searchIcon from '../../images/search.png'
import location from '../../images/location.png'
import idigitalise from '../../images/idigitalise.png'

export default function DisplayWeather() {
    const [city, setCity] = useState('france')
    const [weatherDetail, setWeatherDetail] = useState(null)
    const [imgUrl, setImgUrl] = useState(data)

    let imgOfCountries = {
        'france': 'france',
        'tunisia': 'north africa',
        'qatar': 'qatar',
        'japan': 'japan'
    }

    let buttonColors = ['rgb(7 6 228)', 'rgb(24 161 156)', 'rgb(207 39 145)', 'rgb(241 60 1 / 93%)']

    const getCountryImage = (country) => {
        if (country in imgOfCountries) {
           import(`../../images/${country}.jpg`).then((img) => setImgUrl(img.default))
          
        } else {
           import(`../../images/random.jpg`).then((img) => setImgUrl(img.default))
        }
        
    }

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    // delay function to cancel multiple API requests with every key stroke
    const delayFunction = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...args)
            }, delay)
        }
    }

    const fetchCityWeather = async (city) => {
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.toLocaleUpperCase()}&units=metric&appid=b543da68018a588fb6d38cc7890d0310`)
        let res = await weather.json()
        return res
    }

    useEffect(() => {
        fetchCityWeather(city).then(res => {
            let weatherDataToBeDisplayed = {};
            weatherDataToBeDisplayed.description = res.weather[0].description;
            weatherDataToBeDisplayed.wind = res.wind;
            weatherDataToBeDisplayed.humidity = res.main.humidity
            weatherDataToBeDisplayed.city = res.name
            weatherDataToBeDisplayed.temp = res.main.temp
            getCountryImage(city);
            setWeatherDetail(weatherDataToBeDisplayed)
        }).catch(err => console.log(err))
    }, [city])

    if (!weatherDetail) return null
    return (
        <>
            <ImgContainer data={imgUrl} >
                <IDigitaliseImgContainer>
                    <img src={idigitalise} alt='' />
                </IDigitaliseImgContainer>
                <WeatherDataContainer>
                    <AlignCentre>
                        <Heading>{weatherDetail.city.toLocaleUpperCase()}</Heading>
                        <Heading>{weatherDetail.temp} &#176;</Heading>
                        <SubHeading fontSize='18px' Spacing='3px' mbFontSize ='9px'>{weatherDetail.description.toLocaleUpperCase()}</SubHeading>
                    </AlignCentre>
                    <AlignEndInFlex>
                        <SubHeading fontSize='20px'>HUMIDITY</SubHeading>
                        <SubHeading fontSize='35px' mbFontSize='18px'>{weatherDetail.humidity}%</SubHeading>
                    </AlignEndInFlex>

                    <AlignEndInFlex>
                        <VerticalLine />
                    </AlignEndInFlex>

                    <AlignEndInFlex>
                        <SubHeading fontSize='20px'>WIND</SubHeading>
                        <SubHeading fontSize='35px' mbFontSize='18px'>{weatherDetail.wind.speed} K/M</SubHeading>
                    </AlignEndInFlex>
                </WeatherDataContainer>
            </ImgContainer>
            <Flex>
                <SearchIcon left='20px' src={searchIcon} alt='' />
                <Input type='search' placeholder='Search Location' onChange={(e) => delayFunction(handleChange, 700)(e)} />
                <SearchIcon right='20px' src={location} alt='' />
            </Flex>
            <ButtonContainer>
                {Object.keys(imgOfCountries).map((country, i) => {
                    return <Button key={i} color={buttonColors[i]} onClick={() => setCity(country)}>{imgOfCountries[country].toLocaleUpperCase()}</Button>
                })}
            </ButtonContainer>
        </>
    )
}