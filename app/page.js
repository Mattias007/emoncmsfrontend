"use client"
import CardList from '@/components/cardList';
import { useState, useEffect } from 'react';


export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        const res = await fetch('https://acapi.tak21maasik.itmajakas.ee/ControllerInfo',{ cache: 'no-store' })
        return res.json()


    }
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });

    const intervalId = setInterval(() => {
      fetchData().then((result) => {
        setData(result);
      });
    }, 5000); // Fetch data every 5 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
    
  }, []); // Empty dependency array triggers the effect only once during mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {loading && <p className="loading">Loading...</p>}
      <CardList data={data} />
    </div>
  );
};