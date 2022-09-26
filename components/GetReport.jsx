import { getReport } from '../api/index';
import { useEffect, useState } from 'react';

export default function GetReport({ date }) {
  const [data, setData] = useState();
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  ];
  const fetchData = () => {
    getReport().then((data) => {
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='getreport'>
      <div className='getreport__top'>
        <h3>Date</h3>
        <h3>Work hours</h3>
      </div>
      {data?.data.userData[0].works.reverse().map((work) => (
        <div className='getreport__mid'>
          <div className='getreport__mid__date'>
            {work.date}
            {date === work.date && <span className='getreport__mid__today'>Today</span>}
          </div>
          <div className='getreport__mid__hoursdata'>{work.hours}</div>
          <div className='getreport__mid__hours'>
            {hours.map((hour, index) => {
              return (
                <div
                  className={`getreport__mid__hours__box ${
                    index + 1 <= work.hours &&
                    (date === work.date
                      ? 'getreport__mid__hours__box--blue'
                      : 'getreport__mid__hours__box--red')
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
