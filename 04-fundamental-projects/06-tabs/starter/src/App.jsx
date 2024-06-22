import { useState } from "react";
import { useEffect } from "react";
import Tabs from "./Tabs";
import JobPanel from "./JobPanel";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState("");
  const fetchJobs = async () => {
    try {
      const data = await fetch(url);
      const fetchedJobs = await data.json();
      const firstCompany = fetchedJobs[0].company;
      setJobs(fetchedJobs);
      setSelectedCompany(firstCompany);
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchJobs()
  }, []);
  const filteredJobs = jobs.filter((job) => job.company === selectedCompany);
  const allCompanies = [... new Set(jobs.map((job) => job.company))]
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  };
  return (
    <section className="jobs-center">
      <Tabs companies={allCompanies} selectedCompany={selectedCompany} filterJob={setSelectedCompany} />
      {filteredJobs && <JobPanel jobs={filteredJobs} />}
    </section>
  )
}
export default App;
