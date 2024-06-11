import { tours } from "../data";
import { Title } from "./Title";
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title firstTitle="featured" secondTitle="tours" />
        <div className="section-center featured-center">
          {
            tours.map((tour) => {
              return (
                <article className="tour-card" key={tour.id}>
                  <div className="tour-img-container">
                    <img src={tour.img} className="tour-img" alt="" />
                    <p className="tour-date">{tour.date}</p>
                  </div>
                  <div className="tour-info">
                    <div className="tour-title">
                      <h4>{tour.title}</h4>
                    </div>
                    <p>{tour.text}</p>
                    <div className="tour-footer">
                      <p>
                        <span><i className="fas fa-map"></i></span>
                        {tour.country}
                      </p>
                      <p>from ${tour.price}</p>
                    </div>
                  </div>
                </article>
              );
            })
          }
        </div>
      </section>
    </>
  );
}

export default Tours
