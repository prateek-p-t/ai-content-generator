"use client";

import { useState } from "react";
import { API_URL } from "@/lib/api";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await axios.post(
       `${API_URL}/api/auth/register`,
        form
      );

      alert("Registration Successful");

      router.push("/login");
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-4 border p-6 rounded-xl"
      >
        <h1 className="text-2xl font-bold">
          Register
        </h1>

        <input
          placeholder="Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}