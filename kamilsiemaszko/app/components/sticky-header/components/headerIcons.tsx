import Image from 'next/image';

const HeaderIcons = () => {
    return (
        <div className="flex justify-center lg:ml-2 my-auto">
            <a href="https://www.facebook.com/kamilxsiemaszko/?locale=pl_PL" target="_blank">
                <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="inline-block ml-2" />
            </a>
            <a href="https://www.instagram.com/kamil_siemaszko/?hl=en" target="_blank">
                <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="inline-block ml-2"
                />
            </a>
        </div>
    )
}

export default HeaderIcons;