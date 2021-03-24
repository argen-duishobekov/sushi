import {Order} from './components/Order'
import './App.css';
import picOne from './1.jpg'
import picTwo from './2.jpg'
import picThree from './3.jpg'
import picFour from './4.jpg'


function App() {
  const data = [
    {
      img: picOne,
      title:"УНАГИ УРАМАКИ",
      text:"угорь,авокадо,сливочный сыр,огурец,соус унаги,кунжут",
      price: "1900,00 ТГ",
      pieces: "8 штук",
      calorie:"Калорийность Ккал:  298",
      minus: "-",
      in: "1",
      plus: "+",
      add: "Добавить корзину",
      id: 1
    },
    {
      img: picTwo,
      title:"МАДРИТ РОЛЛ",
      text:"Лосось,авокадо,спайси соус,перец чили,икра тобикою.",
      price:"1100,00 ТГ",
      pieces:"8 штук",
      calorie:"Калорийность Ккал: 275",
      minus: "-",
      in: "1",
      plus: "+",
      add: "Добавить корзину",  
      id: 2
    },
    {
      img: picThree,
      title:"ТЕПЛАЯ КРЕВЕТКА С МОЦЕРАЛЛОЙ",
      text:"Теплый ролл-Креветка,тамаго,огурец,сливочный сыр,икра тобико,сыр моцарелла.",
      price:"1700,00 ТГ",
      pieces:"8 штук",
      calorie:"Калорийность Ккал: 257",
      minus: "-",
      in: "1",
      plus: "+",
      add: "Добавить корзину",
      id: 3
    },
    {
      img: picFour,
      title:"ФРЕШ РОЛЛ С БАКЛАЖАНОМ",
      text:"Рисовая бумага,лист салата,баклажан в чесносном соусе,помидор",
      price:"550,00 ТГ",
      pieces:"6 штук",
      calorie:"Калорийность Ккал: 235",
      minus: "-",
      in: "1",
      plus: "+",
      add: "Добавить корзину",
      id: 4

    }
  ]
  return (
    <div className="App">
      {
        data.map((el,id) => {
          return <Order data={el} img={el.img} key={id} />
        })
      }
    </div>
  );
}

export default App;
