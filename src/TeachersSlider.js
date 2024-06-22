import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './CustomArrows';

const TeacherSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        {
            image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
            name: "جون سميث",
            subjects: [
              "مدرس رياضيات",
              "Physics"
            ],
            bg: "#fdcc7aff",
          },
          {
            image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
            name: "إميلي جونسون",
            subjects: [
              "معلمة لغة انجليزية",
              "Literature"
            ],
            bg: "#ffb7a7ff",
          },
          {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg",
            name: "مايكل ويليامز",
            subjects: [
              "معلم تاريخ",
              "Social Studies"
            ],
            bg: "#cbcaeeff",
          },
          {
            image: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
            name: "إيما براون",
            subjects: [
              "معلمة الأحياء",
              "Chemistry"
            ],
            bg: "#d3dedfff",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
            name: "روبرت لي",
            subjects: [
              "معلم علوم الحاسوب",
              "Programming"
            ],
            bg: "#befcb6",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThX5LDybDwHB6EW2QtuHpUJAtvqTHHr0V7yw&s",
            name: "صوفيا ديفيس",
            subjects: [
              "معلمة فنون",
              "Drawing"
            ],
            bg: "#fdcc7aff",
          },
          {
            image: "https://kuhnmediator.com/wp-content/uploads/2017/12/cropped-1ac4d606-f539-425d-8653-5eee39ba5d131.jpeg?w=200",
            name: "وليام روبنسون",
            subjects: [
              "معلم موسيقي",
              "Piano"
            ],
            bg: "#ffb7a7ff",
          },
          {
            image: "https://www.jamsadr.com/images/neutrals/popke-lita-250x300-web.jpg",
            name: "أوليفيا مارتينيز",
            subjects: [
              "معلمة لغات اجنبية",
              "Spanish"
            ],
            bg: "#cbcaeeff",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCC1LqCyIHH9iVOv6UMsXirX0Wt1gX8BuKCA&s",
            name: "جيمس جارسيا",
            subjects: [
              "معلم التربية الرياضية",
              "Sports"
            ],
            bg: "#d3dedfff",
          },
          {
            image: "https://cdn.blrankings.com/best-lawyers/lawyer-images/belinda-hanson-34791?t=2022090219485622",
            name: "افا لوبيز",
            subjects: [
              "معلمة الجغرافيا",
              "World History"
            ],
            bg: "#befcb6",
          },
    ];

    return (
        <div className="row mt-1 px-3">
            <div className='col-12 bg-white p-1' style={{borderRadius: 20+"px"}}>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className="p-2">
                            <div className="card custom-card h-100" style={{ background: card.bg }}>
                                <div className="card-body">
                                    <img src={card.image} className="me-2 img-fluid" alt={card.name} style={{width:10+"rem", height:10+"rem", objectFit: "cover", borderRadius: 50+"%"}}/>
                                    <h5 className="card-title mt-2" style={{marginBottom:0+"px"}}>{card.name}</h5>
                                    <h6 className='text-white' style={{marginTop:0+"px"}}>{card.subjects[0]}</h6>
                                    <p className="card-text">العميل مهم جدًا، العميل سيتبعه العميل. لأن قوس هندريريت ليس بوابة الأسد. في الواقع، هو مستثمر عقاري. حتى الحامل، ديام هذا العنصر الحامل، وادي إيروس سيم نفسه، والبلاسرات يريد إثارة ذلك لا.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TeacherSlider;