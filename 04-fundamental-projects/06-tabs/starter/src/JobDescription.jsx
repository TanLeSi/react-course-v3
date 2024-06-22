import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const JobDescription = ({ desc }) => {
  return (
    <div>
      {
        desc.map((duty) => {
          return (
            <div key={uuidv4()} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p >{duty}</p>
            </div>
          )
        })
      }
    </div>
  )
}


export default JobDescription
