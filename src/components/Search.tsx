import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/searched/" + input); //got to the page (inputted by user)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <label>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        <FaSearch />
      </label>
    </FormStyle>
  );
}
export default Search;

const FormStyle = styled.form`
  margin-bottom: 2rem;
  text-align: center;
  input::placeholder {
    color: #777777;
  }
  label {
    position: relative;
    width: 100%;
  }
  input {
    margin: 0 auto;
    color: #444;
    padding: 1rem 2rem 1rem 3rem;
    border: none;
    border:3px solid #666;
    border-radius: 1rem;
    width: 100%;
    max-width: 400px;
  }
  input[type="text"]:focus {
  border: 3px solid  ${(props) => props.theme.primary};
  outline: 0;
}
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #666;
  }
`;
