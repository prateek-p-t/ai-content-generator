"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [stats, setStats] = useState({
    totalGenerations: 0,
    totalWords: 0,
  });

  const fetchStats = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/api/content/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats({
        totalGenerations:
          response.data.totalGenerations,
        totalWords:
          response.data.totalWords,
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load profile stats"
      );
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        Profile
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">
            Total Generations
          </h2>

          <p className="text-4xl font-bold">
            {stats.totalGenerations}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">
            Total Words Generated
          </h2>

          <p className="text-4xl font-bold">
            {stats.totalWords}
          </p>
        </div>
      </div>
    </div>
  );
}