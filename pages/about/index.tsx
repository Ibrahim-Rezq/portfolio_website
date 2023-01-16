import Link from 'next/link'
import React from 'react'
import { SEOHead } from '../../components/Global/SEOHead'
import Button from '../../components/UI/Button'
import Card from '../../components/UI/Card'
import { Container } from '../../components/UI/Container'
import SectionHeader from '../../components/UI/SectionHeader'
import { BsDownload } from 'react-icons/bs'

const About = () => {
    const socials = [
        {
            title: 'Linkedin',
            iconName: 'Linkedin',
            link: 'https://www.linkedin.com/in/ibrahim-rezq/',
        },
        {
            title: 'GitHub',
            iconName: 'GitHub',
            link: 'https://github.com/Ibrahim-Rezq',
        },
        { title: 'Soon...', iconName: 'Youtube', link: '' },
        { title: 'Soon..', iconName: 'Twitter', link: '' },
        { title: 'Soon.', iconName: 'Instagram', link: '' },
    ]

    return (
        <div className='min-h-cont'>
            <SEOHead title={'About'} />
            <Container center classes='py-0 grid place-items-center min-h-cont'>
                <SectionHeader title='About Me' />
                <section className='flex justify-center items-center my-8 text-center md:text-start flex-col-reverse md:flex-row'>
                    <p className='p-8 max-w-xl text-lg font-semibold'>
                        Ibrahim Rezq is a 22 years old Web developer by day Game
                        Developer By night. <br />
                        Self-Taught Developer From the start to the end started
                        with Youtube tutorials progressed to Udemy and Udacity
                        and fell in love with the Docs of the internet. <br />{' '}
                        Born and raised in Egypt.
                        <span className='block mt-4'>
                            <Button iconRight={<BsDownload />}>
                                <a
                                    href='../../assets/Ibrahim_Rezq_Resume.pdf'
                                    download
                                >
                                    Download CV
                                </a>
                            </Button>
                        </span>
                    </p>
                </section>
                <ul className='grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center'>
                    {socials.map((item: any) => {
                        return (
                            <li
                                key={item.title}
                                className='group text-slate-600'
                            >
                                <Link href={item.link} target='_blank'>
                                    <Card data={item} size='text-2xl' />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </div>
    )
}

export default About
