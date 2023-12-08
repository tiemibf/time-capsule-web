"use client";

import { Memory } from "@/app/page";
import { api } from "@/lib/api";
import dayjs from "dayjs";
import Cookie from "js-cookie";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MemoryById() {
  const token = Cookie.get("token");
  const { id } = useParams();
  const [memory, setMemory] = useState<Memory>();

  const fetchData = async () => {
    try {
      const { data } = await api.get(`/memories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMemory(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!memory) {
    return;
  }

  return (
    <div key={memory.id} className="space-y-4">
      <Image
        src={memory?.coverUrl}
        alt=""
        width={592}
        height={288}
        className="aspect-video w-full rounded-lg object-cover"
      />
      <div className="flex flex-1 flex-col gap-4 p-16 pb-6 text-justify">
        {memory?.content}
      </div>
      <div className="mx-16 flex flex-1 justify-between pb-10 ">
        <Link
          href={`/`}
          className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <time className="flex items-center justify-end gap-2 text-sm text-gray-400">
          {dayjs(memory.createdAt).format("D[ de ]MMM[, ]YYYY")}
        </time>
      </div>
    </div>
  );
}
