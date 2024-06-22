import JobDescription from "./JobDescription"

const JobPanel = ({ jobs }) => {
  return (
    <article className="job-info">
      {jobs.map((job) => {
        return (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <span className="job-company">{job.company}</span>
            <p className="job-date">{job.dates}</p>
            <JobDescription desc={job.duties} />
          </div>
        )
      }
      )}
    </article>
  )
}

export default JobPanel
