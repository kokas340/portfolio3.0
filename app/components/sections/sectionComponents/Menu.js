const Menu = () => {
    return (
        <>
            <ul class=" bottom-0 left-0 ">
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
