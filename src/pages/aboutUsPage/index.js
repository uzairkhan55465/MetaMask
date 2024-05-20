const AboutUs = () => {
   



    return (
        <div className="bg-[#050507]">
        
            <div className="xl:container xl:mx-auto">
              
                <div className="bg-Herobackground bg-cover bg-no-repeat bg-center h-[70vh] md:h-screen flex items-center">
                    <div className="space-y-6 px-4 md:px-12 xl:px-24">
                        <div className="flex flex-col text-center items-center md:items-start md:text-start">
                            <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white max-w-4xl">About Us</div>
                            <h3 className="text-[#b0d357] font-bold text-lg">HEADQUARTERS</h3>
                            <h3 className="text-white text-lg">1970 Hagers Town-Cascade Maryland 21719, USA</h3>
                            <p className="text-white mt-8 mb-8">
                                MovieMint is the first financing company built on the Blockchain and owned by fans. By tokenizing projects into NFTs, it allows movie enthusiasts to directly fund and profit from films as co-owners. Powered by Web3 technology allowing open participation and radical transparency, MovieMint represents tomorrow’s entertainment model today. One where creators and audiences collectively greenlight inspired ideas without restrictive intermediaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;