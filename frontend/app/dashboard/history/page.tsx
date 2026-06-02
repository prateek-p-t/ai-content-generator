"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";
import axios from "axios";
import toast from "react-hot-toast";

interface ContentItem {
  _id: string;
  prompt: string;
  content: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<
    ContentItem[]
  >([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] =
    useState(true);

  const fetchHistory = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/api/content/history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setHistory(response.data.data);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load history"
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteContent = async (
    id: string
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      await axios.delete(
        `${API_URL}/api/content/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setHistory((prev) =>
        prev.filter(
          (item) => item._id !== id
        )
      );

      toast.success(
        "Content deleted"
      );
    } catch (error) {
      toast.error(
        "Failed to delete content"
      );
    }
  };

  const copyContent = (
    content: string
  ) => {
    navigator.clipboard.writeText(
      content
    );

    toast.success(
      "Copied to clipboard"
    );
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const filteredHistory =
    history.filter(
      (item) =>
        item.prompt
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.content
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  if (loading) {
    return (
      <div className="p-8">
        Loading history...
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Generation History
      </h1>

      <input
        type="text"
        placeholder="Search history..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border rounded-xl p-3 mb-6"
      />

      <div className="space-y-4">
        {filteredHistory.length ===
        0 ? (
          <div className="border rounded-xl p-6">
            No matching content found.
          </div>
        ) : (
          filteredHistory.map(
            (item) => (
              <div
                key={item._id}
                className="border rounded-xl p-5"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h2 className="font-semibold text-lg">
                      {item.prompt.slice(
                        0,
                        80
                      )}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {new Date(
                        item.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        copyContent(
                          item.content
                        )
                      }
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Copy
                    </button>

                    <button
                      onClick={() =>
                        deleteContent(
                          item._id
                        )
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="whitespace-pre-wrap">
                  {item.content.slice(
                    0,
                    300
                  )}

                  {item.content.length >
                    300 && "..."}
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}