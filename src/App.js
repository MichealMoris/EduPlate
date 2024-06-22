import TeacherSlider from './TeachersSlider';
import heroImg from './assets/hero_img.jpg';
function App() {
  const phoneNumber = "01155225015";
  const message = "Hello Mr Mohamed Adel, This is a demo message...";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  return (
    <div className="container-fluid">
      <div className="row align-items-center mt-4">
        <div className="d-xxl-none d-xl-none d-lg-none d-md-none col-sm-12 d-sm-inline">
          <img src={heroImg} className='img-fluid' />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="fw-bolder"><span style={{ color: "#31A8D8" }}>تعبت من النضال؟</span><br />تعرف على معلمين رائعين يجعلون التعلم ممتعًا وفعالاً!</h1>
          <p className='lead'>التعلم لا ينبغي أن يكون عائقا. اعثر على معلمك المثالي اليوم.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='btn btn-warning p-2 action-btn'>
            <i class="bi bi-whatsapp me-1 ms-1"></i>
            الدردشة واتساب
          </a>
        </div>
        <div className="col-md-6 d-md-inline d-none">
          <img src={heroImg} className='img-fluid' />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-12'>
          <h3>معلمونا</h3>
        </div>
      </div>
      <TeacherSlider />
    </div>
  );
}

export default App;
