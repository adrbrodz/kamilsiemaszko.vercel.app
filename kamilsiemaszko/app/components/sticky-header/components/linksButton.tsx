import Image from 'next/image';

const LinksButton = ({showLinks, setShowLinks}: any) => {
    return (
        <Image
            onClick={() => setShowLinks(!showLinks)}
            src="/icons/menu.svg"
            alt="Menu"
            width={20}
            height={20}
            className="ml-auto z-100 flex cursor-pointer"
        />
    );
}

export default LinksButton;