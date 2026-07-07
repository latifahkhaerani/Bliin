import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <div className="flex">
        <Search className="text-abu mr-3" />
        <input type="text" name="Search" id="" placeholder="Search our store" />
      </div>
    </>
  );
}
