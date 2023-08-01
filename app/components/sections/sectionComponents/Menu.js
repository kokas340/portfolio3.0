const Menu = () => {
    return (
        <>
            <ul class="  md:flex md:flex-row gap-8 py-2 xl:flex-col 	">
                <li class="cursor-pointer hover:text-blue-500 about text-4xl  mb-2">
                    <a href="#about">About</a>
                </li>
                <li class="cursor-pointer hover:text-blue-500 education text-4xl  mb-2">
                    <a href="#education">Education</a>
                </li>
                <li class="cursor-pointer hover:text-blue-500 experience text-4xl  mb-2">
                    <a href="#experience">Experience</a>
                </li>
                <li class="cursor-pointer hover:text-blue-500 projects text-4xl  mb-2">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </>
    );
};
export default Menu;
