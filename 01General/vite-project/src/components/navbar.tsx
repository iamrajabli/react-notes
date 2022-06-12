interface INavbarProps {
    websiteName: string,
    surname: string
}

const Navbar = ({ websiteName, surname }: INavbarProps) => {
    return (
        <div className="w-full h-[50px] bg-red-600 text-white ">
            <div className="w-[1170px] mx-auto flex justify-between items-center h-full">
                <div className="navbar__left">
                    {websiteName}
                </div>
                <div className="navbar__right">
                    <ul className="flex">
                        <li className=" mr-5">{surname}</li>
                        <li className=" mr-5">Home</li>
                        <li className=" mr-5">Home</li>
                        <li className="">Home</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;