
import Image from 'next/image'
const SocialLinks = () => {
  return (
    <>
     <a href="https://www.linkedin.com/in/jack-spinola-0a835927b/" target="_blank" className='z-2 px-2 li'>
              <Image
                src="/ld.png"
                alt="linkedin"
                width={65}
                height={65}
              />
            </a>
            <a href="https://github.com/kokas340" target="_blank" className='z-2 px-2 gh'>
              <Image
                src="/github.png"
                alt="github"
                width={65}
                height={65}
              />
            </a>
            <a href="mailto:jackspinola198@hotmail.com" target="_blank" className='z-2 px-2 em'>
              <Image
                src="/mail.png"
                alt="email"
                width={65}
                height={65}
              />
            </a>
            <a className='z-2 px-2 wa' target="_blank" href="https://api.whatsapp.com/send/?phone=4591450703&text&type=phone_number&app_absent=0">
              <Image
                src="/whats.png"
                alt="whatsApp"
                width={65}
                height={65}
              />
            </a>
    </>
  );
};

export default SocialLinks;
