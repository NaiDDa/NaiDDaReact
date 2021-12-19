
import styled from "styled-components";
import Topbar from "../organisms/Topbar"

const Contact = () => {



  return (
    <>
<Topbar/>
<Title>Contact</Title>
 Contact
    </>
  );
};
const Title = styled.h2`
  text-align: center;
  border-bottom: 1px solid #ddd;
  margin: 0;
  padding: 10px;
`;


export default Contact;
