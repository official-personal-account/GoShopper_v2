import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (event) => {
    event.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        className="mr-sm-2 ml-sm-5"
        type="text"
        name="query"
        value={keyword}
        placeholder="Search product by name (e.g. iPhone)"
        onChange={(event) => setKeyword(event.target.value)}
      ></Form.Control>

      <Button type="submit" variant="light" className="p-2 mx-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
