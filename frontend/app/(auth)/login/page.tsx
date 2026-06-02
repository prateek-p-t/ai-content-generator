"use client";
import { API_URL } from "@/lib/api";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
const res = await axios.post(
  `${API_URL}/api/auth/login`,
  {
    email,
    password,
  }
);

console.log("LOGIN SUCCESS:", res.data);

localStorage.setItem(
  "token",
  res.data.token
);

router.push("/dashboard");

  } catch (error: any) {
  console.log("LOGIN ERROR:", error);
  console.log("RESPONSE:", error?.response?.data);

  alert(
    error?.response?.data?.message ||
    error?.message ||
    "Login Failed"
  );
}
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-4 border p-6 rounded-xl"
      >
        <h1 className="text-2xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}