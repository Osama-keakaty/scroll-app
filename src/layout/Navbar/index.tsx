import MainInput from "@Components/Input";
import { useAppStore } from "@Stores/AppStore";

export const Navbar = () => {
  const { searchBoxValue, setSearchBoxValue } = useAppStore();
  return (
    <div className="w-full flex justify-center items-center bg-white shadow-custom p-2 rounded-2xl border-3 border-primary-lighter h-20">
      <div className="flex justify-center w-full max-w-100">
        <MainInput setValue={setSearchBoxValue} value={searchBoxValue} />
      </div>
    </div>
  );
};