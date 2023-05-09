import { type V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Codesultor" }];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-blue-600">Codesultor</h1>
    </div>
  );
}
