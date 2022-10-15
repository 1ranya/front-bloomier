import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiInstagram, SiShutterstock, SiGithub } from "react-icons/si";
import { FaPinterestP, FaEtsy } from "react-icons/fa";

import Footer from '../components/Footer';
import links from '../files/links'
export default function Chat() {
    const styleBloomierAccountsText = 'text-faded-white font-thin' 
    const styleBloomierAccountsGrid = 'flex flex-row p-[10px] my-[10px] gap-[20px] items-start phone:justify-between '

    const styleLinks = {
        hideBlockPhoneSize: 'phone:hidden widePhone:block', 
        hideBlockWidePhoneSize: 'phone:block widePhone:hidden', 
        styleBlock: 'font-medium phone:w-[20px] phone:h-[20px] phone:grid phone:grid-cols-2 phone:gap-x-7 phone:items-center widePhone:inline '
    }

    return (
    <div className='flex flex-col justify-between h-[100%] min-h-[93vh]'>
        <div>
            <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Let's talk</p>
            <div className='ml-[1rem] mr-[1rem] mb-[1rem]'>
                <p className='font-text text-l text-secondary-color text-center' > 
                    Guys! all your suggestions and requests are welcomed. <br/>
                </p>
            </div>
            <div className='
                phone:grid phone:w-[88%] phone:ml-[6%] phone:border-secondary-color phone:border-2 phone:rounded-md
                widePhone:ml-[6%] widePhone:w-[87%]
                wideTablet:grid-cols-2 wideTablet:m-0 wideTablet:bottom-[3%] wideTablet:p-[2rem] wideTablet:w-[80%] text-[#F0FFFF]
                wideTablet:ml-[9%] wideTablet:bg-primary-color z-[9] gap-x-[20px]
            '>
                <div className={styleBloomierAccountsGrid}>
                    <div className='flex flex-col'>
                        <p className={styleBloomierAccountsText}> 
                            Bloomier emails is available for any kind of suggestion.  
                        </p>
                        <a href={links[3]} className={styleLinks.styleBlock} >
                            <span><MdOutlineMarkEmailUnread size={20} className={styleLinks.hideBlockWidePhoneSize}/></span>bloomier.photography@gmail.com
                        </a>
                    </div>
                    <a href={links[3]} className={styleLinks.hideBlockPhoneSize}>
                        <span>
                            <MdOutlineMarkEmailUnread size={60} />
                        </span> 
                    </a>
                </div>
                <div className={`bg-[#dda15e19] ${styleBloomierAccountsGrid}`}>
                    <div className='flex flex-col'>
                        <p className={styleBloomierAccountsText}> 
                            Bloomier instagram account includes all the updates, behind the scenes and the new art work
                        </p>
                        <a href={links[2]} target="_blank" className={styleLinks.styleBlock} rel="noreferrer">
                            <span><SiInstagram size={20} className={styleLinks.hideBlockWidePhoneSize}/></span>@bloomier
                        </a>
                    </div>
                    <a href={links[2]} className={styleLinks.hideBlockPhoneSize}>
                        <span><SiInstagram size={60}/></span>
                    </a>
                </div>
                <div className={styleBloomierAccountsGrid}>
                    <div className='flex flex-col'>
                        <p className={styleBloomierAccountsText}> 
                            All my paintings are available for sale in my Bloomier Store in Etsy plateform 
                        </p>
                    <a href={links[1]} target="_blank" className={styleLinks.styleBlock} rel="noreferrer">
                        <span><FaEtsy size={20} className={styleLinks.hideBlockWidePhoneSize}/></span>@BloomierStore 
                    </a>
                    </div>
                    <a href={links[1]} target="_blank" rel="noreferrer" className={styleLinks.hideBlockPhoneSize} >
                        <span><FaEtsy size={60}/></span>
                    </a>
                </div>
                <div  className={`bg-[#dda15e19] ${styleBloomierAccountsGrid}`}>
                    <div className='flex flex-col'>
                        <p className={styleBloomierAccountsText}> 
                            Paintings and Photos collections are available on Pinterest gallery</p>
                        <a href={links[2]} target="_blank" className={styleLinks.styleBlock} rel="noreferrer">
                            <span><FaPinterestP size={20} className={styleLinks.hideBlockWidePhoneSize}/></span>@bloomierphotography
                        </a>
                    </div>
                    <a href={links[2]} target="_blank" rel="noreferrer" className={styleLinks.hideBlockPhoneSize} >
                        <span><FaPinterestP size={60}/></span> 
                    </a>
                </div>
                <div className={styleBloomierAccountsGrid}>
                   <div className='flex flex-col'>
                        <p className={styleBloomierAccountsText}> You can see and purshase Bloomier photos via shutterstock plateform </p>
                        <a href={links[0]} target="_blank" rel="noreferrer" className={styleLinks.styleBlock}>
                            <span><SiShutterstock size={20} className={styleLinks.hideBlockWidePhoneSize}/></span> @Bloomier 
                        </a>
                    </div>
                    <a href={links[0]} target="_blank" rel="noreferrer" className={styleLinks.hideBlockPhoneSize}>
                        <span><SiShutterstock size={60}/></span>
                    </a>
                </div>
                <div className={`bg-[#dda15e19] ${styleBloomierAccountsGrid}`}>
                    <div className='flex flex-col'>
                        <p className={styleBloomierAccountsText}> If you are intrested about how i built the bloomier website, here's my github link to check out the complete project code</p>
                        <a href={links[4]} target="_blank" rel="noreferrer" className={styleLinks.styleBlock}> 
                            <span><SiGithub size={20} className={styleLinks.hideBlockWidePhoneSize}/></span>@1ranya 
                        </a>
                    </div>
                    <a href={links[4]} target="_blank" rel="noreferrer" className={styleLinks.hideBlockPhoneSize}>
                        <span><SiGithub size={60}/></span>
                    </a>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
  )
}
