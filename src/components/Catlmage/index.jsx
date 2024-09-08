import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";



function Catlmage (){

const [catImage, setCatimage] = useState("");
const [loading, setLoading] = useState(true);

const fetchCatImage = async() => {
    try {
        setLoading(true);
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        setCatimage(response.data[0].url);
        setLoading(false);
    } catch (error) {
        console.error('Помилка при завантаженні зображення:', error);
        setLoading(false);
    }
};

// Загружаем случайное изображение при монтировании компонента

useEffect(() => {
    fetchCatImage();
}, []);

// Обработчик для кнопки обновления изображения

const handleNewImage = () => {
    fetchCatImage();
  };

return (
<div className={styles.catContain}>
<h1 >Котики</h1>
{loading ? (
    <p> Завантаження ...</p>
) : (
<img src={catImage} alt="Випадковий вибір котів" className={styles.cat_img}/>
)
}
<button onClick={handleNewImage} className={styles.randomCatBtn}>Змінити зображення</button>

</div>
) 
}

export default Catlmage;




