import React, { useState } from "react";
import "./FoodImg.css";
import img1 from "../../asset/img1.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/img3.png";
import img4 from "../../asset/img4.png";
import img5 from "../../asset/img5.png";
import img6 from "../../asset/img6.png";
import Nav from "../NavBar/Nav";

export default function FoodImg() {
  let cricleBg=document.getElementById('cricle-bg')
  let BtnBg=document.getElementById('orderBtn')
  let arrowBtn=document.getElementById('arrowBtn')
  let arrowBtnR=document.getElementById('arrowBtnR')
  let price=document.getElementById('price')
 
  const [plusValue, setplusValue] = useState(0);
  const [imgIndex, setimgIndex] = useState(0);
  const [targetImg, setTargetImg] = useState(img5);
   
  let FoodItemList = [
    { img: img1, Price: " $45", veg: false, class: "img1" ,id:1 },
    { img: img2, Price: "$35", veg: true, class: "img2",id:2 },
    { img: img3, Price: " $65", veg: false, class: "img3",id:3 },
    { img: img4, Price: " $35", veg: true, class: "img4" ,id:4},
    { img: img5, Price: "$95", veg: false, class: "img5",id:5 },
    { img: img1, Price: " $45", veg: true, class: "img6",id:6 },
    { img: img2, Price: "$35", veg: true, class: "img7" ,id:7},
    { img: img3, Price: " $65", veg: false, class: "img8",id:8 },
    { img: img4, Price: " $35", veg: true, class: "img9" ,id:9},
  ];
  
  const spinRight = () => {
    setplusValue(plusValue + 40);
    let value = plusValue;
    let spinBox = document.getElementById("imgholder");
    spinBox.style.transform = `rotate(${value}deg)`;

    
   
    for (let i = 0; i < FoodItemList.length; i++) {
      setimgIndex(imgIndex + 1);
      if (imgIndex <= FoodItemList.length) {
        if(imgIndex===FoodItemList.length)
        {
          setimgIndex(0)
        }
        if( FoodItemList[i].id===imgIndex)
        {
          console.log(FoodItemList[i].img)
          setTargetImg(FoodItemList[i].img)
        }
        if( FoodItemList[i].id===imgIndex & FoodItemList[i].veg===false  ){
          cricleBg.style.background='#FFEEDE'
          BtnBg.style.background="#FF922C"
          arrowBtn.style.background='#FF922C'
          arrowBtnR.style.background='#FF922C'
          price.style.color='#FF922C'
         
        }
        if( FoodItemList[i].id===imgIndex & FoodItemList[i].veg===true  ){
          cricleBg.style.background='#EAFFE2'
          BtnBg.style.background='#54BF29'
          arrowBtn.style.background='#54BF29'
          arrowBtnR.style.background='#54BF29'
          price.style.color='#54BF29'
        }
      }   
    }
  }
    const spinLeft = () => {
      setplusValue(plusValue - 30);
      let value = plusValue;
      let spinBox = document.getElementById("imgholder");
      spinBox.style.transform = `rotate(${value}deg)`;

      for (let i = 0; i < FoodItemList.length; i++) {
        setimgIndex(imgIndex + 1);
        if (imgIndex <= FoodItemList.length) {
          if(imgIndex===FoodItemList.length)
          {
            setimgIndex(0)
          }
          if( FoodItemList[i].id===imgIndex)
        {
          console.log(FoodItemList[i].img)
          setTargetImg(FoodItemList[i].img)
        }
          if( FoodItemList[i].id===imgIndex & FoodItemList[i].veg===false  ){
            cricleBg.style.background='#FFEEDE'
            BtnBg.style.background="#FF922C"
            arrowBtn.style.background='#FF922C'
            arrowBtnR.style.background='#FF922C'
            price.style.color='#FF922C'
           
          }
          if( FoodItemList[i].id===imgIndex & FoodItemList[i].veg===true  ){
            cricleBg.style.background='#EAFFE2'
            BtnBg.style.background='#54BF29'
            arrowBtn.style.background='#54BF29'
            arrowBtnR.style.background='#54BF29'
            price.style.color='#54BF29'
          }
          
       
        }
  
        
      }
    };

    return (
      <>
        <div className="content-holder">
          <section>
            <div className="nav-holder-section">
              <Nav />
            </div>
          </section>
          <div className="cricle" id="cricle-bg">
            <div className="img-holder" id="imgholder">
              {FoodItemList.map((x) => (
                <div className={x.class}>
                  <img src={x.img} />
                </div>
              ))}
            </div>
          </div>
          <div className="Main-target">
          <img src={targetImg}  id="imgId"/>
        </div>

          <div className="spin-left">
            <button onClick={spinLeft} id='arrowBtn'>⬇</button>
          </div>

          <div className="spin-right">
            <button onClick={spinRight}  id='arrowBtnR'>⬇</button>
          </div>

          <section>
            <div className="content-centex-holder">
              <div>
                <h2 className="price" id="price">$32</h2>
                <h2 className="food-name">
                  Green Goddess
                  <br /> Chicken Salad
                </h2>
                <p>
                  It is a non vegetarian salad which consists of the
                  <br />
                  green goddess dressing mixed with chicken
                  <br />, peppers, olives and celery.{" "}
                </p>

                <button className="order-button" id="orderBtn">ORDER NOW</button>

                <p className="Watch-Video">Watch the Video</p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };


{
  /* <div className="img2">
<img src={img2} />
</div>
<div className="img3">
<img src={img3} />
</div>
<div className="img4">
<img src={img4} />
</div>
<div className="img5">
<img src={img5} />
</div>  */
}
