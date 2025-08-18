import scrollToWithOffset from "../functions/scrollToWithOffset";

const Links = ({setShowLinks}: any) => {

  const links = [
    "TRENINGI",
    "O MNIE",
    "KONTAKT",
    "FAQ"
  ];
  return (
    <div className="flex text-white justify-center items-center text-3xl lg:text-5xl flex-col w-full h-4/5 space-y-5">
      {links.map((link, index) => (
        <p 
          key={index} 
          className="link"
          onClick={() => {scrollToWithOffset(link.toLowerCase(), false); setShowLinks(false)}}
          >
          {link}
        </p>
      ))}
    </div>
  )
}

export default Links;