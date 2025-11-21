import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ModelCard } from '../../Components/ModelCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const MyDownloads = () => {
  const {user} = use(AuthContext)
    const [models, setModels] = useState([])
    const [loading, setLoading] = useState(true)
    
  useEffect(() => {
      
      fetch(`http://localhost:3000/myDownloads?email=${user.email}`, {
        headers: {authorization: `Bearer ${user.accessToken}`,}
      })
        .then(res => res.json())
        .then(data => {
          //console.log(data)
          setModels(data)
          setLoading(false)
        });
     }
      , [user])
    
    if (!loading) {
      return <LoadingSpinner></LoadingSpinner>
    }
    return (
      <div>
        my Downloads
         <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                {
                  models?.map(model => <ModelCard key={model._id} model={model}></ModelCard>)
              }
              </div>
      </div>
    );
};

export default MyDownloads;