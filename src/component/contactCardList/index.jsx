import React from "react";
import styled from "styled-components";
import { contacts } from "../mockData";


const ContactsDetail = () => {

  return (
    <ContactWrapper>
      <p>Contact</p>
      <div>
        {contacts?.map((contact, index) => (
          <CardList key={contact.image} className="">
            <img
              src={contact.image}
              alt={contact.name}
              className="display_img"
            />
            <span className="title">{contact.name}</span>
          </CardList>
        ))}
      </div>
    </ContactWrapper>
  );
};

export default ContactsDetail;

const ContactWrapper = styled.div`
margin:20px 0;
>p{
  font-size: 14px;

}
`
const CardList = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0;
  padding: 8px;

  gap: 0.5rem;
  &:hover {
    background-color: #f4e9e9;
  }
  .title {
    font-family: Inter;
    color: #1c1c1c;
    white-space: nowrap;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
  .display_img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;