import React from 'react'

function About() {
    return (
        <section id='about-section' className="bg-gray-300">
            <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl grid grid-cols-2">
                <div className="font-light text-dark ">
                    <h2 className="text-5xl font-semibold font-thinspaced tracking-widest text-gray-900 mb-20">SOME INTEL ON ME</h2>
                    <p className="mb-6 text-2xl text-left flex-col">
                        <span className='text-primary font-textnormal text-3xl'>Name</span>: <span className='text-secondary font-robotic text-5xl'>Ishaan Minocha</span><br />
                        <span className='text-primary font-textnormal text-3xl'>Age</span>: <span className='text-secondary font-robotic text-5xl'>20</span><br />
                        <span className='text-primary font-textnormal text-3xl'>High-School</span>: <span className='text-secondary font-robotic text-5xl'>Ryan International School, Vasant Kunj
                        </span><br />
                        <span className='text-primary font-textnormal text-3xl'>Currently pursuing</span>: <span className='text-secondary font-robotic text-5xl'>B. Tech. Computer Science and Engineering
                        </span><br />
                        <span className='text-primary font-textnormal text-3xl'>From institute</span>: <span className='text-secondary font-robotic text-5xl'>Maharaja Agrasen Institute Of Technology, Delhi</span><br />
                    </p>
                    <p className="mb-6 text-2xl text-left">
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                        I am fluent in classics like C++, Javascript and Go.
                        My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.
                        Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-20">
                    <img className="w-full rounded-lg h-96" src="/gradient-bg.jpg" alt="1" />
                    <img className="w-full mt-10 rounded-lg h-96" src="/gradient-bg.jpg" alt="2" />
                </div>
            </div>
        </section>
    )
}

export default About