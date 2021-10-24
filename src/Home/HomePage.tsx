import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="main">
      <div className="email-confirmation">
        CONFIRM YOUR EMAIL ADDRESS BUKASIN1@GMIAL.COM
      </div>

      <div className="home-main-container">
        <div className="Top">
          <div className="number-of-tasks">
            <h2 style={{ fontSize: "22px", fontWeight: 500 }}>
              Completed Tasks
            </h2>
            <p style={{ fontSize: "50px", fontWeight: 700 }}>370</p>
          </div>
          <div className="tsks-logo">Task Logo</div>
        </div>
        <div className="Middle">
          <div className="today-task-main">
            <div className="today-task">Today Tasks</div>
            <div className="add-button">
              <button>+Add Task</button>
            </div>
          </div>
          <div className="middle-content-container">
            <div className="middle-content">
              Email after registration so that I can confirm it
            </div>
            <div className="middle-content">
              Email after registration so that I can confirm it
            </div>
            <div className="middle-content">
              Email after registration so that I can confirm it
            </div>
            <div className="middle-content">
              Email after registration so that I can confirm it
            </div>
            <div className="middle-content">
              Email after registration so that I can confirm it
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="pending-task-main">
            <div className="pending-task">Pending Tasks</div>
          </div>
          <div className="bottom-content-container">
            <div className="bottom-content">
              Find Top 5 customers and get reviews from them
            </div>
            <div className="bottom-content">
              Find Top 5 customers and get reviews from them
            </div>
            <div className="bottom-content">
              Find Top 5 customers and get reviews from them
            </div>
            <div className="bottom-content">
              Find Top 5 customers and get reviews from them
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
