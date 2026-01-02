import { redirect } from "next/navigation";

export default function GlobalPage() {
  redirect('/panel/estadias/registro')
  
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}