
import './App.scss';
import { avatar, contact, Program, Project } from './Data';

function App() {
  return (
    <div className='container'>
      <div className='infomation'>
        <div className='b_img'>
          <img alt='' src={avatar} />
        </div>
        <div className='myself'>
          <p className='fname'>NGUYỄN THẾ HUY</p>
          <p className='position'>Web & Mobile Developer</p>
          <div className='contact'>
            <div className='topic'>
              CONTACT INFORMATION
            </div>
            {contact &&
              contact.map((item, index) => {
                if (item.type === "line") {
                  return (
                    <div key={index} className='line_container'>
                      <i className={item.icon}></i>
                      <span>{item.title}</span>
                    </div>
                  );
                }
                return null;
              })}

            <div className='list_contact'>
              {contact &&
                contact.map((item, index) => {
                  if (item.type === "button") {
                    return (
                      <a key={index} target='_blank' href={item.link} rel="noopener noreferrer">
                        <div>
                          <i className={item.icon}></i>
                        </div>
                      </a>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
        <div className='study'>
          <div className='topic'>EDUCATION</div>
          <div className='school'>

            <p className='name'><i class="fa-solid fa-user-graduate"></i><span>(2018 - 2021) - Trường Cao Đẳng Kỹ Thuật Cao Thắng</span></p>
            <p className='industry'>Chuyên ngành Kỹ Thuật Ô Tô</p>
          </div>
          <div className='school'>
            <p className='name'><i class="fa-solid fa-user-graduate"></i><span>(2023 - 2025) - Viện đào tạo quốc tế FPT Aptech</span></p>
            <p className='industry'>Chuyên ngành lập trình viên</p>
          </div>
        </div>

        <div className='skill'>
          <p className='topic'>Skills</p>
          <ul>
            <li> Independent Working</li>
            <li> Adaptability & Flexibility</li>
            <li> Time Management & Meeting Deadlines</li>
            <li> Problem-Solving</li>
          </ul>


        </div>
        <div className='program'>
          <div className='topic'>Programming Languages</div>


          {Program.map((item, index) => (
            <ul className='grogram_topic' key={index}>
              <li>{item.title}</li>
              <div className='list_item'>
                {item.child.map((items, indexs) => (
                  <button key={indexs}>{items.title}</button>
                ))}
              </div>
            </ul>
          ))}


        </div>

      </div>
      <div className='awards_experient_project'>
        <div className='awards'>
          <div className='awards topic'>Awards & Achievements</div>
          <ul>
            <li>
              <p>Top 10 Outstanding Projects – Web Design Category – TechWiz 4 | 2023</p>
              <p> Recognized among the top 10 web design projects in TechWiz 4, hosted by Aptech India. The project was developed by a team of 6 members and completed within 72 hours.</p>
            </li>
            <li>
              <p>Second Prize – Web App Development Category – TechWiz 5 | 2024</p>
              <p>Achieved second place in the Web App Development category at TechWiz 5, hosted by Aptech India. Developed by a team of 6 members and completed within 96 hours.</p>
            </li>
          </ul>
        </div>
        <div className='experient'>
          <div className='topic'>Experient</div>
          <ul>
            <li>
              <p> Graphic Designer (Banner Design) | 08/2020 – 01/2021</p>
              <p> 5 months of experience in creating banner designs for marketing and branding in a digital environment.</p>
            </li>
            <li>
              <p> E-commerce Specialist | 03/2022 – 03/2023</p>
              <p> 1 year of experience in the e-commerce industry, focusing on digital sales, marketing, and platform management.</p>
            </li>

            <li>
              <p>Web & Mobile Developer – [Unitec Solution] (Japanese Company) | 02/2025 – Present</p>
              <p>5 months of experience developing web and mobile applications.</p>
            </li>
          </ul>
        </div>
        <div className='project'>
          <p className='topic'>Project</p>
          <ul>
            {Project.map((item, index) => (
              <li className='project_item' key={index}>
                <p className='name'>{item.name}</p>
                <div className='row_11'>
                  <div className='left'>
                    {item.language.map((items, indexs) => (
                      <p key={indexs}>
                        {items.link !== "" && (
                          <a href={items.link} target='_blank' rel="noopener noreferrer" ><i class="fa-brands fa-github"></i></a>
                        )}
                        <span>{items.title}:</span>{items.name}
                      </p>
                    ))}


                  </div>
                  <div className='right'>
                    <p><span>Time:</span>{item.time}</p>
                    <p className='box_btn'>
                      {item.video !== "" && (
                        <a href={item.video} target='_blank' rel="noopener noreferrer">
                          <button>Video</button>
                        </a>
                      )}
                      {item.document !== "" && (
                        <a href={item.document} target='_blank' rel="noopener noreferrer">
                          <button>Document</button>
                        </a>
                      )}

                    </p>
                  </div>
                </div>
              </li>
            ))}


          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
