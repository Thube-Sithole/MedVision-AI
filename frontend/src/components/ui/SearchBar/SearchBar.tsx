import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  placeholder?: string;
};

function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <Search size={18} />

      <input
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;