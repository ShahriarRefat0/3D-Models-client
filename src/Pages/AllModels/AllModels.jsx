import { data, useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllModels = () => {
  const data = useLoaderData()
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false)
  //console.log(models);
  const handleSearch = (e) => {
    e.preventDefault()
    const search_text = e.target.search.value

setLoading(true)
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data)
        setLoading(false)
      });
  }


  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div>
      <div className="text-2xl text-center font-bold"> All Models</div>
      <p className=" text-center mb-10 ">Explore 3d models.</p>
      <form onSubmit={handleSearch} className="text-center my-5 space-x-3.5">
        <label className="input rounded-4xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-secondary rounded-4xl">Search</button>
      </form>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {data?.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
