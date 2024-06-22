import { useState } from "react";
import { useEffect } from "react";
import Tabs from "./Tabs";
import JobPanel from "./JobPanel";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedJobs, setSelectedJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const data = await fetch(url);
      const fetchedJobs = await data.json();
      const firstCompany = fetchedJobs[0].company;
      setJobs(fetchedJobs);
      setSelectedCompany(firstCompany);
      setSelectedJobs(fetchedJobs.filter((job) => job.company === firstCompany));
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchJobs()
  }, []);

  const filterJob = (company) => {
    setSelectedCompany(company)
    setSelectedJobs(jobs.filter((job) => job.company === company));
  }
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
      <Tabs companies={allCompanies} selectedCompany={selectedCompany} filterJob={filterJob} />
      <JobPanel jobs={selectedJobs} />
    </section>
  )
}
export default App;
