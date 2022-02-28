import React, { useEffect, useState } from 'react'
import { SearchIcon, ButtonContainer, ImgContainer, Input, Flex, Button, WeatherDataContainer, AlignCenterInFlex, VerticalLine, IDigitaliseImgContainer } from './style'
import data from '../../images/france.jpg'
import searchIcon from '../../images/search.png'
import location from '../../images/location.png'
import idigitalise from '../../images/idigitalise.png'

export default function DisplayWeather() {
    const [city, setCity] = useState('france')
    const [weatherDetail, setWeatherDetail] = useState(null)
    const [imgUrl, setImgUrl] = useState(data)

    let imgOfCountries = {
        'france': true,
        'tunisia': true,
        'japan': true,
        'qatar': true
    }

    let buttonColors = ['blue', 'deeppink', 'deepskyblue', 'darkorange']

    const getCountryImage = (country) => {
        if (country in imgOfCountries) {
            import(`../../images/${country}.jpg`).then((img) => setImgUrl(img.default))
        } else {
            import(`../../images/random.jpg`).then(img => setImgUrl(img.default))
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
            getCountryImage(city)
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
                    <div>
                        <h1>{weatherDetail.city.toLocaleUpperCase()}</h1>
                        <h1>{weatherDetail.temp} 	&#176;</h1>
                        <h2>{weatherDetail.description.toLocaleUpperCase()}</h2>
                    </div>
                    <AlignCenterInFlex>
                        <h2>Humidity</h2>
                        <h1>{weatherDetail.humidity}%</h1>
                    </AlignCenterInFlex>

                    <AlignCenterInFlex>
                        <VerticalLine />
                    </AlignCenterInFlex>

                    <AlignCenterInFlex>
                        <h2>Wind</h2>
                        <h1>{weatherDetail.wind.speed} K/M</h1>
                    </AlignCenterInFlex>
                </WeatherDataContainer>
            </ImgContainer>
            <Flex>
                <SearchIcon left='10px' src={searchIcon} alt='' />
                <Input type='search' placeholder='Search Location' onChange={(e) => delayFunction(handleChange, 700)(e)} />
                <SearchIcon right='10px' src={location} alt='' />
            </Flex>
            <ButtonContainer>
                {Object.keys(imgOfCountries).map((country, i) => {
                    return <Button key={i} color={buttonColors[i]} onClick={() => setCity(country)}>{country.toLocaleUpperCase()}</Button>
                })}
            </ButtonContainer>
        </>
    )
}