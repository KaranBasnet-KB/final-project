"use client"
import Header from "@/ components/Header";
import SharedCard from "@/ components/sharedcard";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { json } from "zod";
interface HistoryItem{
  systemResult: string;
}
const Results = () => {

const [history, setHistory] = useState<HistoryItem[]>([]);
const fetchhistory = async () => {
  try{
    const user = window.localStorage.getItem("user");
    if(!user) return;
    const userId = JSON.parse(user)._id;
    const response = await fetch(`/api/recentHistory?userId=${userId}`);
    const data = await response.json();
    if(!response.ok) return;
    setHistory(data.messages || []);


  }
  catch(error){
    console.log("fetch history error:", error);

  }

};
useEffect(() => {
  fetchhistory();
}, []);
  return (
    <>
      <div className="grid grid-col-12  m-6 gap-4 bg-gray-700">
        <div className="col-span-12">
          <Header />
          <SharedCard
            pageType="results"
            subIcon="scan"
            uploadText=" No scan results yet"
            noDataText="Upload files in the scan tab to begin "
            title=" Scan results"
            subTitle="Detailed results from last scan"
            mainIcon="book-open"
          />
          
        </div>
      </div>
    </>
  );
};

export default Results;
