"use client";

import { useState } from "react";
import { API_URL } from "@/lib/api";
import toast from "react-hot-toast";
import axios from "axios";

export default function GeneratePage() {
  const [contentType, setContentType] = useState("Blog Post");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [audience, setAudience] = useState("");
  const [wordCount, setWordCount] = useState("500");
  const [tone, setTone] = useState("Professional");
  const [language, setLanguage] = useState("English");

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const generateContent = async () => {
    if (!topic.trim()) {
      toast.error("Topic is required");
      return;
    }

    if (!audience.trim()) {
      toast.error("Target Audience is required");
      return;
    }

    try {
      setLoading(true);

      const prompt = `
Content Type: ${contentType}

Topic: ${topic}

Keywords: ${keywords}

Target Audience: ${audience}

Word Count: ${wordCount}

Tone: ${tone}

Language: ${language}

Generate high-quality content.
`;

      const response = await axios.post(
  `${API_URL}/api/ai/generate`,
  {
    prompt,
  }
);

setContent(response.data.content);

const token = localStorage.getItem("token");

await axios.post(
  `${API_URL}/api/content/save`,
  {
    prompt,
    content: response.data.content,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

toast.success(
  "Content generated and saved!"
);
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.response?.data?.error ||
          "Failed to generate content"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyContent = () => {
    navigator.clipboard.writeText(content);

    toast.success("Content copied successfully!");
  };

  const downloadContent = () => {
    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "generated-content.txt";

    a.click();

    URL.revokeObjectURL(url);

    toast.success("Content downloaded!");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        AI Content Generator
      </h1>

      <div className="border rounded-xl p-6 space-y-5">
        <div>
          <label className="font-medium">
            Content Type
          </label>

          <select
            value={contentType}
            onChange={(e) =>
              setContentType(e.target.value)
            }
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Blog Post</option>
            <option>LinkedIn Post</option>
            <option>Email Copy</option>
            <option>Instagram Caption</option>
            <option>SEO Article</option>
            <option>Product Description</option>
          </select>
        </div>

        <div>
          <label className="font-medium">
            Topic
          </label>

          <input
            value={topic}
            onChange={(e) =>
              setTopic(e.target.value)
            }
            placeholder="Enter topic..."
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Keywords
          </label>

          <input
            value={keywords}
            onChange={(e) =>
              setKeywords(e.target.value)
            }
            placeholder="AI, Marketing, SEO..."
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Target Audience
          </label>

          <input
            value={audience}
            onChange={(e) =>
              setAudience(e.target.value)
            }
            placeholder="Students, Developers, Business Owners..."
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Word Count
          </label>

          <input
            type="number"
            value={wordCount}
            onChange={(e) =>
              setWordCount(e.target.value)
            }
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Tone
          </label>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Professional</option>
            <option>Casual</option>
            <option>Friendly</option>
            <option>Marketing</option>
            <option>Persuasive</option>
          </select>
        </div>

        <div>
          <label className="font-medium">
            Language
          </label>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        <button
          onClick={generateContent}
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "Generating..."
            : "Generate Content"}
        </button>
      </div>

      {content && (
        <div className="mt-8 border rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Generated Content
            </h2>

            <div className="flex gap-2">
              <button
                onClick={copyContent}
                className="border px-4 py-2 rounded-lg"
              >
                Copy
              </button>

              <button
                onClick={downloadContent}
                className="border px-4 py-2 rounded-lg"
              >
                Download
              </button>
            </div>
          </div>

          <pre className="whitespace-pre-wrap">
            {content}
          </pre>
        </div>
      )}
    </div>
  );
}

