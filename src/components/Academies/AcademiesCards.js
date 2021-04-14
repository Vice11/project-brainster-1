import React from "react";
// import { Card } from "react-bootstrap";
import "./Academies.css";

const AcademiesCards = ({ title, image }) => {
  return (
    // <Card className="card text-white">
    //   <Card.Img src={image} className="" />
    //   <Card.ImgOverlay>
    //     <Card.Title className='h2-style' >{title}</Card.Title>
    //     <Card.Text className='text'>{content}</Card.Text>
    //   </Card.ImgOverlay>
    // </Card>

    // 2

    <a href="" className="link-academy">
      <div className="bg-card bg-academy">
        <img src={image} className="card-img-top" />
      </div>
      <div className="heading-card">
        <h3 className="h3-style">{title}</h3>
      </div>
      <div className="content-card">
        <div className="content-tags">
          {/* ICON */}
          <p>Слободни места: 4</p>
        </div>
        <div className="content-tags">
          {/* ICON */}
          <p>Уписи до: 26.08.2021</p>
        </div>
        <div className="content-tags">
          {/* ICON */}
          <p>Стани дизајнер за 7 месеци</p>
        </div>
        <div className="content-tags">
          {/* ICON */}
          <p>Партнери за вработување: 5</p>
        </div>
        <aside>
          <p>Повеќе</p>
          {/* ICON */}
        </aside>
      </div>
    </a>
  );
};

export default AcademiesCards;
