import Image from 'next/image'

const ProjectPage = () => {
    return (
        <main className="min-h-screen">
            <h2 className="text-3xl text-center mt-6 ">Projects</h2>
            <div className="container mx-auto px-16 py-16 grid grid-cols-2">
                <div className="w-full h-full  p-12 text-justify text-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni similique repudiandae repellendus illo molestiae nemo, non eveniet
                    id odio cumque dolores nobis natus unde nam amet atque ducimus, cum architecto?{' '}
                </div>
                <div className="w-full h-full  flex justify-center items-center">
                    <Image src="/heroLogo.svg" objectFit="cover" width={650} height={650} alt="" />
                </div>
            </div>
        </main>
    )
}

export default ProjectPage
