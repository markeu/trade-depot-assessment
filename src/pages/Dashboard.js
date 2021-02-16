import React, {
  useState,
  useContext,
  useEffect
} from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/card'
import { FetchContext } from '../context/FetchContext';

const Dashboard = () => {
  const fetchContext = useContext(FetchContext);
  const [dashboardData, setDashboardData] = useState({
    status: false,
    message: '',
    timestamp: '',
    data: [],
  });

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const { data } = await fetchContext.authAxios.get(
          'getProducts'
        );
        setDashboardData(data);
      } catch (err) {
        console.log(err);
      }
    };

    getDashboardData();
  }, [fetchContext]);

  //console.log({data: dashboardData.data[0]});
// dashboardData.data.forEach(e => console.log(e.geo_details))
  return (
    <>
      <PageTitle title="Product Management Dashboard" />
      <div className="flex justify-between gap-6 flex-wrap">
  {dashboardData ? (
        dashboardData.data.map(e => (
           <Card key={e._id} imageUrl={e.image_url} subject={e.geo_details} topic='useless' />
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>

    </>
  );
};

export default Dashboard;
