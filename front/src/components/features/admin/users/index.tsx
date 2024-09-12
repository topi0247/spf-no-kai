"use client";

import Image from "next/image";

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `ユーザー${i}`,
  image_url: "https://avatars.githubusercontent.com/u/23026318?s=96&v=4",
  profile: {
    term: "52期",
  },
  createdAt: "2021/10/01",
}));

export default function Users() {
  return (
    <>
      <div className="my-4 max-h-60 overflow-y-auto rounded border p-4">
        <ul className="grid grid-cols-3 gap-3">
          {data.map((user, index) => (
            <li key={index} className="flex items-center justify-start gap-2">
              <div className="aspect-square w-8">
                <Image
                  src={user.image_url}
                  alt={user.name}
                  width={96}
                  height={96}
                  className="size-full rounded-full object-cover"
                />
              </div>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
