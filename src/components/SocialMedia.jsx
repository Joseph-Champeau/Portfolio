import { v4 as uuid } from 'uuid';

function SocialMedia(){
    const socialMediaArr = [
        {
            id: '1',
            platform: 'Github',
            url: 'https://github.com/Joseph-Champeau',
            icon: 'fa-github'
        },
        {
            id: '2',
            platform: 'Linkedin',
            url: 'https://www.linkedin.com/in/joseph-champeau-3b7ab01b1/',
            icon: 'fa-linkedin'
        }
    ]

    return(
        <ul className="social-media-container">
            {socialMediaArr && socialMediaArr.map(socialMedia =>{
                return <li className="social-media-icon" key={uuid()}>
                            <a href={socialMedia.url} target="_blank" aria-label={socialMedia.platform}>
                                <i className={'fab fa-xl ' + socialMedia.icon}></i>
                            </a>
                        </li>
                })
            }
        </ul>
    )
}

export default SocialMedia;