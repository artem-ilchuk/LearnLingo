import s from "./Achievements.module.css";

const Achievements = () => {
  return (
    <section className={s.achiv}>
      <div className="container">
        <div className={s.border}>
          <svg
            className={s.dash}
            width="1312"
            height="116"
            viewBox="0 0 1312 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="0.75"
              width="1310.5"
              height="114.5"
              rx="29.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="15 15"
            />
          </svg>

          <div className={s.block}>
            <p className={s.main_text}>32,000 +</p>
            <p className={s.add_text}>Experienced tutors</p>
          </div>
          <div className={s.block}>
            <p className={s.main_text}>300,000 +</p>
            <p className={s.add_text}>5-star tutor reviews</p>
          </div>
          <div className={s.block}>
            <p className={s.main_text}>120 +</p>
            <p className={s.add_text2}>Subjects taught</p>
          </div>
          <div className={s.block}>
            <p className={s.main_text}>200 +</p>
            <p className={s.add_text2}>Tutor nationalities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
