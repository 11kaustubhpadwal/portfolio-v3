import TagLineItem from "./TagLineItem";

const TagLine = () => {
  return (
    <>
      <TagLineItem
        taglineText={"I Build Amazing"}
        linkText={"My Work"}
        linkHref={"#projects"}
      />
      <TagLineItem
        taglineText={"Digital Solutions"}
        linkText={"Connect With Me"}
        linkHref={"#contact"}
        reverseContent
      />
    </>
  );
};

export default TagLine;
