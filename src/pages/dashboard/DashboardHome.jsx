import { Dashboard } from "../../components/Dashboard/Dashboard";
import { sidebar } from "../../components/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="">
      <Sidebar />
      <Dashboard />
    </main>
  )
}