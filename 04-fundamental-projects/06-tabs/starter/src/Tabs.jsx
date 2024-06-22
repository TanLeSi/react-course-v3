const Tabs = ({ companies, selectedCompany, filterJob }) => {
  return (
    <div className="btn-container">
      {companies.map((comp) => {
        return (
          <button
            className={selectedCompany === comp ? "job-btn active-btn" : "job-btn"}
            key={comp}
            onClick={() => filterJob(comp)}>{comp}</button>
        )
      }
      )}
    </div>
  )
}

export default Tabs
