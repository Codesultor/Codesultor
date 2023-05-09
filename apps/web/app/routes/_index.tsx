import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "database";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Codesultor" }];
};

export const loader = async () => {
  return json({
    test: await db.temp.count(),
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-blue-600">Codesultor</h1>
      <p>{data.test}</p>
    </div>
  );
}
