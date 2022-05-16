import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Container } from "./styles";

import {
  MagnifyingGlass,
} from "phosphor-react";

export function FilterText({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <Container>
      <div>
        <MagnifyingGlass size={18} /> {""}
      </div>
      <input
        value={value || ""}
        placeholder="Pesquisar"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </Container>
  );
}
